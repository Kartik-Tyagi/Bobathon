import React, { useState, useEffect } from 'react';
import { View, Text, useColorScheme, Modal, TouchableOpacity } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import IBMerCard from '../components/IBMerCard';
import { getIBMerForDate, formatDate, IBMer } from '../data/ibmers';
import { getLearnedDates, isDateLearned, markDateAsLearned } from '../utils/storage';

export default function CalendarScreen() {
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});
  const [selectedIBMer, setSelectedIBMer] = useState<IBMer | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isSelectedLearned, setIsSelectedLearned] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    loadMarkedDates();
  }, []);

  const loadMarkedDates = async () => {
    const learnedDates = await getLearnedDates();
    const today = formatDate(new Date());
    
    const marked: { [key: string]: any } = {};
    
    // Mark learned dates
    learnedDates.forEach(date => {
      marked[date] = {
        marked: true,
        dotColor: '#0066FF',
        selected: false,
      };
    });

    // Highlight today
    marked[today] = {
      ...marked[today],
      selected: true,
      selectedColor: '#0066FF',
    };

    setMarkedDates(marked);
  };

  const handleDayPress = async (day: DateData) => {
    const selectedDateStr = day.dateString;
    const selectedDateObj = new Date(selectedDateStr);
    const ibmer = getIBMerForDate(selectedDateObj);
    const learned = await isDateLearned(selectedDateStr);

    setSelectedIBMer(ibmer);
    setSelectedDate(selectedDateStr);
    setIsSelectedLearned(learned);
    setShowModal(true);
  };

  const handleMarkAsLearned = async () => {
    if (!selectedDate || isSelectedLearned) return;

    await markDateAsLearned(selectedDate);
    setIsSelectedLearned(true);
    await loadMarkedDates();
  };

  return (
    <View className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <Text className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Calendar
        </Text>
        <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Track your learning journey
        </Text>
      </View>

      {/* Calendar */}
      <View className="p-4">
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDayPress}
          theme={{
            backgroundColor: isDark ? '#111827' : '#ffffff',
            calendarBackground: isDark ? '#111827' : '#ffffff',
            textSectionTitleColor: isDark ? '#9CA3AF' : '#6B7280',
            selectedDayBackgroundColor: '#0066FF',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#0066FF',
            dayTextColor: isDark ? '#F3F4F6' : '#1F2937',
            textDisabledColor: isDark ? '#4B5563' : '#D1D5DB',
            dotColor: '#0066FF',
            selectedDotColor: '#ffffff',
            arrowColor: '#0066FF',
            monthTextColor: isDark ? '#F3F4F6' : '#1F2937',
            indicatorColor: '#0066FF',
            textDayFontWeight: '400',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '600',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
        />
      </View>

      {/* Legend */}
      <View className={`mx-4 p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <Text className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Legend
        </Text>
        <View className="space-y-2">
          <View className="flex-row items-center">
            <View className="w-3 h-3 rounded-full bg-ibm-blue mr-3" />
            <Text className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Learned day
            </Text>
          </View>
          <View className="flex-row items-center">
            <View className="w-6 h-6 rounded-full bg-ibm-blue items-center justify-center mr-3">
              <Text className="text-white text-xs font-bold">•</Text>
            </View>
            <Text className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Today
            </Text>
          </View>
        </View>
      </View>

      {/* Modal for selected date */}
      <Modal
        visible={showModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1">
          {/* Modal Header */}
          <View className={`px-6 pt-14 pb-4 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} flex-row items-center justify-between`}>
            <View>
              <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {selectedDate}
              </Text>
              <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {isSelectedLearned ? 'Already learned' : 'Not yet learned'}
              </Text>
            </View>
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
