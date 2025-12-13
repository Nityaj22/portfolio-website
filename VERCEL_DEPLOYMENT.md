# Deploy to Vercel - Step by Step

## ✅ Step 1: Your Code is on GitHub!
Your repository: `https://github.com/Nityaj22/portfolio-website`

---

## Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up or log in (you can use your GitHub account for easy connection)

2. **Add New Project**
   - Click **"Add New..."** button
   - Select **"Project"**

3. **Import Your Repository**
   - You'll see a list of your GitHub repositories
   - Find **"portfolio-website"** and click **"Import"**

4. **Configure Project Settings**
   - **Framework Preset**: Select **"Other"** (since it's a static HTML site)
   - **Root Directory**: Leave as `./` (root)
   - **Build Command**: Leave empty (no build needed for static site)
   - **Output Directory**: Leave empty (or set to `./` if required)
   - **Install Command**: Leave empty

5. **Deploy!**
   - Click **"Deploy"** button
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `portfolio-website-xxxxx.vercel.app`

---

## Step 3: Customize Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (if you have one)
   - Or use the free `.vercel.app` domain they provide

---

## Step 4: Automatic Deployments! 🎉

**Every time you push to GitHub, Vercel will automatically:**
- Detect the changes
- Deploy the new version
- Update your live site

**To update your site:**
1. Make changes to your files locally
2. Run these commands:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel will automatically deploy in 1-2 minutes!

---

## Your Live Site

After deployment, you'll get a URL like:
- `https://portfolio-website-xxxxx.vercel.app`

You can also add a custom domain later if you want!

---

## Need Help?

If you encounter any issues:
- Make sure your repository is **Public** on GitHub
- Check that `index.html` is in the root directory
- Verify all file paths are correct (relative paths work best)

Good luck! 🚀

