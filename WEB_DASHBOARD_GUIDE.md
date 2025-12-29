# Using Expo Web Dashboard (No Terminal Required)

You can manage builds and connect your Apple account through Expo's web interface!

## Step 1: Go to Expo Dashboard

1. Go to: https://expo.dev
2. Sign in with your Expo account (same one you used with `eas login`)
3. You should see your projects

## Step 2: Select Your Project

1. Find "kadra-mobile-app" in your project list
2. Click on it to open the project dashboard

## Step 3: Connect Apple Developer Account

1. In your project dashboard, look for:
   - **"Credentials"** section
   - **"Apple Developer Account"** or **"iOS Credentials"**
   - **"Link Apple Account"** button
2. Click to link your Apple Developer account
3. You'll be redirected to Apple to authenticate
4. Grant permissions to Expo

## Step 4: Build Through Web Interface

1. In your project dashboard, look for:
   - **"Builds"** tab or section
   - **"New Build"** or **"Start Build"** button
2. Select:
   - Platform: **iOS**
   - Profile: **production**
3. Click **"Start Build"**
4. The build will run on Expo's servers
5. You can watch progress in the browser

## Step 5: Submit to TestFlight

1. Once build completes, you'll see it in the "Builds" section
2. Click on the completed build
3. Look for **"Submit to App Store"** or **"Submit to TestFlight"** button
4. Follow the prompts to submit

## Alternative: EAS Build Web Interface

1. Go to: https://expo.dev/accounts/[your-username]/builds
2. You can see all your builds
3. Create new builds from here
4. Submit builds from here

## Benefits of Web Interface

✅ No terminal needed
✅ Visual progress tracking
✅ Easier credential management
✅ Can connect Apple account through OAuth
✅ Better error messages
✅ Can retry failed operations easily

## If You Can't Find the Option

The web interface features depend on:
- Your Expo plan (free plan has most features)
- Project configuration
- Some features might still require CLI

But you should be able to:
- Link Apple account
- Start builds
- View build status
- Submit builds (in most cases)

