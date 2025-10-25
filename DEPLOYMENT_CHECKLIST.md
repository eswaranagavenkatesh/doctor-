# ✅ Pre-Deployment Checklist

## Before Building
- [ ] All code changes committed
- [ ] Dependencies installed (`npm install` or `bun install`)
- [ ] No console errors in development
- [ ] All routes tested locally

## Build Commands
```bash
# Install dependencies
npm install

# Create production build
npm run build

# Preview build locally (optional)
npm run preview
```

## Files to Upload
Upload **ALL** files from `dist/` folder to Hostinger's `public_html/`:
- [ ] index.html (root level)
- [ ] .htaccess (for SPA routing)
- [ ] assets/ folder (CSS, JS, images)
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] favicon.ico

## Post-Upload Verification
- [ ] Visit https://visakhamultispeciality.com
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify forms work
- [ ] Test HTTPS (should auto-redirect)
- [ ] Check browser console for errors

## SEO Setup
- [ ] Submit sitemap to Google Search Console: `https://visakhamultispeciality.com/sitemap.xml`
- [ ] Verify domain ownership in Google Search Console
- [ ] Enable SSL certificate in Hostinger
- [ ] Test with PageSpeed Insights

## Production URLs
- **Primary:** https://visakhamultispeciality.com
- **Sitemap:** https://visakhamultispeciality.com/sitemap.xml
- **Robots:** https://visakhamultispeciality.com/robots.txt

## Quick Fix Commands
If something goes wrong:
```bash
# Clean build and rebuild
rm -rf dist/
npm run build

# Preview before upload
npm run preview
```

## Support
- **Hostinger Support:** 24/7 Live Chat in dashboard
- **Build Issues:** Check console logs during build
- **Routing Issues:** Verify .htaccess file uploaded

---

**Build Time:** ~30-60 seconds  
**Upload Time:** ~5-10 minutes  
**DNS Propagation:** 24-48 hours (if changing nameservers)
