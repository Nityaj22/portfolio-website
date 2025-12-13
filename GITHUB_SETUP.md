# GitHub Setup Guide for Vercel Deployment

## Step 1: Create GitHub Repository

1. **Go to [github.com](https://github.com)** and sign in (or create an account if you don't have one)

2. **Create a New Repository**
   - Click the **"+"** icon in the top right corner
   - Select **"New repository"**
   - Repository name: `portfolio-website` (or any name you prefer)
   - Description (optional): "My personal portfolio website"
   - Choose **Public** (required for free hosting)
   - **DO NOT** check "Initialize with README" (we already have files)
   - Click **"Create repository"**

3. **Copy the Repository URL**
   - After creating, GitHub will show you a page with setup instructions
   - Copy the repository URL (it will look like: `https://github.com/YOUR_USERNAME/portfolio-website.git`)
   - You'll need this in the next step!

---

## Step 2: Connect Your Local Code to GitHub

After creating the repository, come back here and I'll help you push your code!

**The commands you'll run are:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## Step 3: Push to GitHub

Once you've created the repository and have the URL, let me know and I'll help you push the code!

---

## What Happens Next?

After pushing to GitHub:
1. Your code will be on GitHub
2. You can connect it to Vercel
3. Vercel will auto-deploy your site
4. Every time you push changes, Vercel will auto-update your site!

