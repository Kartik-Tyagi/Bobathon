# IBMer Shuffle 🎯

A production-ready React Native mobile app that motivates IBM employees by teaching them IBM history through one famous IBMer per day.

## Features

✨ **Daily IBMer** - Discover a new IBM legend every day
📅 **Yearly Calendar** - Track your learning journey with an interactive calendar
🔥 **Streak System** - Build and maintain your learning streak with motivational milestones
📚 **Library** - Browse and search all IBM legends
🎉 **Confetti Celebrations** - Celebrate milestone streaks (7, 30, 100 days)
🔔 **Daily Notifications** - Get reminded at 9:00 AM every day
🌓 **Dark Mode** - Full support for light and dark themes
📱 **Offline-First** - All data persisted locally with AsyncStorage
🎨 **IBM Branding** - Official IBM blue colors and THINK motto

## Tech Stack

- **Expo SDK 51+** - React Native framework
- **TypeScript** - Type-safe development
- **NativeWind** - Tailwind CSS for React Native
- **React Native Reanimated** - Smooth animations
- **React Native Calendars** - Interactive calendar component
- **AsyncStorage** - Local data persistence
- **Expo Notifications** - Daily push reminders
- **Expo Image** - Fast image caching

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (Mac) or Android Emulator

### Setup

1. **Install dependencies:**
   ```bash
   cd IBMerShuffle
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on your device:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Project Structure

```
IBMerShuffle/
├── App.tsx                 # Main app with tab navigation
├── screens/
│   ├── TodayScreen.tsx     # Daily IBMer screen
│   ├── CalendarScreen.tsx  # Yearly calendar view
│   ├── StreakScreen.tsx    # Streak statistics
│   └── LibraryScreen.tsx   # Browse all IBMers
├── components/
│   └── IBMerCard.tsx       # Reusable IBMer card component
├── data/
│   └── ibmers.ts           # IBMer data and helper functions
├── utils/
│   ├── storage.ts          # AsyncStorage persistence layer
│   └── notifications.ts    # Push notification setup
├── assets/                 # Images and icons
├── global.css              # Tailwind CSS styles
├── tailwind.config.js      # Tailwind configuration
├── babel.config.js         # Babel configuration
├── tsconfig.json           # TypeScript configuration
├── app.json                # Expo configuration
└── package.json            # Dependencies
```

## Key Features Implementation

### Daily IBMer System
- Maps day of year (1-365) to IBMer array index
- Automatically shows today's IBMer on app open
- Cycles through data if fewer than 365 entries

### Streak Tracking
- Tracks consecutive days user opened app AND marked IBMer as learned
- Stores current streak, longest streak, and last opened date
- Shows confetti animation at 7, 30, and 100-day milestones

### Calendar Integration
- Full yearly view with monthly navigation
- Blue dots mark learned days
- Tap any day to view that day's IBMer
- Current day highlighted

### Shuffle Feature
- Shows random IBMer different from current
- Option to "Use as Today" or just view
- Helps users explore beyond daily assignment

### Notifications
- Daily reminder at 9:00 AM
- Customizable notification channel (Android)
- Requires user permission on first launch

## Data Model

Each IBMer entry contains:
- `day`: Day number (1-365)
- `name`: Full name
- `bio`: Complete biography
- `why_famous`: Key achievement at IBM
- `photo_link`: URL to photo

Currently includes 28 legendary IBMers. Easily extensible to 365 by adding more entries to `data/ibmers.ts`.

## Customization

### Adding More IBMers
Edit `data/ibmers.ts` and add entries to the `IBMERS_DATA` array:

```typescript
{
  day: 29,
  name: "Your IBMer Name",
  bio: "Full biography...",
  why_famous: "Key achievement...",
  photo_link: "https://..."
}
```

### Changing Notification Time
Edit `utils/notifications.ts` and modify the `scheduleDailyNotification` function:

```typescript
trigger: {
  hour: 9,  // Change to desired hour (0-23)
  minute: 0,
  repeats: true,
}
```

### Customizing Colors
Edit `tailwind.config.js` to change IBM blue or add new colors:

```javascript
colors: {
  ibm: {
    blue: '#0066FF',
    darkblue: '#1D70B8',
    lightblue: '#4589FF',
  },
}
```

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

## License

This project is created for IBM internal use and educational purposes.

## Credits

Built with ❤️ for IBM employees to celebrate our rich history and legendary innovators.

**THINK** - IBM's timeless motto