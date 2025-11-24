# Meenakshi Verma — Portfolio (Next.js + Tailwind)

This is a starter portfolio website for Meenakshi Verma built with Next.js and Tailwind CSS.

## What's included
- Hero section with contact & resume link
- Selected projects
- Career timeline (2018 onwards)
- Skills, education & certifications
- Ready-to-deploy configuration for Vercel

## How to run locally

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open `http://localhost:3000`

## Deploy to Vercel (recommended)
1. Create a GitHub repo and push this project.
2. Go to https://vercel.com and sign up (use GitHub).
3. Click "New Project" → import your GitHub repo.
4. Vercel will auto-detect Next.js; click "Deploy".
5. Your site will be live at `https://your-project.vercel.app`.

## Configure custom domain (example: yourname.com)
1. Buy a domain from a registrar (Namecheap, Google Domains, GoDaddy).
2. In Vercel dashboard, go to your project → Settings → Domains → Add.
3. Add your domain (e.g. `meenakshiverma.com`) then follow the DNS steps.
   - For most registrars, add an A record or CNAME pointing to Vercel as instructed.
4. Wait for DNS propagation (minutes to a few hours).
5. Enable `Enforce HTTPS` in Vercel project settings.

## Resume file
The repo includes `public/Meenakshi_Resume.pdf`. If you want to update it, replace that file.

## Notes
- Tailwind is already referenced, but after first `npm install` you may want to run `npx tailwindcss init -p` locally to regenerate config if needed.
- Replace contact details and project content as needed.

