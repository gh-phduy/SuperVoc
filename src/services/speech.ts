import * as Speech from 'expo-speech';

export type VoiceAccent = 'us' | 'uk';

export async function speakWord(text: string, accent: VoiceAccent = 'us', rate: number = 0.95): Promise<void> {
  if (!text || !text.trim()) return;

  try {
    // Stop any ongoing speech
    await Speech.stop();

    const languageCode = accent === 'uk' ? 'en-GB' : 'en-US';

    Speech.speak(text.trim(), {
      language: languageCode,
      pitch: 1.0,
      rate: rate,
    });
  } catch (err) {
    console.warn('Speech playback failed:', err);
  }
}

export function stopSpeech(): void {
  Speech.stop();
}
