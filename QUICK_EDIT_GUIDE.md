# 🚀 Quick Edit Guide - Portfolio Website

## 📍 Where is Everything?

**ALL content is in ONE file:** `/app/frontend/src/pages/Portfolio.jsx`

No backend needed! This is a static frontend portfolio.

---

## ✏️ How to Edit Each Section

### 1️⃣ YOUR NAME & INTRO (Line ~90-105)

```jsx
<h1>Your Name Here</h1>  // ← Change to "Rahul Kumar"
<h2>Fresher Software Engineer</h2>  // ← Keep or change role
<p>Passionate about building...</p>  // ← Write your own line
```

---

### 2️⃣ ABOUT ME (Line ~140)

```jsx
<p className="text-gray-300 text-lg leading-relaxed">
  I am a recent Computer Science graduate...
  // ← Replace this entire paragraph (4-6 lines)
</p>
```

---

### 3️⃣ SKILLS (Line ~170-240)

**To add a skill:**
```jsx
<Badge variant="secondary" className="bg-gray-800 text-white">Python</Badge>
```
Just copy this line and change "Python" to your skill.

**To remove a skill:** Delete the Badge line

---

### 4️⃣ PROJECTS (Line ~280) ⭐ IMPORTANT

**Currently:** You have 1 example project

**To add more projects:**

**Step 1:** Find this in the code (around line 280):
```jsx
{/* PROJECT 1 - EXAMPLE */}
<Card className="bg-[#121212]...">
  ...
</Card>

{/* PROJECT 2 - Copy and edit... */}
```

**Step 2:** Copy the ENTIRE Card block (from `<Card` to `</Card>`)

**Step 3:** Paste below and edit:

```jsx
{/* PROJECT 2 - Your New Project */}
<Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
  <CardHeader>
    <CardTitle className="text-xl">Your Project Name</CardTitle>
    <CardDescription className="text-gray-400">
      React • MongoDB • Node.js
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-gray-300 mb-4">
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        First achievement or feature
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Second achievement or feature
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Third achievement or feature
      </li>
      <li className="flex items-start">
        <span className="text-[#0ea5e9] mr-2">•</span>
        Fourth achievement or feature
      </li>
    </ul>
    
    <div className="flex gap-3">
      <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">
        <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
          <Github className="mr-2" size={16} />
          Code
        </Button>
      </a>
      <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
          <ExternalLink className="mr-2" size={16} />
          Live Demo
        </Button>
      </a>
    </div>
  </CardContent>
</Card>
```

**Step 4:** Save the file → Refresh browser → New project appears! ✅

---

### 5️⃣ EDUCATION (Line ~420-490)

**Three cards to edit:**

```jsx
{/* College */}
<CardTitle>B.Tech in Computer Science</CardTitle>  // ← Your degree
<CardDescription>Your College Name Here</CardDescription>  // ← College name
<div className="text-[#0ea5e9] font-semibold">2020 - 2024</div>  // ← Years
<div className="text-gray-400 mt-1">CGPA: 8.5/10</div>  // ← Your CGPA

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

### 6️⃣ RESUME PDFs (Line ~510)

**Step 1:** Create folder (run in terminal):
```bash
mkdir -p /app/frontend/public/resumes
```

**Step 2:** Put your PDF files there:
```
/app/frontend/public/resumes/
├── software-engineering.pdf
├── fullstack.pdf
├── data-analytics.pdf
└── embedded.pdf
```

**Step 3:** Update links in code:
```jsx
<a href="/resumes/software-engineering.pdf" download>
  <Button>Download PDF</Button>
</a>
```

---

### 7️⃣ CONTACT (Line ~640)

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

## 🎬 Workflow to Add Content

1. **Open:** `/app/frontend/src/pages/Portfolio.jsx`
2. **Edit:** Find the section using line numbers above
3. **Save:** Ctrl+S (file saves automatically)
4. **View:** Refresh http://localhost:3000
5. **Repeat:** Until everything is updated

---

## 📍 Where Will This Be Deployed?

This is YOUR website. You can deploy it to:

### Option 1: **GitHub Pages** (FREE)
1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch → Save
4. Your site: `https://yourusername.github.io/portfolio`

### Option 2: **Netlify** (FREE)
1. Sign up at netlify.com
2. Drag & drop the `build` folder
3. Your site: `https://yourname.netlify.app`

### Option 3: **Vercel** (FREE)
1. Sign up at vercel.com
2. Import GitHub repository
3. Auto-deploy on every push
4. Your site: `https://yourname.vercel.app`

### Option 4: **Emergent** (If you want)
- Your app is already running here
- Can be accessed via Emergent platform

---

## 🆘 Common Questions

**Q: Do I need a database?**
A: NO! This is a static website. All content is in the code.

**Q: How many projects can I add?**
A: Unlimited! Just keep copying the Card template.

**Q: What if I don't have a live demo?**
A: Remove the "Live Demo" button or link to GitHub only.

**Q: Can I change colors?**
A: Yes! Replace `#0ea5e9` (cyan) with your color throughout the file.

**Q: Is the resume download working?**
A: Yes, once you place PDF files in `/public/resumes/` and update the href.

---

## ✅ Quick Checklist

- [ ] Changed name in hero section
- [ ] Updated About Me text
- [ ] Added/removed skills
- [ ] Added at least 2-3 projects
- [ ] Updated education details
- [ ] Added resume PDFs
- [ ] Updated contact links
- [ ] Tested all links work
- [ ] Checked on mobile view

---

## 💡 Pro Tips

1. **Start small:** Update one section at a time
2. **Save often:** Changes reflect immediately
3. **Test links:** Make sure GitHub/demo links work
4. **Use real data:** Only add projects you actually built
5. **Keep it clean:** 2-4 projects is better than 10 half-baked ones

---

**Need help?** All sections have `/* EDIT HERE */` comments in the code!

**File location:** `/app/frontend/src/pages/Portfolio.jsx`
