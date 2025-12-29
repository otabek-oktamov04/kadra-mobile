# App Store Connect API Key Setup Guide

## Step 1: Create API Key in App Store Connect

1. Go to: https://appstoreconnect.apple.com
2. Click **Users and Access** (top navigation)
3. Click **Keys** tab
4. Click **+** button (top left)
5. Fill in:
   - **Key Name**: `EAS Build Key` (or any name)
   - **Access**: Select **Admin** (or **App Manager**)
6. Click **Generate**
7. **IMPORTANT**: Download the `.p8` file immediately (you can only download once!)
8. **Note these values**:
   - **Key ID**: 10-character string (e.g., `ABC123DEFG`)
   - **Issuer ID**: UUID format (shown at top of Keys page)

## Step 2: Save the Key File

Save the `.p8` file in a secure location. Recommended:
- In your project: `./credentials/AuthKey_XXXXXXXXXX.p8`
- Or in a secure folder outside the project

## Step 3: Configure EAS

Run this command:
```bash
npx eas credentials
```

Then:
1. Select **iOS**
2. Select **Set up App Store Connect API Key**
3. Enter:
   - **Key ID**: (the 10-character ID you noted)
   - **Issuer ID**: (the UUID you noted)
   - **Key file path**: (path to your `.p8` file)

## Step 4: Use for Builds

Now when you run:
```bash
npx eas build --platform ios --profile production
```

It will use the API key instead of asking for your password!

## Step 5: Use for Submissions

When you run:
```bash
npx eas submit --platform ios --profile production
```

It will also use the API key automatically.

## Benefits

✅ No password needed
✅ More secure
✅ Avoids Apple server authentication errors
✅ Better for automation
✅ Works more reliably

## Security Notes

- Keep your `.p8` file secure
- Don't commit it to git (add to `.gitignore`)
- You can revoke the key anytime in App Store Connect
- Each key can have different permissions


