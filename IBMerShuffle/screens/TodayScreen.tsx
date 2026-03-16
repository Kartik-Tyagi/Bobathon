import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import ConfettiCannon from 'react-native-confetti-cannon';
import IBMerCard from '../components/IBMerCard';
import { getIBMerForDate, getRandomIBMer, formatDate, IBMer } from '../data/ibmers';
import { 
  isDateLearned, 
  markDateAsLearned, 
  calculateStreak, 
  addToViewedHistory,
  StreakData 
} from '../utils/storage';

export default function TodayScreen() {
  const [todayIBMer, setTodayIBMer] = useState<IBMer>(getIBMerForDate(new Date()));
  const [isLearned, setIsLearned] = useState(false);
  const [streakData, setStreakData] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, lastOpenedDate: '' });
  const [showConfetti, setShowConfetti] = useState(false);
  const [showShuffleModal, setShowShuffleModal] = useState(false);
  const [shuffledIBMer, setShuffledIBMer] = useState<IBMer | null>(null);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    loadTodayData();
  }, []);

  const loadTodayData = async () => {
    const today = formatDate(new Date());
    const learned = await isDateLearned(today);
    setIsLearned(learned);

    const streak = await calculateStreak();
    setStreakData(streak);

    // Add to viewed history
    await addToViewedHistory(todayIBMer.day, todayIBMer.name);
  };

  const handleMarkAsLearned = async () => {
    if (isLearned) return;

    const today = formatDate(new Date());
    await markDateAsLearned(today);
    setIsLearned(true);

    // Recalculate streak
    const newStreak = await calculateStreak();
    setStreakData(newStreak);

    // Show confetti for milestone streaks
    if (newStreak.currentStreak === 7 || newStreak.currentStreak === 30 || newStreak.currentStreak === 100) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleShuffle = () => {
    const randomIBMer = getRandomIBMer(todayIBMer.day);
    setShuffledIBMer(randomIBMer);
    setShowShuffleModal(true);
  };

  const handleUseShuffledAsToday = async () => {
    if (shuffledIBMer) {
      setTodayIBMer(shuffledIBMer);
      await addToViewedHistory(shuffledIBMer.day, shuffledIBMer.name);
      setShowShuffleModal(false);
      setShuffledIBMer(null);
    }
  };

  return (
    <View className="flex-1">
      {/* Header */}
      <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <Text className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Today's IBMer
        </Text>
        {streakData.currentStreak > 0 && (
          <Animated.View 
            entering={FadeIn.duration(400)}
            className="flex-row items-center mt-2"
          >
            <Ionicons name="flame" size={20} color="#FF6B35" />
            <Text className="text-orange-500 font-bold ml-1">
              {streakData.currentStreak} day streak!
            </Text>
          </Animated.View>
        )}
      </View>

      {/* IBMer Card */}
      <IBMerCard
        ibmer={todayIBMer}
        isLearned={isLearned}
        onMarkAsLearned={handleMarkAsLearned}
        onShuffle={handleShuffle}
        showShuffleButton={true}
      />

      {/* Confetti */}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          fadeOut={true}
        />
      )}

      {/* Shuffle Modal */}
      <Modal
        visible={showShuffleModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowShuffleModal(false)}
      >
        <View className="flex-1">
          {/* Modal Header */}
          <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} flex-row items-center justify-between`}>
            <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Random IBMer
            </Text>
            <TouchableOpacity onPress={() => setShowShuffleModal(false)}>
              <Ionicons name="close" size={28} color={isDark ? '#fff' : '#000'} />
            </TouchableOpacity>
          </View>

          {/* Shuffled IBMer Card */}
          {shuffledIBMer && (
            <IBMerCard
              ibmer={shuffledIBMer}
              isLearned={false}
              onMarkAsLearned={() => {}}
              onShuffle={handleShuffle}
              showShuffleButton={false}
            />
          )}

          {/* Use as Today Button */}
          <View className={`px-6 py-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <TouchableOpacity
              onPress={handleUseShuffledAsToday}
              className="bg-ibm-blue py-4 rounded-xl"
              activeOpacity={0.8}
            >
              <Text className="text-white font-bold text-lg text-center">
                Use as Today's IBMer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Made with Bob
