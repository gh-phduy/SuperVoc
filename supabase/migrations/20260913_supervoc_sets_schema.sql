-- ==============================================================================
-- SUPERVOC MIGRATION: ADD SETS (BỘ TỪ VỰNG) & RELATIONS TO SUPABASE
-- Run this script in Supabase Dashboard -> SQL Editor -> Run
-- ==============================================================================

-- 1. Create table for Word Sets (Bộ từ vựng: Oxford 5000, IELTS, TOEIC, v.v.)
CREATE TABLE IF NOT EXISTS public.supervoc_sets (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    level TEXT NOT NULL DEFAULT 'B2',
    terms_count INT DEFAULT 0,
    description TEXT,
    category TEXT,
    author TEXT DEFAULT 'SuperVoc / Oxford 5000',
    days_ago TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Add set_id directly to supervoc_words for 1-to-many relationship
ALTER TABLE public.supervoc_words 
ADD COLUMN IF NOT EXISTS set_id TEXT REFERENCES public.supervoc_sets(id) ON DELETE SET NULL;

-- 3. Add detailed_meaning_vi and nuance_table to supervoc_words if not existing
ALTER TABLE public.supervoc_words 
ADD COLUMN IF NOT EXISTS detailed_meaning_vi TEXT;

ALTER TABLE public.supervoc_words 
ADD COLUMN IF NOT EXISTS nuance_table JSONB;

-- 4. Create join table supervoc_set_words for many-to-many relationships
CREATE TABLE IF NOT EXISTS public.supervoc_set_words (
    id TEXT PRIMARY KEY,
    set_id TEXT NOT NULL REFERENCES public.supervoc_sets(id) ON DELETE CASCADE,
    word_id TEXT NOT NULL REFERENCES public.supervoc_words(id) ON DELETE CASCADE,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT supervoc_set_words_unique UNIQUE (set_id, word_id)
);

-- 5. Create Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_supervoc_sets_order ON public.supervoc_sets(order_index);
CREATE INDEX IF NOT EXISTS idx_supervoc_words_set_id ON public.supervoc_words(set_id);
CREATE INDEX IF NOT EXISTS idx_supervoc_set_words_set_id ON public.supervoc_set_words(set_id);
CREATE INDEX IF NOT EXISTS idx_supervoc_set_words_word_id ON public.supervoc_set_words(word_id);

-- 6. Enable Row Level Security (RLS)
ALTER TABLE public.supervoc_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.supervoc_set_words ENABLE ROW LEVEL SECURITY;

-- 7. RLS Policies: Public Read Access for Mobile App
DROP POLICY IF EXISTS "Allow public read on supervoc_sets" ON public.supervoc_sets;
CREATE POLICY "Allow public read on supervoc_sets" ON public.supervoc_sets FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read on supervoc_set_words" ON public.supervoc_set_words;
CREATE POLICY "Allow public read on supervoc_set_words" ON public.supervoc_set_words FOR SELECT USING (true);

-- 8. RLS Policies: Allow Insert/Update/Delete (For Seeding script & sync)
DROP POLICY IF EXISTS "Allow all on supervoc_sets" ON public.supervoc_sets;
CREATE POLICY "Allow all on supervoc_sets" ON public.supervoc_sets FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on supervoc_set_words" ON public.supervoc_set_words;
CREATE POLICY "Allow all on supervoc_set_words" ON public.supervoc_set_words FOR ALL USING (true) WITH CHECK (true);
