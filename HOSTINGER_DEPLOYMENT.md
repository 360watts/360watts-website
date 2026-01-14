# Hostinger Deployment Instructions

## Step 1: Prepare Your Files
Your project has been built successfully. The `dist` folder contains all files needed for deployment.

## Step 2: Upload Files to Hostinger

### Option A: Using File Manager (Recommended)
1. Log into your Hostinger control panel
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's root folder)
4. Upload all contents from your `dist` folder:
   - `index.html`
   - `assets/` folder
   - All image/video files

### Option B: Using FTP
1. Use an FTP client (FileZilla recommended)
2. Connect using your Hostinger FTP credentials
3. Upload the entire `dist` folder contents to `public_html`

## Step 3: Configure for SPA Routing (Important!)

Since this is a React Single Page Application, you need to ensure all routes redirect to `index.html`. Create a `.htaccess` file in your `public_html` folder with this content:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Step 4: Verify Deployment
1. Visit your domain
2. Test all pages and functionality
3. Check that images and videos load correctly

## Troubleshooting

### If images/videos don't load:
- Ensure all files from `dist` are uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### If routing doesn't work:
- Make sure `.htaccess` file is uploaded
- Verify mod_rewrite is enabled (contact Hostinger support if needed)

### If site doesn't load:
- Check that `index.html` is in the root directory
- Verify domain DNS settings in Hostinger panel

## Need Help?
Contact Hostinger support or check their documentation for specific hosting plan features.