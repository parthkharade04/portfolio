import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Code,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
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
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#0ea5e9] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-[#0ea5e9] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#0ea5e9] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-[#0ea5e9] transition-colors"
            >
              Education
            </button>
            {/* <button onClick={() => scrollToSection('resume')} className="hover:text-[#0ea5e9] transition-colors">Resume</button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#0ea5e9] transition-colors"
            >
              Contact
            </button>
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
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-[#0ea5e9] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-[#0ea5e9] transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-[#0ea5e9] transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-left hover:text-[#0ea5e9] transition-colors"
              >
                Education
              </button>
              {/* <button onClick={() => scrollToSection('resume')} className="text-left hover:text-[#0ea5e9] transition-colors">Resume</button> */}
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-[#0ea5e9] transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* EDIT HERE: Replace with your name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Parth Kharade
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
            Driven by a strong interest in data and AI, I enjoy turning data
            into meaningful insights by building practical, data-driven
            solutions through hands-on projects in machine learning, analytics,
            and visualization to solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-blue px-8 py-6 text-lg"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("resume")}
              variant="outline"
              className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-blue px-8 py-6 text-lg"
            >
              View Resume
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-blue px-8 py-6 text-lg"
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
                I am a recent Electronics and Telecommunication graduate
                passionate about solving real-world problems through technology.
                Currently, I'm focusing on Machine Learning, Natural Language
                Processing, and Full Stack Development. I have hands-on
                experience building projects using Python, Java, SQL and modern
                web technologies. My goal is to contribute to innovative
                projects while continuously learning and growing as a software
                engineer. I'm eager to apply my skills in a challenging role
                where I can make a meaningful impact.
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
                <CardTitle className="text-[#0ea5e9]">
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove programming languages */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Java
                  </Badge>
                  {/* <Badge variant="secondary" className="bg-gray-800 text-white">JavaScript</Badge> */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    SQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* ML & AI */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">
                  Machine Learning & AI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove ML/AI skills */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Machine Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Natural Language Processing
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Computer Vision
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Data Science
                  </Badge>
                  {/* <Badge variant="secondary" className="bg-gray-800 text-white">LLM</Badge> */}
                </div>
              </CardContent>
            </Card>

            {/* Web Technologies */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">
                  Web Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove web technologies */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    HTML
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    CSS
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Flask
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Databases & Tools */}
            <Card className="bg-[#121212] border-gray-800">
              <CardHeader>
                <CardTitle className="text-[#0ea5e9]">
                  Databases & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {/* EDIT HERE: Add/Remove databases and tools */}
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Postman API
                  </Badge>
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
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Data Structures & Algorithms
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    Operating Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-800 text-white">
                    DBMS
                  </Badge>
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
            {/* PROJECT 1 - EXAMPLE */}
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 1 */}
                 JurisMind: AI Legal Insight Engine 
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  Python  • NLP  • RAG  •FastAPI  • React.js   • Pinecone  • Docker 
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                     Engineered a Retrieval Augmented Generation (RAG) System capable of querying 500+ legal contracts. Connected to Pinecone Vector Database to handle over 50,000 text chunks with the help of Python in backend.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                   Integrated Meta’s Llama 3 model (via Groq) to create concise complex legal data into simple summaries. Implemented a strict citation system where the AI links back to the exact source file to ensure accuracy and reduce
hallucinations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    In order to provide real-time legal citations and full-text contract retrieval, a responsive React interface supported by effective FastAPI endpoints was designed.

                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                   Executed secure API handling, CI/CD pipelines, and a production-ready Full Stack application with the help of Vercel and Render.
                  </li> 
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/JurisMind-AI-Legal-Insight-Engine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                 
                  <a href="https://smart-legal-assistant-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>


            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 2 */}
                  Farm Watch: AI-Enhanced Animal Detection for Farm Protection
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  Python  • ML  • Computer Vision
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Developed an intelligent system for farm animal detection
                    using OpenCV and advanced ML techniques.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Analyzed images for early warning against animal threats to
                    farms.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>Provided
                    effective crop protection, loss minimization, and wildlife
                    coexistence through comprehensive assessment metrics by
                    using classification algorithms.{" "}
                  </li>
                  {/* <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Deployed model using Flask web framework
                  </li> */}
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/FarmWatch-AI-Enhanced-Animal-Detection-for-Farm-Protection"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </Card>


            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 3*/}
                  Retail Inventory & Sales Analytics Database 
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  PostgreSQL  
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Designed a PostgreSQL-based retail system with structured schemas for products, customers, orders, and inventory.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Implemented triggers and functions to auto-update stock levels and calculate order totals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Created SQL views and aggregation queries for monthly sales, top-selling products, and inventory insights.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Optimized queries using indexing and relational constraints for faster data retrieval.
                  </li> 
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/Retail-Inventory-Sales-Analytics-Database"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 4 */}
                  Crop Yield Prediction Using Machine Learning
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  R Programming  • ML  • Data Analysis 
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Developed a regression- based Machine Learning Model which predicts the growth of the crop in that area 
                    considering various factors like rainfall, soil type and its Ph value, humidity, temperature and season.

                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Implemented and compared multiple regression models: Linear Regression, Decision Tree, Random Forest, and 
                    XGBoost for accuracy and performance.
                  </li>
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/Crop-Yield-Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 5 */}
                  Context-Aware Spiritual Knowledge Retrieval System Using GraphRAG and LLM
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  Python  • NLP  • GraphRAG  • LLM
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Developed a Graph-based Retrieval-Augmented Generation system using Neo4j to extract and link knowledge 
                    from spiritual discourses.

                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Automated entity recognition from HTML files and structured them as a knowledge graph, enabling semantic 
                    search and context-aware question answering with LLMs

                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    This solution helps preserve and navigate large volumes of spiritual content efficiently.
                  </li>
                  {/* <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Deployed model using Flask web framework
                  </li> */}
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/Context-Aware-Spiritual-Knowledge-Retrieval-System-Using-GraphRAG-and-LLM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {/* Project 6 */}
                  Expense Tracker Web App
                </CardTitle>
                {/* EDIT: Tech Stack */}
                <CardDescription className="text-gray-400">
                  Java • SpringBoot • PostgreSQL
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* EDIT: 3-4 bullet points about the project */}
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Developed a full-stack expense management system using Java, Spring Boot, and PostgreSQL.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                     Created REST APIs for adding, viewing, updating, and deleting expense records with proper validation and error handling.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Designed a relational database schema and used SQL aggregation queries to generate monthly spending summaries and category-wise analysis.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0ea5e9] mr-2">•</span>
                    Built a simple UI with HTML, CSS, and JavaScript for sorting, filtering, and viewing expenses.
                  </li> 
                </ul>

                <div className="flex gap-3 justify-center">
                  {/* EDIT: Replace # with your GitHub link */}
                  <a
                    href="https://github.com/parthkharade04/expense-tracker-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 hover:bg-blue-800 text-blue-400"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
                  </a>
                  {/* EDIT: Replace # with your live demo link (or remove if not applicable) */}
                  {/* <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#0ea5e9] hover:bg-[#0284c7]">
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </a> */}
                </div>
              </CardContent>
            </Card>



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
                    <CardTitle className="text-xl text-white">
                      B.E in Electronics and Telecommunication
                    </CardTitle>
                    {/* EDIT: College name */}
                    <CardDescription className="text-blue-400 mt-1">
                      Vishwakarma Institute of Technology, Pune
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">
                      Dec 2021-June 2025
                    </div>
                    {/* EDIT: CGPA/Percentage */}
                    <div className="text-gray-400 mt-1">CGPA: 8.72/10</div>
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
                    <CardTitle className="text-xl text-white">
                      HSC (11th - 12th)
                    </CardTitle>
                    {/* EDIT: School name */}
                    <CardDescription className="text-blue-400 mt-1">
                      Shri Balaji Madhyamik Vidyalaya & Junior College,
                      Ichalkaranji
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">
                      June 2019 - Aug 2021
                    </div>
                    {/* EDIT: Percentage */}
                    <div className="text-gray-400 mt-1">Class XII: 93%</div>
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
                    <CardTitle className="text-xl text-white">
                      School Education CBSE (1st - 10th)
                    </CardTitle>
                    {/* EDIT: School name */}
                    <CardDescription className="text-blue-400 mt-1">
                      Yashwant International School, Kodoli
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    {/* EDIT: Timeline */}
                    <div className="text-[#0ea5e9] font-semibold">
                      June 2009 - March 2019
                    </div>
                    {/* EDIT: CGPA/Percentage */}
                    <div className="text-gray-400 mt-1"> Class X: 86%</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Resume
          </h2>
          <Separator className="mb-12 bg-gray-800" />

          {/* Centering the single card */}
          <div className="flex justify-center">
            <Card className="bg-[#121212] border-gray-800 hover:border-[#0ea5e9] transition-all hover:scale-105 w-full max-w-md">
              <CardHeader>
                {/* Using text-white for visibility */}
                <CardTitle className="text-xl text-center text-white">
                  Software Engineering
                </CardTitle>
                <CardDescription className="text-gray-400 text-center text-sm">
                  ML • AI • NLP • Full Stack
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                {/* 1. target="_blank" opens the file in a new tab for viewing.
              2. Removed the 'download' attribute so it doesn't force a download.
          */}
                <a
                  href="/resume/pnk__.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-6 text-lg">
                    View Resume
                  </Button>
                </a>
              </CardContent>
            </Card>
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
                <div className="flex flex-col items-center text-center">
                  {/* Poore block ko click-able banane ke liye <a> tag ko bahar rakha hai */}
                  <a
                    href="mailto:parthnk04@gmail.com"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9]/20 transition-all">
                      <Mail className="text-[#0ea5e9]" size={28} />
                    </div>

                    {/* Heading 'Email' dikhegi aur clickable hogi */}
                    <h3 className="font-semibold mb-2 text-white group-hover:text-[#0ea5e9] transition-colors">
                      Email
                    </h3>

                    {/* Yaha se email address wala text hata diya gaya hai */}
                    <span className="text-gray-400 text-sm">
                      Click to message
                    </span>
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex flex-col items-center text-center">
                  <a
                    href="https://github.com/parthkharade04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9]/20 transition-all">
                      <Github className="text-[#0ea5e9]" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2 text-white group-hover:text-[#0ea5e9] transition-colors">
                      GitHub
                    </h3>
                    {/* Username hide kar diya gaya hai */}
                    <span className="text-gray-400 text-sm">View Projects</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center text-center">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#0ea5e9]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0ea5e9]/20 transition-all">
                      <Linkedin className="text-[#0ea5e9]" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2 text-white group-hover:text-[#0ea5e9] transition-colors">
                      LinkedIn
                    </h3>
                    {/* Profile link hide kar diya gaya hai */}
                    <span className="text-gray-400 text-sm">
                      Connect with me
                    </span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
