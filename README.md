# CleanFlow of Ohio - Static Website

This repository contains the source code for the CleanFlow of Ohio static website. The site is built with HTML, CSS, and JavaScript.

## Deployment to Vercel

This site can be easily deployed to Vercel, a platform for static sites and Serverless Functions.

Follow these steps to deploy the site:

1.  **Sign up or Log in to Vercel:**
    *   Go to [vercel.com](https://vercel.com) and sign up for a free account or log in if you already have one.

2.  **Connect Your Git Repository:**
    *   Once logged in, click on the "Add New..." button and select "Project".
    *   Vercel will ask to connect to your Git provider (GitHub, GitLab, Bitbucket). Authorize Vercel to access your repositories.
    *   Select the repository that contains this project.

3.  **Configure Your Project:**
    *   **Project Name:** Vercel will automatically use your repository name, but you can change it.
    *   **Framework Preset:** Vercel should automatically detect that this is a static site (HTML/CSS/JS). If not, you can select "Other" or leave it as is.
    *   **Root Directory:** Ensure the "Root Directory" is set to the base of your repository (it should be by default, showing `index.html` at the root).
    *   **Build and Output Settings:** For a simple static site like this, you typically don't need to change these.
        *   The "Build Command" can usually be left empty or toggled off.
        *   The "Output Directory" can also be left empty or toggled off if Vercel correctly identifies the root as the serving directory.
        *   "Install Command" can also be left empty.

4.  **Deploy:**
    *   Click the "Deploy" button.
    *   Vercel will clone your repository, and since there's no build step for this simple static site, it will deploy the files directly.
    *   Once the deployment is complete (usually within a minute or two), Vercel will provide you with a URL where your live site can be accessed (e.g., `your-project-name.vercel.app`).

5.  **Future Updates:**
    *   By default, Vercel sets up a CI/CD pipeline. Any time you push changes to your `main` branch (or the branch you deployed), Vercel will automatically redeploy your site with the latest changes.

That's it! Your static website should now be live on Vercel.
