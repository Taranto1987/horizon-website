# Deployment Guide - Phone Number Update Fix

## Problem Solved
The website footer already contained the correct phone number `(22) 99241-0112` and WhatsApp link `https://wa.me/5522992410112`, but users were still seeing the old phone number due to browser/CDN caching.

## Solution Implemented
Cache-busting mechanisms to force browsers to download fresh content on every deployment.

## How to Deploy

### 1. Build and Deploy
```bash
# Use the enhanced deploy command
npm run deploy

# Or manually:
npm run build
# Then upload the contents of the 'dist' folder to your web server
```

### 2. Verify Deployment
After deployment, each build generates unique file names with timestamps, for example:
- `assets/index-4e8a5f65-1752530850225.js`

The timestamp at the end ensures browsers download the new version.

### 3. Force Cache Refresh (if needed)
If users still see the old number, they can:
- Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache for the site

## Technical Changes Made

1. **Vite Configuration (`vite.config.js`)**:
   - Added timestamp-based file naming
   - Each build creates unique asset names

2. **HTML Meta Tags**:
   - Added cache-control headers
   - Prevents browser caching of HTML

3. **Component Updates**:
   - Added version tracking to Footer component
   - Added data attributes for cache validation

## Phone Number Details
- **Display**: (22) 99241-0112
- **WhatsApp Link**: https://wa.me/5522992410112
- **Location**: Footer component

## Post-Deployment Verification
1. Check that the build creates new file names with timestamps
2. Verify the phone number displays correctly: `(22) 99241-0112`
3. Test WhatsApp link functionality
4. Confirm no caching issues persist

## Emergency Rollback
If issues occur, the previous version can be restored by reverting the last commit and redeploying.