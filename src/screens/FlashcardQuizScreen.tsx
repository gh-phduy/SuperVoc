import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ROOTS_DATABASE, RootItem, DerivedWord } from '../data/roots-database';
import { speakWord } from '../services/speech';
import {
  ArrowLeft,
  RotateCw,
  Check,
  X,
  Volume2,
  Sparkles,
  Trophy,
  Dna,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface FlashcardQuizScreenProps {
  onBack: () => void;
}

export const FlashcardQuizScreen: React.FC<FlashcardQuizScreenProps> = ({ onBack }) => {
  // Flatten all words across roots for flashcard study
  const allRoots = Object.values(ROOTS_DATABASE);
  const allQuizWords: Array<{ word: DerivedWord; root: RootItem }> = [];

  allRoots.forEach((r) => {
    r.words.forEach((w) => {
      allQuizWords.push({ word: w, root: r });
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [learningCount, setLearningCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentItem = allQuizWords[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePlayAudio = () => {
    if (currentItem) {
      speakWord(currentItem.word.term, 'us');
    }
  };

  const handleNext = (known: boolean) => {
    if (known) {
      setKnownCount((prev) => prev + 1);
    } else {
      setLearningCount((prev) => prev + 1);
    }

    if (currentIndex + 1 < allQuizWords.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setLearningCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <ArrowLeft size={20} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>KẾT QUẢ ÔN TẬP</Text>
        </View>

        <View style={styles.finishedContainer}>
          <View style={styles.trophyCircle}>
            <Trophy size={48} color="#fbbf24" />
          </View>

          <Text style={styles.congratsTitle}>Hoàn thành xuất sắc!</Text>
          <Text style={styles.congratsSubtitle}>
            Bạn đã ôn tập toàn bộ {allQuizWords.length} từ vựng theo gốc từ.
          </Text>

          <View style={styles.scoreRow}>
            <View style={[styles.scoreCard, { borderColor: '#34d399' }]}>
              <Text style={[styles.scoreValue, { color: '#34d399' }]}>{knownCount}</Text>
              <Text style={styles.scoreLabel}>Đã thuộc</Text>
            </View>

            <View style={[styles.scoreCard, { borderColor: '#f43f5e' }]}>
              <Text style={[styles.scoreValue, { color: '#f43f5e' }]}>{learningCount}</Text>
              <Text style={styles.scoreLabel}>Cần ôn lại</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.restartBtn} onPress={handleRestart}>
            <RotateCw size={18} color="#ffffff" />
            <Text style={styles.restartBtnText}>Học lại từ đầu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <ArrowLeft size={20} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>
          FLASHCARDS GỐC TỪ ({currentIndex + 1}/{allQuizWords.length})
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarBg}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${((currentIndex + 1) / allQuizWords.length) * 100}%` },
          ]}
        />
      </View>

      {/* Flashcard Body */}
      <View style={styles.cardArea}>
        <TouchableOpacity
          style={styles.flashcard}
          activeOpacity={0.9}
          onPress={handleFlip}
        >
          {/* Card Front */}
          {!isFlipped ? (
            <View style={styles.cardFront}>
              <View style={styles.cardHeaderBadge}>
                <Sparkles size={12} color="#b892ff" />
                <Text style={styles.cardHeaderText}>CHẠM ĐỂ LẬT THẺ</Text>
              </View>

              <Text style={styles.frontTerm}>{currentItem.word.term}</Text>
              <Text style={styles.frontPhonetic}>{currentItem.word.phoneticUs}</Text>

              <TouchableOpacity
                style={styles.speakerBtn}
                onPress={handlePlayAudio}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Volume2 size={20} color="#38bdf8" />
              </TouchableOpacity>

              <View style={styles.rootHintBox}>
                <Dna size={14} color="#b892ff" />
                <Text style={styles.rootHintText}>
                  Gốc từ: <Text style={{ color: '#ffffff', fontWeight: '900' }}>{currentItem.root.root}</Text> ({currentItem.root.meaningVi})
                </Text>
              </View>
            </View>
          ) : (
            /* Card Back */
            <View style={styles.cardBack}>
              <Text style={styles.backDefinition}>{currentItem.word.definitionVi}</Text>

              {/* Anatomy Formula */}
              <View style={styles.backAnatomyBox}>
                <Text style={styles.backAnatomyTitle}>GIẢI PHẪU TỪ:</Text>
                <Text style={styles.backFormula}>{currentItem.word.anatomy.formula}</Text>
                <Text style={styles.backExplanation}>{currentItem.word.anatomy.explanation}</Text>
              </View>

              {/* Example */}
              {currentItem.word.examples?.[0] && (
                <View style={styles.backExampleBox}>
                  <Text style={styles.backExampleEn}>"{currentItem.word.examples[0].en}"</Text>
                  <Text style={styles.backExampleVi}>{currentItem.word.examples[0].vi}</Text>
                </View>
              )}
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, styles.forgotBtn]}
          activeOpacity={0.8}
          onPress={() => handleNext(false)}
        >
          <X size={20} color="#f43f5e" />
          <Text style={styles.forgotBtnText}>Chưa thuộc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionBtn, styles.knownBtn]}
          activeOpacity={0.8}
          onPress={() => handleNext(true)}
        >
          <Check size={20} color="#34d399" />
          <Text style={styles.knownBtnText}>Đã nhớ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07061d',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(12, 13, 40, 0.95)',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  topBarTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    width: '100%',
  },
  progressBarFill: {
    height: 4,
    backgroundColor: '#4255ff',
  },
  cardArea: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashcard: {
    width: width - 40,
    minHeight: 380,
    backgroundColor: '#0c0d28',
    borderRadius: 28,
    padding: 24,
    borderWidth: 2,
    borderColor: 'rgba(184, 146, 255, 0.35)',
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
    justifyContent: 'center',
  },
  cardFront: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(184, 146, 255, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardHeaderText: {
    color: '#b892ff',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  frontTerm: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
  },
  frontPhonetic: {
    color: '#94a3b8',
    fontSize: 15,
    fontFamily: 'monospace',
    marginTop: 6,
  },
  speakerBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  rootHintBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  rootHintText: {
    color: '#94a3b8',
    fontSize: 12,
  },
  cardBack: {
    alignItems: 'center',
  },
  backDefinition: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
  },
  backAnatomyBox: {
    width: '100%',
    backgroundColor: 'rgba(184, 146, 255, 0.1)',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(184, 146, 255, 0.25)',
    marginBottom: 12,
  },
  backAnatomyTitle: {
    color: '#b892ff',
    fontSize: 10,
    fontWeight: '900',
    marginBottom: 4,
  },
  backFormula: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '800',
  },
  backExplanation: {
    color: '#cbd5e1',
    fontSize: 11,
    marginTop: 4,
    lineHeight: 16,
  },
  backExampleBox: {
    width: '100%',
    backgroundColor: 'rgba(52, 211, 153, 0.08)',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.2)',
  },
  backExampleEn: {
    color: '#ffffff',
    fontSize: 12,
    fontStyle: 'italic',
  },
  backExampleVi: {
    color: '#34d399',
    fontSize: 11,
    marginTop: 2,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 52,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  forgotBtn: {
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
    borderColor: '#f43f5e',
  },
  forgotBtnText: {
    color: '#f43f5e',
    fontSize: 14,
    fontWeight: '800',
  },
  knownBtn: {
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    borderColor: '#34d399',
  },
  knownBtnText: {
    color: '#34d399',
    fontSize: 14,
    fontWeight: '800',
  },
  finishedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  trophyCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(251, 191, 36, 0.4)',
    marginBottom: 16,
  },
  congratsTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  congratsSubtitle: {
    color: '#94a3b8',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 24,
  },
  scoreRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 30,
  },
  scoreCard: {
    width: 120,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#0c0d28',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: '900',
  },
  scoreLabel: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
  restartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#4255ff',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#4255ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  restartBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
  },
});
