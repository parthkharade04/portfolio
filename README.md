Professional Portfolio 
A modern, responsive portfolio website built with React, Tailwind CSS, and Lucide Icons. This project features a dark-themed UI with sections for About, Skills, Projects, Education, and Contact.


🚀 Features
Hero Section: Personalized introduction with a professional role title.

About Me: Detailed background and career focus.

Skills Grid: Categorized technical skills (Languages, ML/AI, Web, Tools).

Project Showcase: Responsive cards with equal height, centered "Code" buttons, and GitHub integration.

Education Timeline: Academic history from Secondary school to B.Tech.

Resume Viewer: Centered "View Resume" functionality that opens in a new tab.

Privacy-Focused Contact: Clickable icons for Email, GitHub, and LinkedIn with hidden personal handles to maintain a clean UI.


🛠️ Tech Stack
Frontend: React.js, Tailwind CSS

UI Components: Radix UI (via shadcn/ui)

Icons: Lucide React

Deployment: Optimized for Vercel


📁 Project Structure
portfolio/
├── frontend/             # Main React application
│   ├── public/           # Static assets
│   │   └── resumes/      # Folder for PDF resumes
│   ├── src/
│   │   ├── components/ui # Reusable UI components (Buttons, Cards)
│   │   └── pages/        # Portfolio.jsx (The main code file)
└── vercel.json           # Deployment configuration for Vercel


🚢 Deployment on Vercel
Connect your GitHub repository to Vercel.
Set the Root Directory to frontend.
Use the following Build Settings:
Build Command: npm run build
Output Directory: build
