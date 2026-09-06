-- ==============================================================================
-- SUPERVOC DATABASE SCHEMA & RLS POLICIES FOR SUPABASE
-- ==============================================================================

-- 1. Table for Roots (Gốc từ)
CREATE TABLE IF NOT EXISTS public.supervoc_roots (
    id TEXT PRIMARY KEY,
    root_name TEXT NOT NULL,
    variants JSONB DEFAULT '[]'::jsonb,
    meaning_en TEXT NOT NULL,
    meaning_vi TEXT NOT NULL,
    origin_language TEXT NOT NULL,
    origin_word TEXT,
    etymology_story TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Table for Words (Kho từ vựng toàn thư)
CREATE TABLE IF NOT EXISTS public.supervoc_words (
    id TEXT PRIMARY KEY,
    root_id TEXT REFERENCES public.supervoc_roots(id) ON DELETE SET NULL,
    term TEXT NOT NULL,
    part_of_speech TEXT NOT NULL,
    phonetic_us TEXT,
    phonetic_uk TEXT,
    definition_vi TEXT NOT NULL,
    definition_en TEXT,
    cefr_level TEXT DEFAULT 'B1',
    roots JSONB DEFAULT '[]'::jsonb,
    anatomy_prefix TEXT,
    anatomy_prefix_vi TEXT,
    anatomy_root TEXT,
    anatomy_root_vi TEXT,
    anatomy_root_parts JSONB DEFAULT '[]'::jsonb,
    anatomy_suffix TEXT,
    anatomy_suffix_vi TEXT,
    anatomy_formula TEXT,
    anatomy_explanation TEXT,
    collocations JSONB DEFAULT '[]'::jsonb,
    examples JSONB DEFAULT '[]'::jsonb,
    synonyms JSONB DEFAULT '[]'::jsonb,
    antonyms JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Table for Word Families (Gia đình từ vựng)
CREATE TABLE IF NOT EXISTS public.supervoc_word_families (
    id TEXT PRIMARY KEY,
    word_id TEXT REFERENCES public.supervoc_words(id) ON DELETE CASCADE,
    noun_forms JSONB DEFAULT '[]'::jsonb,
    verb_forms JSONB DEFAULT '[]'::jsonb,
    adj_forms JSONB DEFAULT '[]'::jsonb,
    adv_forms JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Indexes for super-fast search
CREATE INDEX IF NOT EXISTS idx_supervoc_roots_order ON public.supervoc_roots(order_index);
CREATE INDEX IF NOT EXISTS idx_supervoc_words_term ON public.supervoc_words(term);
CREATE INDEX IF NOT EXISTS idx_supervoc_words_root_id ON public.supervoc_words(root_id);
CREATE INDEX IF NOT EXISTS idx_supervoc_words_cefr ON public.supervoc_words(cefr_level);

-- Enable Row Level Security (RLS)
ALTER TABLE public.supervoc_roots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.supervoc_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.supervoc_word_families ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies: Public Read Access (Mobile App)
DROP POLICY IF EXISTS "Allow public read on supervoc_roots" ON public.supervoc_roots;
CREATE POLICY "Allow public read on supervoc_roots" ON public.supervoc_roots FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read on supervoc_words" ON public.supervoc_words;
CREATE POLICY "Allow public read on supervoc_words" ON public.supervoc_words FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow public read on supervoc_word_families" ON public.supervoc_word_families;
CREATE POLICY "Allow public read on supervoc_word_families" ON public.supervoc_word_families FOR SELECT USING (true);

-- 5. RLS Policies: Allow Insert/Update/Delete (For Seeding script & Data Management)
DROP POLICY IF EXISTS "Allow all on supervoc_roots" ON public.supervoc_roots;
CREATE POLICY "Allow all on supervoc_roots" ON public.supervoc_roots FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on supervoc_words" ON public.supervoc_words;
CREATE POLICY "Allow all on supervoc_words" ON public.supervoc_words FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow all on supervoc_word_families" ON public.supervoc_word_families;
CREATE POLICY "Allow all on supervoc_word_families" ON public.supervoc_word_families FOR ALL USING (true) WITH CHECK (true);

