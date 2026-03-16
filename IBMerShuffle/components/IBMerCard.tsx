import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, useColorScheme, Share as RNShare } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { IBMer } from '../data/ibmers';

interface IBMerCardProps {
  ibmer: IBMer;
  isLearned: boolean;
  onMarkAsLearned: () => void;
  onShuffle: () => void;
  showShuffleButton?: boolean;
}

export default function IBMerCard({
  ibmer,
  isLearned,
  onMarkAsLearned,
  onShuffle,
  showShuffleButton = true,
}: IBMerCardProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleShare = async () => {
    try {
      await RNShare.share({
        message: `🎯 Today's IBMer: ${ibmer.name}\n\n${ibmer.why_famous}\n\nDiscover more IBM legends with IBMer Shuffle!`,
        title: `IBMer Shuffle - ${ibmer.name}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <ScrollView 
      className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View 
        entering={FadeIn.duration(600)}
        className="flex-1"
      >
        {/* Hero Image */}
        <View className="relative">
          <Image
            source={{ uri: ibmer.photo_link }}
            className="w-full h-96"
            contentFit="cover"
            transition={300}
          />
          <View className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          
          {/* Day Badge */}
          <View className="absolute top-4 right-4 bg-ibm-blue rounded-full px-4 py-2">
            <Text className="text-white font-bold text-sm">Day {ibmer.day}</Text>
          </View>
        </View>

        {/* Content */}
        <Animated.View 
          entering={FadeInDown.delay(200).duration(600)}
          className={`px-6 py-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        >
          {/* Name */}
          <Text className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {ibmer.name}
          </Text>

          {/* Why Famous Section */}
          <View className="mb-6 p-4 bg-ibm-blue/10 rounded-xl border-l-4 border-ibm-blue">
            <Text className="text-ibm-blue font-semibold text-sm mb-2">WHY FAMOUS AT IBM</Text>
            <Text className={`text-base leading-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {ibmer.why_famous}
            </Text>
          </View>

          {/* Bio Section */}
          <View className="mb-6">
            <Text className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              FULL BIOGRAPHY
            </Text>
            <Text className={`text-base leading-7 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {ibmer.bio}
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="space-y-3 mb-6">
            {/* Mark as Learned Button */}
            <TouchableOpacity
              onPress={onMarkAsLearned}
              disabled={isLearned}
              className={`flex-row items-center justify-center py-4 rounded-xl ${
                isLearned 
                  ? 'bg-green-500' 
                  : 'bg-ibm-blue'
              }`}
              activeOpacity={0.8}
            >
              <Ionicons 
                name={isLearned ? 'checkmark-circle' : 'checkmark-circle-outline'} 
                size={24} 
                color="white" 
              />
              <Text className="text-white font-bold text-lg ml-2">
                {isLearned ? 'Learned ✓' : 'Mark as Learned'}
              </Text>
            </TouchableOpacity>

            {/* Shuffle Button */}
            {showShuffleButton && (
              <TouchableOpacity
                onPress={onShuffle}
                className={`flex-row items-center justify-center py-4 rounded-xl border-2 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800' 
                    : 'border-gray-300 bg-white'
                }`}
                activeOpacity={0.8}
              >
                <Ionicons 
                  name="shuffle" 
                  size={24} 
                  color={isDark ? '#fff' : '#000'} 
                />
                <Text className={`font-bold text-lg ml-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Shuffle
                </Text>
              </TouchableOpacity>
            )}

            {/* Share Button */}
            <TouchableOpacity
              onPress={handleShare}
              className={`flex-row items-center justify-center py-4 rounded-xl border-2 ${
                isDark 
                  ? 'border-gray-700 bg-gray-800' 
                  : 'border-gray-300 bg-white'
              }`}
              activeOpacity={0.8}
            >
              <Ionicons 
                name="share-social" 
                size={24} 
                color={isDark ? '#fff' : '#000'} 
              />
              <Text className={`font-bold text-lg ml-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Share Story
              </Text>
            </TouchableOpacity>
          </View>

          {/* THINK Motto */}
          <View className="items-center py-6 border-t border-gray-200 dark:border-gray-700">
            <Text className="text-ibm-blue font-bold text-2xl tracking-widest">THINK</Text>
            <Text className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              IBM's timeless motto
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    </ScrollView>
  );
}

// Made with Bob
