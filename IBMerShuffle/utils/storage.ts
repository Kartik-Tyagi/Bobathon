import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDate } from '../data/ibmers';

const STORAGE_KEYS = {
  LEARNED_DATES: '@ibmer_shuffle:learned_dates',
  CURRENT_STREAK: '@ibmer_shuffle:current_streak',
  LONGEST_STREAK: '@ibmer_shuffle:longest_streak',
  LAST_OPENED_DATE: '@ibmer_shuffle:last_opened_date',
  VIEWED_HISTORY: '@ibmer_shuffle:viewed_history',
};

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastOpenedDate: string;
}

export interface ViewedIBMer {
  day: number;
  name: string;
  viewedDate: string;
}

// Get all learned dates
export async function getLearnedDates(): Promise<string[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.LEARNED_DATES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting learned dates:', error);
    return [];
  }
}

// Mark a date as learned
export async function markDateAsLearned(date: string): Promise<void> {
  try {
    const learnedDates = await getLearnedDates();
    if (!learnedDates.includes(date)) {
      learnedDates.push(date);
      await AsyncStorage.setItem(STORAGE_KEYS.LEARNED_DATES, JSON.stringify(learnedDates));
    }
  } catch (error) {
    console.error('Error marking date as learned:', error);
  }
}

// Check if a date is learned
export async function isDateLearned(date: string): Promise<boolean> {
  const learnedDates = await getLearnedDates();
  return learnedDates.includes(date);
}

// Get streak data
export async function getStreakData(): Promise<StreakData> {
  try {
    const currentStreak = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_STREAK);
    const longestStreak = await AsyncStorage.getItem(STORAGE_KEYS.LONGEST_STREAK);
    const lastOpenedDate = await AsyncStorage.getItem(STORAGE_KEYS.LAST_OPENED_DATE);

    return {
      currentStreak: currentStreak ? parseInt(currentStreak, 10) : 0,
      longestStreak: longestStreak ? parseInt(longestStreak, 10) : 0,
      lastOpenedDate: lastOpenedDate || '',
    };
  } catch (error) {
    console.error('Error getting streak data:', error);
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastOpenedDate: '',
    };
  }
}

// Update streak data
export async function updateStreakData(
  currentStreak: number,
  longestStreak: number,
  lastOpenedDate: string
): Promise<void> {
  try {
    await AsyncStorage.multiSet([
      [STORAGE_KEYS.CURRENT_STREAK, currentStreak.toString()],
      [STORAGE_KEYS.LONGEST_STREAK, longestStreak.toString()],
      [STORAGE_KEYS.LAST_OPENED_DATE, lastOpenedDate],
    ]);
  } catch (error) {
    console.error('Error updating streak data:', error);
  }
}

// Calculate and update streak based on today's date
export async function calculateStreak(): Promise<StreakData> {
  const today = formatDate(new Date());
  const streakData = await getStreakData();
  const learnedDates = await getLearnedDates();

  // Check if today is already learned
  const todayLearned = learnedDates.includes(today);

  if (!streakData.lastOpenedDate) {
    // First time opening the app
    const newStreak = todayLearned ? 1 : 0;
    await updateStreakData(newStreak, newStreak, today);
    return {
      currentStreak: newStreak,
      longestStreak: newStreak,
      lastOpenedDate: today,
    };
  }

  const lastDate = new Date(streakData.lastOpenedDate);
  const todayDate = new Date(today);
  const diffTime = todayDate.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let newCurrentStreak = streakData.currentStreak;
  let newLongestStreak = streakData.longestStreak;

  if (diffDays === 0) {
    // Same day - no change unless just marked as learned
    if (todayLearned && !learnedDates.includes(streakData.lastOpenedDate)) {
      newCurrentStreak = streakData.currentStreak + 1;
    }
  } else if (diffDays === 1) {
    // Consecutive day
    if (todayLearned) {
      newCurrentStreak = streakData.currentStreak + 1;
    } else {
      // Opened but didn't mark as learned - maintain streak for now
      newCurrentStreak = streakData.currentStreak;
    }
  } else {
    // Streak broken
    newCurrentStreak = todayLearned ? 1 : 0;
  }

  // Update longest streak if current is higher
  if (newCurrentStreak > newLongestStreak) {
    newLongestStreak = newCurrentStreak;
  }

  await updateStreakData(newCurrentStreak, newLongestStreak, today);

  return {
    currentStreak: newCurrentStreak,
    longestStreak: newLongestStreak,
    lastOpenedDate: today,
  };
}

// Get viewed history
export async function getViewedHistory(): Promise<ViewedIBMer[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.VIEWED_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting viewed history:', error);
    return [];
  }
}

// Add to viewed history
export async function addToViewedHistory(day: number, name: string): Promise<void> {
  try {
    const history = await getViewedHistory();
    const today = formatDate(new Date());
    
    // Check if already in history
    const exists = history.some(item => item.day === day);
    
    if (!exists) {
      history.unshift({
        day,
        name,
        viewedDate: today,
      });
      
      // Keep only last 100 entries
      const trimmedHistory = history.slice(0, 100);
      await AsyncStorage.setItem(STORAGE_KEYS.VIEWED_HISTORY, JSON.stringify(trimmedHistory));
    }
  } catch (error) {
    console.error('Error adding to viewed history:', error);
  }
}

// Clear all data (for testing/reset)
export async function clearAllData(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.LEARNED_DATES,
      STORAGE_KEYS.CURRENT_STREAK,
      STORAGE_KEYS.LONGEST_STREAK,
      STORAGE_KEYS.LAST_OPENED_DATE,
      STORAGE_KEYS.VIEWED_HISTORY,
    ]);
  } catch (error) {
    console.error('Error clearing data:', error);
  }
}

// Made with Bob
