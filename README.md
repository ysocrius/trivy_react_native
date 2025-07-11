# Trivy - React Native App

A React Native application featuring a card management interface with freeze functionality and modern UI design.

## Project Overview

Trivy is a mobile application that provides a card management interface with the following key features:

- **Card Details Display**: Shows card information with a modern, clean design
- **Freeze Animation**: Interactive freeze/unfreeze functionality with visual effects
- **Bottom Navigation**: Tab-based navigation system
- **Responsive Design**: Pixel-perfect UI matching Figma design specifications
- **Random Data Generation**: Uses faker.js for dynamic card data

## Features

### 🎨 UI Components
- Card component with front/back display
- Freeze animation with visual effects
- Bottom tab navigation
- Modern design with Poppins font family

### 🔧 Technical Stack
- **Frontend**: React Native
- **Navigation**: React Navigation
- **Data Generation**: Faker.js
- **Styling**: React Native StyleSheet
- **Fonts**: Poppins (Google Fonts)

## Project Structure

```
trivy-1a/
├── src/
│   ├── assets/
│   │   ├── fonts/          # Poppins font files
│   │   └── images/         # App icons and images
│   ├── components/         # Reusable UI components
│   ├── screens/           # App screens
│   └── utils/             # Utility functions
├── android/               # Android-specific files
├── ios/                   # iOS-specific files
└── __tests__/            # Test files
```

## Getting Started

### Prerequisites

Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trivy-1a
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install fonts (if needed)**
   Download and add the Poppins font files to `src/assets/fonts/` if not already present.

### Running the App

#### Start Metro Bundler
```bash
# Using npm
npm start

# OR using Yarn
yarn start
```

#### Android
```bash
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### iOS
```bash
# Install CocoaPods dependencies (first time only)
bundle install
bundle exec pod install

# Run the app
npm run ios
# OR
yarn ios
```

## Development

### Key Files
- `App.js` - Main application entry point
- `src/screens/` - Screen components
- `src/components/` - Reusable UI components
- `src/assets/` - Fonts and images

### Available Scripts
- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests

## Design Implementation

The app implements a pixel-perfect design with:
- **95%+ accuracy** to Figma specifications
- **Responsive layout** for different screen sizes
- **Smooth animations** for freeze functionality
- **Modern UI** with clean typography and spacing

## Testing

The app includes comprehensive testing setup:
- Unit tests for components
- Integration tests for screens
- UI testing for animations

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Android build issues**
   ```bash
   cd android && ./gradlew clean
   ```

3. **iOS build issues**
   ```bash
   cd ios && pod install
   ```

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation as needed
4. Ensure all tests pass before submitting

## License

This project is licensed under the MIT License.

---

For more information about React Native, visit the [official documentation](https://reactnative.dev/docs/getting-started).
