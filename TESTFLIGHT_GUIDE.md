# TestFlight Upload Guide for React Native (Expo)

This guide will walk you through uploading your React Native app to TestFlight using Expo Application Services (EAS).

## Prerequisites

1. **Apple Developer Account** - You need an active Apple Developer Program membership ($99/year)
2. **App Store Connect Access** - Your Apple ID must have access to App Store Connect
3. **EAS CLI** - Install the Expo Application Services CLI
4. **Expo Account** - Sign up for a free Expo account at [expo.dev](https://expo.dev)

## Step 1: Install EAS CLI

If you haven't already, install the EAS CLI globally:

```bash
npm install -g eas-cli
```

## Step 2: Login to Expo

```bash
eas login
```

This will prompt you to authenticate with your Expo account.

## Step 3: Configure Your App

### 3.1 Update Bundle Identifier

In `app.json`, update the `bundleIdentifier` to match your Apple Developer account. The format should be:
```
com.yourcompany.appname
```

**Important:** This bundle identifier must be unique and match what you register in App Store Connect.

### 3.2 Update EAS Configuration (Optional)

The `eas.json` file has been pre-configured. You can optionally update the submit section with your Apple ID and App Store Connect details, but EAS will prompt you for these during submission if not provided.

## Step 4: Register Your App in App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Click **My Apps** → **+** → **New App**
3. Fill in:
   - **Platform:** iOS
   - **Name:** Your app name
   - **Primary Language:** Your app's primary language
   - **Bundle ID:** Select or create the bundle ID that matches your `app.json` bundleIdentifier
   - **SKU:** A unique identifier (can be the same as bundle ID)
4. Click **Create**

## Step 5: Build Your iOS App

Build your app for iOS using EAS Build:

```bash
eas build --platform ios --profile production
```

**What happens:**
- EAS will ask you to configure credentials (or use automatic provisioning)
- The build will run on Expo's servers
- This process takes 10-20 minutes
- You'll get a build URL to track progress

**Alternative profiles:**
- `eas build --platform ios --profile preview` - For internal testing
- `eas build --platform ios --profile development` - For development builds

## Step 6: Submit to TestFlight

Once your build is complete, submit it to TestFlight:

```bash
eas submit --platform ios --profile production
```

**What happens:**
- EAS will prompt for your Apple ID credentials
- It will upload the build to App Store Connect
- The build will appear in TestFlight within a few minutes

## Step 7: Configure TestFlight in App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app
3. Go to **TestFlight** tab
4. Wait for the build to process (can take 10-30 minutes)
5. Once processed:
   - Add test information (What to Test notes)
   - Add internal testers (up to 100 users with App Store Connect access)
   - Add external testers (up to 10,000 users, requires App Review)

## Step 8: Add Testers

### Internal Testers (Immediate)
1. In TestFlight, go to **Internal Testing**
2. Click **+** to add testers
3. Add email addresses of team members with App Store Connect access
4. They'll receive an email invitation

### External Testers (Requires Review)
1. In TestFlight, go to **External Testing**
2. Create a new group
3. Add the build
4. Fill in required information:
   - What to Test
   - App Description
   - Feedback Email
   - Privacy Policy URL (if required)
5. Submit for Beta App Review (usually takes 24-48 hours)
6. Once approved, add testers by email

## Troubleshooting

### Build Fails
- Check that your bundle identifier is unique
- Ensure all required permissions are in `app.json`
- Verify your Apple Developer account is active

### Submission Fails
- Verify your Apple ID has the correct permissions
- Check that the app exists in App Store Connect
- Ensure the bundle identifier matches exactly

### TestFlight Build Not Appearing
- Wait 10-30 minutes for processing
- Check App Store Connect for any error messages
- Verify the build status in EAS dashboard

## Quick Commands Reference

```bash
# Build for iOS production
eas build --platform ios --profile production

# Submit to TestFlight
eas submit --platform ios --profile production

# Check build status
eas build:list

# View build details
eas build:view [BUILD_ID]
```

## Important Notes

1. **Bundle Identifier:** Must be unique and registered in your Apple Developer account
2. **Version Numbers:** Increment the version in `app.json` for each new build
3. **Build Numbers:** EAS automatically increments build numbers
4. **Credentials:** EAS can manage certificates and provisioning profiles automatically
5. **Processing Time:** TestFlight builds typically take 10-30 minutes to process after upload

## Next Steps

After your first successful TestFlight upload:
- Set up automated builds with GitHub Actions or similar CI/CD
- Configure version management
- Set up beta testing groups
- Prepare for App Store submission

## Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)
- [TestFlight Documentation](https://developer.apple.com/testflight/)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)

