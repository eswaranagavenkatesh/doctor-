# 🚀 Hostinger Deployment Guide
## Vishakaha Multispeciality Clinic Website

---

## 📋 Prerequisites

Before deployment, ensure you have:
- ✅ Hostinger hosting account (Business/Premium plan recommended)
- ✅ Domain name: **visakhamultispeciality.com** (already pointed to Hostinger)
- ✅ FTP credentials from Hostinger
- ✅ Node.js installed on your local machine (v18 or higher)

---

## 🔨 Step 1: Build the Production Files

### 1.1 Install Dependencies
```bash
npm install
# or
bun install
```

### 1.2 Build for Production
```bash
npm run build
# or
bun run build
```

This creates an optimized production build in the `dist/` folder with:
- Minified HTML, CSS, and JavaScript
- Optimized images and assets
- Tree-shaken code for smaller bundle size
- Source maps removed

**Expected output structure:**
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── images/
│   └── fonts/
├── .htaccess
├── robots.txt
├── sitemap.xml
└── favicon.ico
```

---

## 📤 Step 2: Upload to Hostinger

### Method A: Using Hostinger File Manager (Recommended for Beginners)

1. **Login to Hostinger:**
   - Go to https://hpanel.hostinger.com/
   - Login with your credentials

2. **Navigate to File Manager:**
   - Click on **File Manager** from the dashboard
   - Navigate to `public_html/` directory

3. **Clear Existing Files (if any):**
   - Select all files in `public_html/`
   - Delete them (keep backup if needed)

4. **Upload Build Files:**
   - Click **Upload** button
   - Select ALL files from your `dist/` folder
   - Wait for upload to complete (may take 5-10 minutes)

5. **Verify Upload:**
   - Check that `index.html` is at root level: `public_html/index.html`
   - Verify `.htaccess` file is present
   - Confirm `assets/` folder structure is intact

### Method B: Using FTP Client (Recommended for Advanced Users)

1. **Get FTP Credentials:**
   - In Hostinger dashboard, go to **Files → FTP Accounts**
   - Note down:
     - FTP Host (e.g., ftp.visakhamultispeciality.com)
     - Username
     - Password
     - Port: 21

2. **Install FTP Client:**
   - Download **FileZilla** (free): https://filezilla-project.org/
   - Or use **Cyberduck**, **WinSCP** (Windows), or command line

3. **Connect via FTP:**
   ```
   Host: ftp.visakhamultispeciality.com
   Username: [your-ftp-username]
   Password: [your-ftp-password]
   Port: 21
   ```

4. **Upload Files:**
   - Navigate to `public_html/` on remote server (right panel)
   - Select all files from local `dist/` folder (left panel)
   - Drag and drop to upload
   - Ensure **Transfer Mode** is set to **Binary** for images

5. **Set File Permissions:**
   - Right-click `.htaccess` → Permissions → Set to `644`
   - Right-click folders → Permissions → Set to `755`

---

## 🌐 Step 3: Configure Domain Settings

### 3.1 Domain Nameservers (if not already set)
1. **In Hostinger:**
   - Go to **Domains → Manage**
   - Check nameservers:
     ```
     ns1.dns-parking.com
     ns2.dns-parking.com
     ```

2. **At Domain Registrar:**
   - Login to where you bought **visakhamultispeciality.com**
   - Update nameservers to Hostinger's nameservers above
   - DNS propagation takes 24-48 hours

### 3.2 SSL Certificate (HTTPS)
1. **In Hostinger:**
   - Go to **Security → SSL**
   - Enable **Free Let's Encrypt SSL**
   - Wait 5-15 minutes for activation

2. **Force HTTPS:**
   - Already configured in `.htaccess` file
   - Test by visiting: http://visakhamultispeciality.com
   - Should redirect to: https://visakhamultispeciality.com

---

## ✅ Step 4: Post-Deployment Verification

### 4.1 Basic Checks
- [ ] Visit https://visakhamultispeciality.com → Homepage loads
- [ ] Click navigation links → All pages work (no 404 errors)
- [ ] Test mobile view → Responsive design works
- [ ] Check browser console → No JavaScript errors

### 4.2 SEO & Performance Checks
```bash
# Test with online tools:
```
- **PageSpeed Insights:** https://pagespeed.web.dev/
  - Enter: visakhamultispeciality.com
  - Target: 90+ score

- **Google Search Console:**
  - Add property: https://visakhamultispeciality.com
  - Submit sitemap: https://visakhamultispeciality.com/sitemap.xml

- **SSL Test:**
  - https://www.ssllabs.com/ssltest/
  - Target: A or A+ rating

### 4.3 Routing Test
Test all routes work correctly:
```
https://visakhamultispeciality.com/
https://visakhamultispeciality.com/about
https://visakhamultispeciality.com/services
https://visakhamultispeciality.com/services/doctor-clinic
https://visakhamultispeciality.com/doctors
https://visakhamultispeciality.com/contact
https://visakhamultispeciality.com/book-appointment
```

If any route shows 404, verify `.htaccess` file is uploaded.

### 4.4 Email Configuration (if using Hostinger email)
1. **Create Email Accounts:**
   - Hostinger → **Email → Email Accounts**
   - Create:
     - info@visakhamultispeciality.com
     - appointments@visakhamultispeciality.com

2. **Update DNS (if external email like Gmail):**
   - Add MX records in Hostinger DNS settings
   - Follow provider's instructions

---

## 🔄 Step 5: Future Updates

### Quick Update Process:
1. Make changes to code locally
2. Run `npm run build`
3. Upload ONLY changed files from `dist/` to `public_html/`
4. Clear browser cache and test

### Full Redeploy:
```bash
# On local machine
npm run build

