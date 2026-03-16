import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, useColorScheme, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import IBMerCard from '../components/IBMerCard';
import { IBMERS_DATA, IBMer } from '../data/ibmers';
import { getViewedHistory, ViewedIBMer, isDateLearned, markDateAsLearned } from '../utils/storage';

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewedHistory, setViewedHistory] = useState<ViewedIBMer[]>([]);
  const [filteredIBMers, setFilteredIBMers] = useState<IBMer[]>(IBMERS_DATA);
  const [selectedIBMer, setSelectedIBMer] = useState<IBMer | null>(null);
  const [isSelectedLearned, setIsSelectedLearned] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    filterIBMers();
  }, [searchQuery]);

  const loadHistory = async () => {
    const history = await getViewedHistory();
    setViewedHistory(history);
  };

  const filterIBMers = () => {
    if (!searchQuery.trim()) {
      setFilteredIBMers(IBMERS_DATA);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = IBMERS_DATA.filter(ibmer =>
      ibmer.name.toLowerCase().includes(query) ||
      ibmer.bio.toLowerCase().includes(query) ||
      ibmer.why_famous.toLowerCase().includes(query)
    );
    setFilteredIBMers(filtered);
  };

  const handleIBMerPress = async (ibmer: IBMer) => {
    setSelectedIBMer(ibmer);
    // Check if any date with this IBMer is learned
    const learned = false; // Simplified - you could check all dates
    setIsSelectedLearned(learned);
    setShowModal(true);
  };

  const handleMarkAsLearned = async () => {
    // This would mark today's date if this is today's IBMer
    // For library view, we'll skip this functionality
  };

  const renderIBMerItem = ({ item }: { item: IBMer }) => {
    const isViewed = viewedHistory.some(h => h.day === item.day);

    return (
      <TouchableOpacity
        onPress={() => handleIBMerPress(item)}
        className={`mb-3 rounded-xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}
        activeOpacity={0.8}
      >
        <View className="flex-row">
          {/* Image */}
          <Image
            source={{ uri: item.photo_link }}
            className="w-24 h-24"
            contentFit="cover"
          />

          {/* Content */}
          <View className="flex-1 p-4">
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Day {item.day}
                </Text>
              </View>
              {isViewed && (
                <View className="bg-ibm-blue rounded-full p-1">
                  <Ionicons name="eye" size={16} color="#fff" />
                </View>
              )}
            </View>
            <Text className={`text-sm mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} numberOfLines={2}>
              {item.why_famous}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <Text className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Library
        </Text>
        <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {IBMERS_DATA.length} IBM legends • {viewedHistory.length} viewed
        </Text>
      </View>

      {/* Search Bar */}
      <View className="px-6 py-4">
        <View className={`flex-row items-center px-4 py-3 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <Ionicons name="search" size={20} color={isDark ? '#9CA3AF' : '#6B7280'} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search by name, bio, or achievement..."
            placeholderTextColor={isDark ? '#6B7280' : '#9CA3AF'}
            className={`flex-1 ml-3 text-base ${isDark ? 'text-white' : 'text-gray-900'}`}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={isDark ? '#6B7280' : '#9CA3AF'} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Results Count */}
      {searchQuery.length > 0 && (
        <View className="px-6 pb-2">
          <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredIBMers.length} result{filteredIBMers.length !== 1 ? 's' : ''} found
          </Text>
        </View>
      )}

      {/* IBMers List */}
      <FlatList
        data={filteredIBMers}
        renderItem={renderIBMerItem}
        keyExtractor={(item) => item.day.toString()}
        contentContainerStyle={{ padding: 24, paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <Ionicons name="search" size={64} color={isDark ? '#4B5563' : '#D1D5DB'} />
            <Text className={`text-lg font-semibold mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No results found
            </Text>
            <Text className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Try a different search term
            </Text>
          </View>
        }
      />

      {/* Modal for selected IBMer */}
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1">
          {/* Modal Header */}
          <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} flex-row items-center justify-between`}>
            <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              IBMer Details
            </Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Ionicons name="close" size={28} color={isDark ? '#fff' : '#000'} />
            </TouchableOpacity>
          </View>

          {/* IBMer Card */}
          {selectedIBMer && (
            <IBMerCard
              ibmer={selectedIBMer}
              isLearned={isSelectedLearned}
              onMarkAsLearned={handleMarkAsLearned}
              onShuffle={() => {}}
              showShuffleButton={false}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}

// Made with Bob
