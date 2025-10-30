# 🎨 Netlify CMS Setup Guide
## Vishakaha Multispeciality Clinic

---

## 📋 What is Netlify CMS?

Netlify CMS is a Git-based content management system that allows you to manage your website content through a user-friendly admin interface. Changes made through the CMS are automatically committed to your GitHub repository.

---

## 🔧 Setup Steps

### Step 1: Connect to GitHub

1. **In Lovable Editor:**
   - Click the **GitHub** button in the top-right corner
   - Click **Connect to GitHub**
   - Authorize the Lovable GitHub App
   - Click **Create Repository** to create a new repo with your code

2. **Note Your Repository Details:**
   - GitHub Username: `YOUR_GITHUB_USERNAME`
   - Repository Name: `YOUR_REPO_NAME`

### Step 2: Update CMS Configuration

1. Open `public/admin/config.yml`
2. Update line 2 with your GitHub details:
   ```yaml
   backend:
     name: github
     repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME  # e.g., johndoe/vishakaha-clinic
     branch: main
   ```

### Step 3: Set Up GitHub OAuth (Required for Authentication)

**Option A: Using Netlify (Easiest)**

1. **Deploy to Netlify:**
   - Sign up at https://netlify.com
   - Connect your GitHub repository
   - Deploy the site (it will build automatically)

2. **Enable Netlify Identity & Git Gateway:**
   - In Netlify dashboard → **Settings → Identity**
   - Click **Enable Identity**
   - Scroll to **Services → Git Gateway** and enable it
   - Under **Registration preferences**, select "Invite only"

3. **Invite Yourself:**
   - Go to **Identity** tab
   - Click **Invite users**
   - Enter your email
   - Check email and set password

4. **Access CMS:**
   - Visit: `https://your-netlify-site.netlify.app/admin`
   - Login with your email and password

**Option B: Self-Hosted OAuth (For Hostinger Deployment)**

If you want to deploy to Hostinger but use Netlify CMS, you'll need to set up an OAuth app:

1. **Create GitHub OAuth App:**
   - Go to GitHub → **Settings → Developer settings → OAuth Apps**
   - Click **New OAuth App**
   - Fill in:
     - Application name: `Vishakaha CMS`
     - Homepage URL: `https://visakhamultispeciality.com`
     - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Save the **Client ID** and **Client Secret**

2. **Deploy OAuth Service:**
   - You'll need a server to handle OAuth
   - Use Netlify's free service or deploy your own
   - See: https://www.netlifycms.org/docs/external-oauth-clients/

### Step 4: Access Your CMS

**After Setup:**
- Local development: `http://localhost:8080/admin`
- Production (Netlify): `https://your-site.netlify.app/admin`
- Production (Hostinger): `https://visakhamultispeciality.com/admin`

---

## 📝 What Can You Manage?

The CMS allows you to edit:

1. **Doctors** - Add/edit doctor profiles, specializations, timings
2. **Services** - Manage service offerings and descriptions
3. **Health Packages** - Update packages, prices, and benefits
4. **Lab Tests** - Add/edit test details, prices, preparation info
5. **Patient Feedback** - Moderate and approve testimonials
6. **Pharmacy Products** - Manage product catalog
7. **Gallery** - Upload and organize images

---

## 🔄 How It Works

1. **Make Changes:** Login to `/admin` and edit content through the UI
2. **Preview:** See changes before publishing
3. **Publish:** Click "Publish" to commit changes to GitHub
4. **Auto-Deploy:** Your hosting provider automatically rebuilds with new content

---

## 🚀 Deployment Workflows

### For Hostinger Deployment

Since Hostinger doesn't have automatic deployments, you'll need to:

1. **Make changes** in Netlify CMS
2. **Changes commit** to GitHub automatically
3. **Build locally** or use CI/CD:
   ```bash
   git pull origin main
   npm run build
   ```
4. **Upload `dist/` folder** to Hostinger

**Recommended: Use GitHub Actions for Auto-Deploy**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ftp.visakhamultispeciality.com
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
```

### For Netlify Deployment (Simpler)

1. Connect GitHub repo to Netlify
2. Netlify automatically rebuilds when you publish in CMS
3. No manual uploads needed!

---

## 🔐 Security Best Practices

1. **Restrict Access:**
   - Use "Invite only" registration in Netlify Identity
   - Only invite trusted admin users

2. **Enable 2FA:**
   - Enable two-factor authentication on your GitHub account

3. **Review Changes:**
   - Check GitHub commits to see what changed
   - Use GitHub's protected branches for approval workflows

---

## 🛠️ Troubleshooting

### Issue: Can't access /admin
**Solution:** Ensure `public/admin/` files are uploaded to Hostinger

### Issue: OAuth errors
**Solution:** Verify OAuth callback URL matches exactly in GitHub settings

### Issue: Changes not showing
**Solution:** Clear browser cache and rebuild:
```bash
npm run build
```

### Issue: Authentication loops
**Solution:** Clear browser cookies and localStorage for the site

---

## 📚 Additional Resources

- **Netlify CMS Docs:** https://www.netlifycms.org/docs/
- **GitHub OAuth Setup:** https://www.netlifycms.org/docs/authentication-backends/
- **Widget Reference:** https://www.netlifycms.org/docs/widgets/

---

## ✅ Quick Checklist

Before going live with CMS:
- [ ] GitHub repository connected
- [ ] `config.yml` updated with correct repo path
- [ ] OAuth authentication configured
- [ ] Admin user invited and can login
- [ ] Test: Edit content and verify changes appear
- [ ] Test: Changes commit to GitHub correctly
- [ ] Production deployment pipeline configured

---

## 🎯 Next Steps

1. **Connect to GitHub** using Lovable's GitHub integration
2. **Update** `public/admin/config.yml` with your repo details
3. **Choose** OAuth method (Netlify or self-hosted)
4. **Test** by accessing `/admin` and making a test edit
5. **Deploy** to production

---

**Need Help?**
- Netlify CMS Community: https://www.netlifycms.org/community/
- GitHub Issues: Check your repository's issues tab

---

*Last Updated: January 2025*
