# 🚀 Quick Deployment Guide

## One-Command Build
```bash
npm run build
```

This creates a production-ready `dist/` folder.

## Upload to Hostinger

### Using File Manager (Easiest)
1. Login to Hostinger → **File Manager**
2. Go to `public_html/` folder
3. Delete old files (if any)
4. Upload ALL files from `dist/` folder
5. Done! Visit https://visakhamultispeciality.com

### Using FTP (FileZilla)
1. Connect to Hostinger FTP
2. Navigate to `public_html/` folder
3. Drag & drop all files from `dist/` folder
4. Done!

## Important Files
- ✅ `.htaccess` - Required for routing
- ✅ `index.html` - Main entry point
- ✅ `assets/` - CSS, JS, images
- ✅ `sitemap.xml` - For SEO
- ✅ `robots.txt` - For search engines

## Verify Deployment
- [ ] Homepage loads: https://visakhamultispeciality.com
- [ ] All pages work (no 404)
- [ ] HTTPS is enabled
- [ ] No console errors

## Need Help?
See detailed guide: **HOSTINGER_DEPLOYMENT_GUIDE.md**

---

**Domain:** visakhamultispeciality.com  
**Framework:** React + Vite + TypeScript  
**Hosting:** Hostinger
