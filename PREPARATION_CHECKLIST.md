# Pre-Build Preparation Checklist

While waiting for Bundle ID permissions, here's what you can prepare:

## ✅ 1. Install and Setup EAS CLI

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Login to your Expo account (create one at expo.dev if needed)
eas login
```

**Verify installation:**

```bash
eas --version
```

## ✅ 2. Create/Verify Expo Account

- Go to [expo.dev](https://expo.dev) and create an account (if you don't have one)
- Make sure you're logged in via `eas login`

## ✅ 3. Prepare App Information

Gather this information for when you create the app in App Store Connect:

- **App Name**: Decide on the final name (e.g., "Kadra Mobile" or "Kadra")
- **Bundle ID**: Ask your admin what Bundle ID format they use (e.g., `com.mohirlar.kadramobileapp`)
- **Primary Language**: Your app's main language
- **Category**: What category your app belongs to (e.g., Business, Productivity, etc.)

## ✅ 4. Prepare App Metadata (for TestFlight)

You'll need this when setting up TestFlight:

- **App Description**: A brief description of what your app does
- **What to Test**: Notes for testers about what features to focus on
- **Feedback Email**: Email address where testers can send feedback
- **Privacy Policy URL**: If your app collects user data (required for external testers)

## ✅ 5. Prepare Screenshots (Optional but Recommended)

For TestFlight, you'll want:

- **App Icon**: Already have `./assets/images/icon.png` ✅
- **Screenshots**: Take screenshots of your app on different screen sizes:
  - iPhone 6.7" (iPhone 14 Pro Max, etc.)
  - iPhone 6.5" (iPhone 11 Pro Max, etc.)
  - iPhone 5.5" (iPhone 8 Plus, etc.)
  - iPad Pro 12.9" (if supporting tablets)

## ✅ 6. Test Your App Locally

Make sure everything works before building:

```bash
# Start development server
npm start

# Or test on web
npm run web
```

## ✅ 7. Check App Configuration

Review your `app.json`:

- ✅ App name is correct
- ✅ Version number is set (currently 1.0.0)
- ✅ Icon path is correct
- ⏳ Bundle identifier will be updated once you get it

## ✅ 8. Prepare TestFlight Tester List

Think about who will test your app:

- **Internal Testers**: Team members with App Store Connect access (up to 100)
- **External Testers**: Regular users (up to 10,000, requires review)

## ✅ 9. Review Permissions

Your app requests these permissions (already configured in `app.json`):

- ✅ Camera access
- ✅ Microphone access
- ✅ Location access

Make sure these are necessary and properly documented.

## ✅ 10. Test Build Process (Optional)

You can test the EAS build process even without the Bundle ID (it will fail at the end, but you can verify the setup):

```bash
# This will fail without Bundle ID, but tests your EAS setup
eas build --platform ios --profile production
```

**Note**: Don't worry if this fails - it's just to verify EAS CLI is working.

## 📋 Tomorrow's Action Items (Once You Get Bundle ID Access)

1. **Get the Bundle ID** from your admin
2. **Update `app.json`** with the correct Bundle ID
3. **Create the app** in App Store Connect (if not already created)
4. **Build the app**: `eas build --platform ios --profile production`
5. **Submit to TestFlight**: `eas submit --platform ios --profile production`
6. **Configure TestFlight** in App Store Connect
7. **Add testers** and distribute

## 🔍 Quick Verification Commands

Run these to verify everything is ready:

```bash
# Check EAS CLI
eas --version

# Check if logged in
eas whoami

# Check project configuration
eas build:configure
```

## 📝 Notes

- Bundle ID format is usually: `com.companyname.appname`
- Once Bundle ID is set, it cannot be changed easily
- Version numbers must increment for each new build
- Build numbers are auto-incremented by EAS
