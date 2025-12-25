import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download,
  Code,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#0ea5e9]">Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#0ea5e9] transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-[#0ea5e9] transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[#0ea5e9] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-[#0ea5e9] transition-colors">Education</button>
            <button onClick={() => scrollToSection('resume')} className="hover:text-[#0ea5e9] transition-colors">Resume</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#0ea5e9] transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-t border-gray-800">
            <div className="flex flex-col gap-4 px-6 py-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-[#0ea5e9] transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-[#0ea5e9] transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-[#0ea5e9] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-left hover:text-[#0ea5e9] transition-colors">Education</button>
              <button onClick={() => scrollToSection('resume')} className="text-left hover:text-[#0ea5e9] transition-colors">Resume</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-[#0ea5e9] transition-colors">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* EDIT HERE: Replace with your name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Your Name Here
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="text-[#0ea5e9]" size={24} />
            {/* EDIT HERE: Replace with your role */}
            <h2 className="text-2xl md:text-3xl text-gray-300">
              Fresher Software Engineer
            </h2>
          </div>
          
          {/* EDIT HERE: Replace with your introduction line */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building innovative solutions using Machine Learning and Full Stack Development
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 text-lg"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('resume')}
              variant="outline"
              className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white px-8 py-6 text-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Separator className="mb-8 bg-gray-800" />
          
          <Card className="bg-[#121212] border-gray-800">
            <CardContent className="pt-6">
              {/* EDIT HERE: Replace with your about text (4-6 lines) */}
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a recent Computer Science graduate passionate about solving real-world problems through technology. 
                Currently, I'm focusing on Machine Learning, Natural Language Processing, and Full Stack Development. 
                I have hands-on experience building projects using Python, Java, and modern web technologies. 
                My goal is to contribute to innovative projects while continuously learning and growing as a software engineer. 
                I'm eager to apply my skills in a challenging role where I can make a meaningful impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <Separator className="mb-12 bg-gray-800" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove programming languages */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">Python</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Java</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* ML & AI */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">Machine Learning & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove ML/AI skills */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">Machine Learning</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">NLP</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Computer Vision</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Data Science</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">LLM</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Web Technologies */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">Web Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove web technologies */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">HTML</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">CSS</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Flask</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Databases & Tools */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">Databases & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove databases and tools */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">MySQL</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">MongoDB</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Postman API</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Core Concepts */}
            <Card className="bg-[#121212] border-gray-800 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove core concepts */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">Data Structures & Algorithms</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">Operating Systems</Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">DBMS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <Separator className="mb-12 bg-gray-800" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ========================================
                PROJECT CARD TEMPLATE - COPY THIS STRUCTURE
                ======================================== */}
            
            {/* PROJECT 1 - EXAMPLE */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                {/* EDIT: Project Title */}
                <CardTitle className="text-xl">Sentiment Analysis System</CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  Python • NLP • Machine Learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Built a sentiment analysis model using NLP techniques
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Achieved 85% accuracy on test dataset
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Implemented text preprocessing and feature extraction
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Deployed model using Flask web framework
                  </li>
                </ul>
                
                <div className="flex gap-3">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* ========================================
                TO ADD MORE PROJECTS:
                1. Copy the entire Card structure above
                2. Replace the title, tech stack, bullet points
                3. Update the GitHub and Live Demo links
                4. Paste below this comment
                ======================================== */}

            {/* PROJECT 2 - Copy and edit the structure above */}
            {/* Uncomment and edit when ready:
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Your Project Title</CardTitle>
                <CardDescription className="text-gray-400">
                  Tech Stack Here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    First highlight point
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Second highlight point
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Third highlight point
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Fourth highlight point
                  </li>
                </ul>
                
                <div className="flex gap-3">
                  <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  <a href="YOUR_LIVE_DEMO_LINK" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
            */}

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
          <Separator className="mb-12 bg-gray-800" />

          <div className="space-y-6">
            {/* College - Edit this section */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    {/* EDIT: Degree name */}
                    <CardTitle className="text-xl">B.Tech in Computer Science</CardTitle>
                    {/* EDIT: College name */}
                    <CardDescription className="text-gray-400 mt-1">
                      Your College Name Here
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">2020 - 2024</div>
                    {/* EDIT: CGPA/Percentage */}
                    <div className="text-gray-400 mt-1">CGPA: 8.5/10</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* High School (11-12th) - Edit this section */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    {/* EDIT: Stream (Science/Commerce/Arts) */}
                    <CardTitle className="text-xl">Higher Secondary (11th - 12th)</CardTitle>
                    {/* EDIT: School name */}
                    <CardDescription className="text-gray-400 mt-1">
                      Your High School Name Here
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">2018 - 2020</div>
                    {/* EDIT: Percentage */}
                    <div className="text-gray-400 mt-1">Percentage: 85%</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* School (1-10th) - Edit this section */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    {/* EDIT: Grade level */}
                    <CardTitle className="text-xl">Secondary School (1st - 10th)</CardTitle>
                    {/* EDIT: School name */}
                    <CardDescription className="text-gray-400 mt-1">
                      Your School Name Here
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">2008 - 2018</div>
                    {/* EDIT: CGPA/Percentage */}
                    <div className="text-gray-400 mt-1">CGPA: 9.2/10</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Download Resume</h2>
          <Separator className="mb-12 bg-gray-800" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ========================================
                RESUME CARD TEMPLATE
                ======================================== */}
            
            {/* Resume 1: Software Engineering (ML/AI/NLP) */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                {/* EDIT: Resume category title */}
                <CardTitle className="text-lg text-center">Software Engineering</CardTitle>
                {/* EDIT: Specialization */}
                <CardDescription className="text-gray-400 text-center text-sm">
                  ML • AI • NLP
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* EDIT: Replace # with your PDF file path or link */}
                <a href="#" download>
                  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
                    <Download className="mr-2" size={18} />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Resume 2: Full Stack Engineering */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                {/* EDIT: Resume category title */}
                <CardTitle className="text-lg text-center">Full Stack</CardTitle>
                {/* EDIT: Specialization */}
                <CardDescription className="text-gray-400 text-center text-sm">
                  Web Development
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* EDIT: Replace # with your PDF file path or link */}
                <a href="#" download>
                  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
                    <Download className="mr-2" size={18} />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Resume 3: Data Analytics */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                {/* EDIT: Resume category title */}
                <CardTitle className="text-lg text-center">Data Analytics</CardTitle>
                {/* EDIT: Specialization */}
                <CardDescription className="text-gray-400 text-center text-sm">
                  Data Science
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* EDIT: Replace # with your PDF file path or link */}
                <a href="#" download>
                  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
                    <Download className="mr-2" size={18} />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Resume 4: Embedded Systems (Optional) */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105">
              <CardHeader>
                {/* EDIT: Resume category title */}
                <CardTitle className="text-lg text-center">Embedded Systems</CardTitle>
                {/* EDIT: Specialization */}
                <CardDescription className="text-gray-400 text-center text-sm">
                  IoT • Hardware
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* EDIT: Replace # with your PDF file path or link */}
                <a href="#" download>
                  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7]">
                    <Download className="mr-2" size={18} />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* ========================================
                TO ADD MORE RESUME CATEGORIES:
                1. Copy any Card structure above
                2. Change the title and specialization
                3. Update the PDF link in href="#"
                4. Paste below
                ======================================== */}
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>💡 Tip: To add your PDF resume files:</p>
            <p className="mt-2">1. Place your PDF files in the <code className="bg-gray-800 px-2 py-1 rounded">/public/resumes/</code> folder</p>
            <p>2. Update the href attribute: <code className="bg-gray-800 px-2 py-1 rounded">href="/resumes/your-resume-name.pdf"</code></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <Separator className="mb-12 bg-gray-800" />

          <Card className="bg-[#121212] border-gray-800">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-[#0ea5e9]" size={28} />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  {/* EDIT: Your email */}
                  <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-[#0ea5e9] transition-colors">
                    your.email@example.com
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4">
                    <Github className="text-[#0ea5e9]" size={28} />
                  </div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  {/* EDIT: Your GitHub username */}
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0ea5e9] transition-colors">
                    github.com/yourusername
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="text-[#0ea5e9]" size={28} />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  {/* EDIT: Your LinkedIn username */}
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0ea5e9] transition-colors">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Your Name. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
