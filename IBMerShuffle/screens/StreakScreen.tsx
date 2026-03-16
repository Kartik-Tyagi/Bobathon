import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ConfettiCannon from 'react-native-confetti-cannon';
import { getStreakData, getLearnedDates, StreakData } from '../utils/storage';

export default function StreakScreen() {
  const [streakData, setStreakData] = useState<StreakData>({ currentStreak: 0, longestStreak: 0, lastOpenedDate: '' });
  const [totalLearned, setTotalLearned] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    loadStreakData();
  }, []);

  const loadStreakData = async () => {
    const streak = await getStreakData();
    const learned = await getLearnedDates();
    setStreakData(streak);
    setTotalLearned(learned.length);
  };

  const getMotivationalMessage = () => {
    const { currentStreak } = streakData;
    if (currentStreak === 0) return "Start your journey today!";
    if (currentStreak < 7) return "You're building momentum! 🚀";
    if (currentStreak < 30) return "You're keeping the IBM spirit alive! 💙";
    if (currentStreak < 100) return "Incredible dedication! You're a legend! 🌟";
    return "You're an IBM history master! 🏆";
  };

  const getNextMilestone = () => {
    const { currentStreak } = streakData;
    if (currentStreak < 7) return { target: 7, label: "1 Week" };
    if (currentStreak < 30) return { target: 30, label: "1 Month" };
    if (currentStreak < 100) return { target: 100, label: "100 Days" };
    return { target: 365, label: "1 Year" };
  };

  const milestone = getNextMilestone();
  const progress = (streakData.currentStreak / milestone.target) * 100;

  const celebrateStreak = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <ScrollView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <Text className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Your Streak
        </Text>
        <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {getMotivationalMessage()}
        </Text>
      </View>

      <View className="p-6 space-y-6">
        {/* Current Streak Card */}
        <Animated.View 
          entering={FadeInDown.delay(100).duration(600)}
          className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-gradient-to-br from-orange-500 to-red-500'}`}
        >
          <View className="items-center">
            <Ionicons name="flame" size={64} color="#fff" />
            <Text className="text-white text-6xl font-bold mt-4">
              {streakData.currentStreak}
            </Text>
            <Text className="text-white text-xl font-semibold mt-2">
              Day Streak
            </Text>
            <Text className="text-white/80 text-sm mt-1">
              Keep it going!
            </Text>
          </View>
        </Animated.View>

        {/* Stats Grid */}
        <View className="flex-row space-x-4">
          {/* Longest Streak */}
          <Animated.View 
            entering={FadeInDown.delay(200).duration(600)}
            className={`flex-1 p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
          >
            <Ionicons name="trophy" size={32} color="#FFD700" />
            <Text className={`text-3xl font-bold mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {streakData.longestStreak}
            </Text>
            <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Longest Streak
            </Text>
          </Animated.View>

          {/* Total Learned */}
          <Animated.View 
            entering={FadeInDown.delay(300).duration(600)}
            className={`flex-1 p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
          >
            <Ionicons name="checkmark-circle" size={32} color="#10B981" />
            <Text className={`text-3xl font-bold mt-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {totalLearned}
            </Text>
            <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Learned
            </Text>
          </Animated.View>
        </View>

        {/* Next Milestone */}
        <Animated.View 
          entering={FadeInDown.delay(400).duration(600)}
          className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
        >
          <View className="flex-row items-center justify-between mb-3">
            <Text className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Next Milestone: {milestone.label}
            </Text>
            <Text className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {streakData.currentStreak}/{milestone.target}
            </Text>
          </View>
          
          {/* Progress Bar */}
          <View className={`h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <View 
              className="h-full bg-ibm-blue rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </View>
          
          <Text className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {milestone.target - streakData.currentStreak} days to go!
          </Text>
        </Animated.View>

        {/* Achievements */}
        <Animated.View 
          entering={FadeInDown.delay(500).duration(600)}
          className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
        >
          <Text className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Achievements
          </Text>
          
          <View className="space-y-3">
            {/* 7 Day Achievement */}
            <View className={`flex-row items-center p-3 rounded-xl ${streakData.longestStreak >= 7 ? 'bg-ibm-blue/10' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Ionicons 
                name={streakData.longestStreak >= 7 ? "checkmark-circle" : "lock-closed"} 
                size={24} 
                color={streakData.longestStreak >= 7 ? "#0066FF" : isDark ? "#6B7280" : "#9CA3AF"} 
              />
              <View className="ml-3 flex-1">
                <Text className={`font-semibold ${streakData.longestStreak >= 7 ? 'text-ibm-blue' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Week Warrior
                </Text>
                <Text className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  Maintain a 7-day streak
                </Text>
              </View>
            </View>

            {/* 30 Day Achievement */}
            <View className={`flex-row items-center p-3 rounded-xl ${streakData.longestStreak >= 30 ? 'bg-ibm-blue/10' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Ionicons 
                name={streakData.longestStreak >= 30 ? "checkmark-circle" : "lock-closed"} 
                size={24} 
                color={streakData.longestStreak >= 30 ? "#0066FF" : isDark ? "#6B7280" : "#9CA3AF"} 
              />
              <View className="ml-3 flex-1">
                <Text className={`font-semibold ${streakData.longestStreak >= 30 ? 'text-ibm-blue' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Monthly Master
                </Text>
                <Text className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  Maintain a 30-day streak
                </Text>
              </View>
            </View>

            {/* 100 Day Achievement */}
            <View className={`flex-row items-center p-3 rounded-xl ${streakData.longestStreak >= 100 ? 'bg-ibm-blue/10' : isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Ionicons 
                name={streakData.longestStreak >= 100 ? "checkmark-circle" : "lock-closed"} 
                size={24} 
                color={streakData.longestStreak >= 100 ? "#0066FF" : isDark ? "#6B7280" : "#9CA3AF"} 
              />
              <View className="ml-3 flex-1">
                <Text className={`font-semibold ${streakData.longestStreak >= 100 ? 'text-ibm-blue' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Century Champion
                </Text>
                <Text className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  Maintain a 100-day streak
                </Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* Celebrate Button */}
        {streakData.currentStreak > 0 && (
          <TouchableOpacity
            onPress={celebrateStreak}
            className="bg-ibm-blue py-4 rounded-xl"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-lg text-center">
              🎉 Celebrate Your Streak!
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Confetti */}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          autoStart={true}
          fadeOut={true}
        />
      )}
    </ScrollView>
  );
}

// Made with Bob
