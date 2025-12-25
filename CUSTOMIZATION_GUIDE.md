# Portfolio Customization Guide

This guide will help you easily customize your portfolio website. All editable sections are marked with `/* EDIT HERE */` comments in the code.

## 📁 File Structure
- Main Portfolio Page: `/app/frontend/src/pages/Portfolio.jsx`
- All content is in ONE file for easy editing

---

## ✏️ How to Edit Each Section

### 1. **Hero Section (Top of page)**
**Location:** Lines ~85-110 in Portfolio.jsx

```jsx
// Replace "Your Name Here" with your actual name
<h1>Your Name Here</h1>

// Replace role if different
<h2>Fresher Software Engineer</h2>

// Replace introduction line
<p>Passionate about building innovative solutions...</p>
```

---

### 2. **About Me Section**
**Location:** Lines ~135-150 in Portfolio.jsx

```jsx
<p className="text-gray-300 text-lg leading-relaxed">
  I am a recent Computer Science graduate...
  // Replace this entire paragraph with your own 4-6 lines
</p>
```

---

### 3. **Skills Section**
**Location:** Lines ~160-250 in Portfolio.jsx

**Add/Remove skills by copying this pattern:**
```jsx
<Badge variant="secondary" className="bg-gray-800 text-white">Python</Badge>
<Badge variant="secondary" className="bg-gray-800 text-white">Java</Badge>
// Add more by copying the Badge line
```

---

### 4. **Projects Section** ⭐ MOST IMPORTANT
**Location:** Lines ~260-400 in Portfolio.jsx

### **How to Add a New Project:**

**Step 1:** Find the PROJECT CARD TEMPLATE section (around line 280)

**Step 2:** Copy this entire block:

```jsx
<Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
  <CardHeader>
    {/* EDIT: Project Title */}
    <CardTitle className="text-xl">Your Project Name</CardTitle>
    
    {/* EDIT: Tech Stack */}
    <CardDescription className="text-gray-400">
      Python • Flask • MongoDB
    </CardDescription>
  </CardHeader>
  
  <CardContent>
    {/* EDIT: 3-4 bullet points */}
    <ul className="space-y-2 text-gray-300 mb-4">
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        First key feature or achievement
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Second key feature or achievement
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Third key feature or achievement
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Fourth key feature or achievement
      </li>
    </ul>
    
    <div className="flex gap-3">
      {/* EDIT: Add your GitHub link */}
      <a href="https://github.com/yourusername/project-name" target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
          <Github className="mr-2" size={16} />
          Code
        </Button>
      </a>
      
      {/* EDIT: Add your live demo link */}
      <a href="https://your-project-demo.com" target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
          <ExternalLink className="mr-2" size={16} />
          Live Demo
        </Button>
      </a>
    </div>
  </CardContent>
</Card>
```

**Step 3:** Paste it in the projects grid and edit:
- Project title
- Tech stack (use • to separate technologies)
- 3-4 bullet points about the project
- GitHub link
- Live demo link (or remove this button if no demo)

---

### 5. **Education Section**
**Location:** Lines ~410-490 in Portfolio.jsx

**Edit each education card:**

```jsx
{/* College */}
<CardTitle>B.Tech in Computer Science</CardTitle>
<CardDescription>Your College Name Here</CardDescription>
<div className="text-[#0ea5e9] font-semibold">2020 - 2024</div>
<div className="text-gray-400 mt-1">CGPA: 8.5/10</div>

{/* High School */}
<CardTitle>Higher Secondary (11th - 12th)</CardTitle>
<CardDescription>Your High School Name Here</CardDescription>
<div className="text-[#0ea5e9] font-semibold">2018 - 2020</div>
<div className="text-gray-400 mt-1">Percentage: 85%</div>

{/* School */}
<CardTitle>Secondary School (1st - 10th)</CardTitle>
<CardDescription>Your School Name Here</CardDescription>
<div className="text-[#0ea5e9] font-semibold">2008 - 2018</div>
<div className="text-gray-400 mt-1">CGPA: 9.2/10</div>
```

---

### 6. **Resume Section** 📄
**Location:** Lines ~500-620 in Portfolio.jsx

### **How to Add Resume PDFs:**

**Step 1:** Create a folder for your resumes
```bash
mkdir -p /app/frontend/public/resumes
```

**Step 2:** Place your PDF files in that folder
- Example: `/app/frontend/public/resumes/resume-ml-ai.pdf`

**Step 3:** Update the href links in the code:

```jsx
{/* Software Engineering Resume */}
<CardTitle>Software Engineering</CardTitle>
<CardDescription>ML • AI • NLP</CardDescription>
<a href="/resumes/resume-ml-ai.pdf" download>
  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
    <Download className="mr-2" size={18} />
    Download PDF
  </Button>
</a>

{/* Full Stack Resume */}
<CardTitle>Full Stack</CardTitle>
<CardDescription>Web Development</CardDescription>
<a href="/resumes/resume-fullstack.pdf" download>
  <Button>...</Button>
</a>

{/* Data Analytics Resume */}
<CardTitle>Data Analytics</CardTitle>
<CardDescription>Data Science</CardDescription>
<a href="/resumes/resume-data-analytics.pdf" download>
  <Button>...</Button>
</a>
```

**Add more resume categories** by copying the Card structure.

---

### 7. **Contact Section**
**Location:** Lines ~630-680 in Portfolio.jsx

```jsx
{/* Email */}
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

{/* GitHub */}
<a href="https://github.com/yourusername">
  github.com/yourusername
</a>

{/* LinkedIn */}
<a href="https://linkedin.com/in/yourprofile">
  linkedin.com/in/yourprofile
</a>
```

---

## 🎨 Color Customization (Optional)

The portfolio uses a dark theme with cyan accent color (`#0ea5e9`).

**To change the accent color:**
1. Find all instances of `#0ea5e9` in Portfolio.jsx
2. Replace with your preferred color (e.g., `#f59e0b` for orange)
3. Also update `#0284c7` (darker shade) to match

**Example color schemes:**
- Blue: `#3b82f6` (primary), `#2563eb` (dark)
- Green: `#10b981` (primary), `#059669` (dark)
- Purple: `#a855f7` (primary), `#9333ea` (dark)
- Orange: `#f59e0b` (primary), `#d97706` (dark)

---

## 🚀 Quick Start Checklist

1. ✅ Update your name in Hero section
2. ✅ Update About Me paragraph
3. ✅ Add/remove skills in Skills section
4. ✅ Add your projects (copy the template)
5. ✅ Fill in education details
6. ✅ Add PDF resumes to `/public/resumes/` folder
7. ✅ Update resume download links
8. ✅ Update contact information (email, GitHub, LinkedIn)
9. ✅ Test all external links

---

## 📱 Mobile Responsive

The portfolio is already mobile-responsive. Test it by:
1. Opening in browser
2. Press F12 (Developer Tools)
3. Click the mobile icon to toggle device view

---

## 🔗 Adding External Links

All external links should have:
```jsx
target="_blank"           // Opens in new tab
rel="noopener noreferrer" // Security best practice
```

---

## ❓ Need Help?

- All sections have `/* EDIT HERE */` comments
- Follow the examples provided
- Copy-paste patterns for consistency
- Test changes by refreshing your browser

---

**Remember:** 
- Save the file after making changes
- Refresh your browser to see updates
- Keep the structure intact while editing content
