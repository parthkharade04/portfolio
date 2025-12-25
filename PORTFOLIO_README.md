# 🎯 Fresher Software Engineer Portfolio

A clean, modern, and professional portfolio website built with React and Tailwind CSS. Perfect for showcasing your projects, skills, and experience as a fresher software engineer.

## ✨ Features

- **Dark Theme** with cyan accent color (#0ea5e9)
- **Fully Responsive** - Works on mobile, tablet, and desktop
- **Smooth Scrolling** navigation
- **Multiple Resume Categories** - Software Engineering, Full Stack, Data Analytics, Embedded
- **Project Showcase** with GitHub and live demo links
- **Education Timeline** with CGPA/percentage display
- **Contact Section** with Email, GitHub, and LinkedIn
- **Easy to Customize** - All content marked with EDIT comments

## 🚀 Live Demo

Your portfolio is running at: [http://localhost:3000](http://localhost:3000)

## 📂 File Structure

```
/app/frontend/
├── src/
│   ├── pages/
│   │   └── Portfolio.jsx          ← Main portfolio page (EDIT THIS FILE)
│   ├── components/ui/              ← Shadcn UI components
│   ├── App.js
│   ├── App.css
│   └── index.css
├── public/
│   └── resumes/                    ← Place your PDF resumes here
└── package.json
```

## ✏️ Quick Customization Guide

### 1. **Personal Information** (Hero Section)
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 85-110)

```jsx
<h1>Your Name Here</h1>                        // Replace with your name
<h2>Fresher Software Engineer</h2>             // Replace with your role
<p>Passionate about building innovative...</p>  // Replace with your tagline
```

### 2. **About Me**
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 135-150)

Replace the entire paragraph with your own 4-6 lines about yourself.

### 3. **Skills**
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 160-250)

Add/remove skills by copying the Badge pattern:
```jsx
<Badge variant="secondary" className="bg-gray-800 text-white">Python</Badge>
```

### 4. **Projects** ⭐
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 280-400)

**To add a new project:**
1. Find the PROJECT CARD TEMPLATE comment
2. Copy the entire Card structure
3. Edit these fields:
   - Project title
   - Tech stack (use • to separate)
   - 3-4 bullet points
   - GitHub link: `href="https://github.com/yourusername/project"`
   - Live demo link: `href="https://your-demo.com"`

**Example:**
```jsx
<Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
  <CardHeader>
    <CardTitle className="text-xl">Weather App</CardTitle>
    <CardDescription className="text-gray-400">
      React • API • JavaScript
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-300 mb-4">
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Fetches real-time weather data using OpenWeather API
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Displays 5-day forecast with interactive charts
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Responsive design with location search
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Built with React hooks and modern JavaScript
      </li>
    </ul>
    <div className="flex gap-3">
      <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
          <Github className="mr-2" size={16} />
          Code
        </Button>
      </a>
      <a href="https://weather-app-demo.com" target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
          <ExternalLink className="mr-2" size={16} />
          Live Demo
        </Button>
      </a>
    </div>
  </CardContent>
</Card>
```

### 5. **Education**
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 410-490)

Edit the three education cards:
- College (B.Tech/B.E.)
- High School (11th-12th)
- School (1st-10th)

Replace:
- Degree/level name
- Institution name
- Timeline (2020-2024)
- CGPA or Percentage

### 6. **Resume PDFs** 📄
**Step 1:** Create the resumes folder
```bash
mkdir -p /app/frontend/public/resumes
```

**Step 2:** Place your PDF files
```bash
/app/frontend/public/resumes/
├── resume-ml-ai.pdf
├── resume-fullstack.pdf
├── resume-data-analytics.pdf
└── resume-embedded.pdf
```

**Step 3:** Update the links in Portfolio.jsx (Lines 500-620)
```jsx
<a href="/resumes/resume-ml-ai.pdf" download>
  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
    <Download className="mr-2" size={18} />
    Download PDF
  </Button>
</a>
```

### 7. **Contact Information**
**File:** `/app/frontend/src/pages/Portfolio.jsx` (Lines 630-680)

Update:
- Email: `mailto:your.email@example.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`

## 🎨 Color Customization (Optional)

The portfolio uses cyan (#0ea5e9) as the accent color.

**To change the accent color:**
1. Open `/app/frontend/src/pages/Portfolio.jsx`
2. Find and replace all instances of:
   - `#0ea5e9` → Your new color (primary)
   - `#0284c7` → Darker shade of your color

**Suggested color schemes:**
- **Blue**: `#3b82f6` and `#2563eb`
- **Green**: `#10b981` and `#059669`
- **Purple**: `#a855f7` and `#9333ea`
- **Orange**: `#f59e0b` and `#d97706`

## 📱 Testing Your Changes

1. **Save the file** after making changes
2. **Refresh your browser** at [http://localhost:3000](http://localhost:3000)
3. The changes should appear immediately (hot reload enabled)

## 🔍 Mobile Responsive Testing

1. Open [http://localhost:3000](http://localhost:3000)
2. Press `F12` (Developer Tools)
3. Click the mobile/tablet icon to toggle device view
4. Test different screen sizes

## ✅ Pre-Deployment Checklist

Before deploying your portfolio, make sure you've updated:

- [ ] Your name in the hero section
- [ ] About Me paragraph with your own content
- [ ] Skills section with your actual skills
- [ ] At least 2-3 projects with working links
- [ ] Education details (school, high school, college)
- [ ] Resume PDF files uploaded to `/public/resumes/`
- [ ] Resume download links updated
- [ ] Contact information (email, GitHub, LinkedIn)
- [ ] Tested all external links
- [ ] Checked mobile responsiveness
- [ ] Footer text updated with your name

## 🚀 Deployment Options

### GitHub Pages
1. Build the project: `yarn build`
2. Deploy the `build` folder to GitHub Pages

### Netlify
1. Connect your GitHub repository
2. Set build command: `yarn build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with one click

## 📖 Additional Resources

- **Customization Guide**: `/app/CUSTOMIZATION_GUIDE.md`
- **Shadcn UI Components**: `/app/frontend/src/components/ui/`
- **React Documentation**: https://react.dev/

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 💡 Tips

1. **Keep it simple** - As a fresher, focus on quality over quantity
2. **Working links** - Make sure all GitHub and demo links work
3. **Real projects** - Only showcase projects you actually built
4. **Professional tone** - Avoid exaggerated claims
5. **Mobile-first** - Many recruiters view portfolios on mobile
6. **Fast loading** - Optimize images and avoid heavy animations
7. **Update regularly** - Add new projects as you build them

## 🤝 Need Help?

- All editable sections are marked with `/* EDIT HERE */` comments
- Follow the patterns provided for consistency
- Refer to the CUSTOMIZATION_GUIDE.md for detailed instructions

---

**Built with ❤️ using React & Tailwind CSS**

Good luck with your job search! 🎉
