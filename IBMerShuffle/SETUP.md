# IBMer Shuffle - Complete Setup Guide

This guide will help you set up and run the IBMer Shuffle app from scratch.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version`

2. **npm** or **yarn**
   - Comes with Node.js
   - Verify: `npm --version`

3. **Expo CLI** (optional but recommended)
   ```bash
   npm install -g expo-cli
   ```

4. **Development Environment**
   - **For iOS**: macOS with Xcode installed
   - **For Android**: Android Studio with Android SDK
   - **For testing on device**: Expo Go app from App Store/Play Store

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd IBMerShuffle
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Expo SDK 51
- React Native
- TypeScript
- NativeWind (Tailwind CSS)
- React Native Reanimated
- React Native Calendars
- AsyncStorage
- Expo Notifications
- And more...

### 3. Create Asset Files (Optional for Development)

The app references some asset files. For development, you can skip this step as the app will work without them. For production, create these files in the `assets/` directory:

- `icon.png` (1024x1024)
- `splash.png` (1242x2436)
- `adaptive-icon.png` (1024x1024)
- `favicon.png` (48x48)
- `notification-icon.png` (96x96)

See `assets/README.md` for details.

## Running the App

### Option 1: Start Development Server
```bash
npm start
```

This will:
- Start the Metro bundler
- Show a QR code in the terminal
- Open Expo DevTools in your browser

### Option 2: Run on iOS Simulator (macOS only)
```bash
npm run ios
```

### Option 3: Run on Android Emulator
```bash
npm run android
```

### Option 4: Run on Physical Device
1. Install **Expo Go** app on your phone
2. Run `npm start`
3. Scan the QR code with:
   - iOS: Camera app
   - Android: Expo Go app

## Troubleshooting

### TypeScript Errors
The TypeScript errors you see are expected during initial setup because the dependencies haven't been installed yet. They will disappear after running `npm install`.

### Metro Bundler Issues
If you encounter Metro bundler issues:
```bash
# Clear cache
npm start -- --clear

# Or
expo start -c
```

### iOS Simulator Not Opening
```bash
# Open simulator manually
open -a Simulator

# Then run
npm run ios
```

### Android Emulator Issues
1. Ensure Android Studio is installed
2. Create an AVD (Android Virtual Device) in Android Studio
3. Start the emulator before running `npm run android`

### Dependency Installation Errors
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Project Structure Overview

```
IBMerShuffle/
├── App.tsx                    # Main entry point with navigation
├── screens/                   # All screen components
│   ├── TodayScreen.tsx       # Daily IBMer view
│   ├── CalendarScreen.tsx    # Calendar with learned dates
│   ├── StreakScreen.tsx      # Streak statistics
│   └── LibraryScreen.tsx     # Browse all IBMers
├── components/               # Reusable components
│   └── IBMerCard.tsx        # IBMer display card
├── data/                    # Data and helpers
│   └── ibmers.ts           # IBMer data array
├── utils/                  # Utility functions
│   ├── storage.ts         # AsyncStorage operations
│   └── notifications.ts   # Push notifications
├── assets/                # Images and icons
├── package.json          # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind CSS config
├── babel.config.js      # Babel config
└── app.json            # Expo config
```

## Testing the App

### Test Daily IBMer Feature
1. Open the app
2. You should see today's IBMer on the "Today" tab
3. Tap "Mark as Learned" to mark it complete
4. Check the calendar to see the blue dot

### Test Streak System
1. Mark today's IBMer as learned
2. Go to "Streak" tab
3. You should see your current streak (1 day)
4. Come back tomorrow and mark another IBMer to continue the streak

### Test Calendar
1. Go to "Calendar" tab
2. Tap any date to see that day's IBMer
3. Learned dates show blue dots
4. Today is highlighted

### Test Library
1. Go to "Library" tab
2. Use the search bar to find specific IBMers
3. Tap any IBMer to view their full profile

### Test Shuffle
1. On "Today" tab, tap "Shuffle"
2. A random IBMer appears
3. Tap "Use as Today's IBMer" to replace the daily one

## Development Tips

### Hot Reloading
The app supports hot reloading. Save any file and see changes instantly.

### Debugging
- Shake your device to open the developer menu
- Enable "Debug Remote JS" for Chrome DevTools debugging
- Use `console.log()` statements (visible in terminal)

### Modifying Data
Edit `data/ibmers.ts` to add more IBMers or modify existing ones.

### Changing Colors
Edit `tailwind.config.js` to customize the IBM blue or add new colors.

### Notification Testing
Notifications require a physical device. They won't work in simulators/emulators.

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### Web (Experimental)
```bash
npm run web
```

## Next Steps

1. **Add More IBMers**: Expand the dataset to 365 entries
2. **Customize Branding**: Add your own IBM assets
3. **Test Thoroughly**: Try all features on both iOS and Android
4. **Deploy**: Build and submit to App Store/Play Store

## Support

For issues or questions:
1. Check the main README.md
2. Review Expo documentation: https://docs.expo.dev/
3. Check React Native docs: https://reactnative.dev/

## License

Created for IBM internal use and educational purposes.

---

**THINK** - Let's build something amazing! 🚀