# Upload entire dist/ folder to public_html/
# Using File Manager or FTP
```

---

## 🛠️ Troubleshooting

### Problem 1: 404 Error on Routes
**Symptom:** Homepage works but `/about`, `/services` show 404

**Solution:**
- Verify `.htaccess` file exists in `public_html/`
- Check file permissions: `.htaccess` should be `644`
- Ensure mod_rewrite is enabled (Hostinger has it by default)

### Problem 2: White Screen / Blank Page
**Symptom:** Page loads but shows blank screen

**Solution:**
1. Open browser console (F12) → Check for errors
2. Common fix: Clear `dist/` folder and rebuild:
   ```bash
   rm -rf dist/
   npm run build
   ```
3. Re-upload all files

### Problem 3: CSS/Images Not Loading
**Symptom:** Page loads but styling is broken

**Solution:**
1. Check browser console for 404 errors on assets
2. Verify `assets/` folder structure in `public_html/`
3. Clear browser cache (Ctrl+Shift+R)
4. Check file permissions: folders `755`, files `644`

### Problem 4: SSL Not Working
**Symptom:** HTTPS shows "Not Secure" warning

**Solution:**
1. Wait 15 minutes after enabling SSL in Hostinger
2. Force SSL regeneration in Hostinger → **Security → SSL**
3. Check all resources load via HTTPS (no mixed content)

### Problem 5: Slow Loading Speed
**Solution:**
1. Enable **LiteSpeed Cache** in Hostinger
2. Optimize images before uploading
3. Enable Cloudflare CDN (free):
   - Hostinger → **Advanced → Cloudflare**

---

## 📊 Performance Optimization

### After Deployment:
1. **Enable Cloudflare CDN:**
   - Hostinger → **Advanced → Cloudflare**
   - Free plan is sufficient
   - Provides global CDN + DDoS protection

2. **Setup Google Analytics:**
   - Add tracking code to `index.html` before `</head>`
   - Or use Google Tag Manager

3. **Monitor Uptime:**
   - Use UptimeRobot (free): https://uptimerobot.com/
   - Get alerts if site goes down

---

## 📱 Testing Checklist

- [ ] Desktop browsers: Chrome, Firefox, Safari, Edge
- [ ] Mobile browsers: Chrome Mobile, Safari iOS
- [ ] Tablet view (iPad, Android tablets)
- [ ] All forms work (Contact, Appointment Booking)
- [ ] All images load properly
- [ ] Footer links work
- [ ] Social media links (if any) work
- [ ] Phone numbers are clickable on mobile
- [ ] Email links open email client
- [ ] Google Maps loads (if embedded)

---

## 🎯 Final Production Checklist

Before going live:
- [ ] Domain points to Hostinger (DNS propagated)
- [ ] SSL certificate active (HTTPS working)
- [ ] All pages load without errors
- [ ] Contact forms send emails
- [ ] Sitemap submitted to Google Search Console
- [ ] robots.txt accessible
- [ ] Favicon displays correctly
- [ ] Meta tags correct (check with Facebook Debugger)
- [ ] Page speed > 90 on mobile
- [ ] Backup of website files stored locally

---

## 📞 Support Contacts

**Hostinger Support:**
- Live Chat: Available 24/7 in Hostinger dashboard
- Knowledge Base: https://support.hostinger.com/

**Technical Issues:**
- Check browser console (F12 → Console tab)
- Review `.htaccess` configuration
- Test with different browsers/devices

---

## 📝 Notes

1. **Build Time:** ~30-60 seconds
2. **Upload Time:** 5-10 minutes (depending on connection)
3. **DNS Propagation:** 24-48 hours (if changing nameservers)
4. **SSL Activation:** 5-15 minutes

**Production URL:** https://visakhamultispeciality.com

**Last Updated:** October 25, 2025

---

## 🎉 Congratulations!

Your website is now live and optimized for production! 🚀

For future updates, simply:
1. Make changes locally
2. Run `npm run build`
3. Upload changed files to Hostinger

---

*Need help? Check Hostinger's 24/7 support or review this guide.*
