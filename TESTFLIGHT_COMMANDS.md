# TestFlight Submission Commands

## Quick Reference

### 1. Build iOS App for TestFlight
```bash
pnpm run build:ios
```
or
```bash
eas build --platform ios --profile production
```

### 2. Submit Latest Build to TestFlight
```bash
pnpm run submit:ios
```
or
```bash
eas submit --platform ios --profile production
```

### 2b. Interactive Build Selection (Prompts to Choose Build)
```bash
eas submit --platform ios
```
or
```bash
eas submit --platform ios --profile production
```
*Note: When run without `--id`, this will show an interactive prompt to select which build to submit*

### 3. Build and Auto-Submit in One Command
```bash
pnpm run build-and-submit:ios
```
or
```bash
eas build --platform ios --profile production --auto-submit
```

### 4. Submit Specific Build by ID
```bash
eas submit --platform ios --id <BUILD_ID> --profile production
```

### 5. List Recent Builds
```bash
eas build:list --platform ios --limit 5
```

### 6. Check Submission Status
```bash
eas submit:list --platform ios --limit 5
```

---

## Step-by-Step Process

### Option A: Build Then Submit (Recommended)
```bash
# Step 1: Build
pnpm run build:ios

# Step 2: Wait for build to complete (10-20 minutes)
# Step 3: Submit
pnpm run submit:ios
```

### Option B: Build and Auto-Submit
```bash
# Builds and automatically submits when done
pnpm run build-and-submit:ios
```

---

## Before Building

### 1. Increment Build Number (if needed)
Edit `app.json`:
```json
"ios": {
  "buildNumber": "3"  // Increment this number
}
```

### 2. Update Version (if needed)
Edit `app.json`:
```json
"version": "1.0.1"  // Update version number
```

---

## Troubleshooting

### Check if Build Already Submitted
```bash
eas build:list --platform ios --limit 1
eas submit:list --platform ios --limit 1
```

### Clear Cache and Rebuild
```bash
eas build --platform ios --profile production --clear-cache
```

### Check EAS Status
Visit: https://status.expo.dev/

---

## Prerequisites

1. **Install EAS CLI** (if not installed):
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Verify Apple Authentication**:
   - EAS will prompt for Apple credentials if needed
   - Ensure you have App Store Connect API access

---

## Current Configuration

- **Bundle ID**: `com.mohirlar.kadramobileapp`
- **App Store Connect App ID**: `6757159624`
- **Current Version**: `1.0.1`
- **Current Build Number**: `3` (incremented)

---

## Useful Links

- **EAS Dashboard**: https://expo.dev/accounts/marcos_19/projects/kadra-mobile-app
- **App Store Connect**: https://appstoreconnect.apple.com
- **EAS Status**: https://status.expo.dev/
