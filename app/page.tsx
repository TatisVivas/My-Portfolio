"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Brain,
  Download,
  Mail,
  Github,
  Linkedin,
  Coffee,
  Music,
  Camera,
  BookOpen,
  Palette,
  Globe,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Star,
  Award,
  GraduationCap,
  Briefcase,
  Users,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openContributorsKey, setOpenContributorsKey] = useState<string | null>(null)
  const [language, setLanguage] = useState<"en" | "es">("en")

  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactMessage, setContactMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [sendResult, setSendResult] = useState<"idle" | "success" | "error">("idle")
  const isSpanish = language === "es"
  const cvHref = isSpanish ? "/Tatiana_Vivas_CV_ES.pdf" : "/Tatiana_Vivas_CV.pdf"
  const cvFileName = isSpanish ? "Tatiana_Vivas_CV_ES.pdf" : "Tatiana_Vivas_CV.pdf"
  const navItems = [
    { id: "home", label: isSpanish ? "Inicio" : "Home" },
    { id: "about", label: isSpanish ? "Sobre mí" : "About Me" },
    { id: "cv", label: "CV" },
    { id: "skills", label: isSpanish ? "Habilidades" : "Skills" },
    { id: "projects", label: isSpanish ? "Proyectos" : "Projects" },
    { id: "interests", label: isSpanish ? "Intereses" : "My Interests" },
    { id: "contact", label: isSpanish ? "Contacto" : "Contact" },
  ]

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setSendResult("idle")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          message: contactMessage,
        }),
      })
      if (!response.ok) throw new Error("Request failed")
      setSendResult("success")
      setContactName("")
      setContactEmail("")
      setContactMessage("")
    } catch (err) {
      setSendResult("error")
    } finally {
      setIsSending(false)
    }
  }

  const skills = [
    { name: "Python", level: 95, icon: Code2 },
    { name: "Machine Learning", level: 90, icon: Brain },
    { name: "SQL/NoSQL", level: 85, icon: Database },
    { name: "React/Next.js", level: 80, icon: Globe },
    { name: "Data Visualization", level: 88, icon: Palette },
    { name: "Cloud Computing", level: 75, icon: Database },
  ]

  const skillCategories = [
    {
      title: isSpanish ? "Lenguajes" : "Languages",
      skills: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      ],
    },
    {
      title: isSpanish ? "Backend y Bases de Datos" : "Backend & Databases",
      skills: [
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        {
          name: "REST APIs / API Design",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
        },
      ],
    },
    {
      title: isSpanish ? "Datos y Analítica" : "Data & Analytics",
      skills: [
        {
          name: "PySpark / Apache Spark",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
        },
        { name: "PowerBI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Tableau", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
        {
          name: "Observable",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
        },

        {
          name: "Bizagi",
          icon: "https://play-lh.googleusercontent.com/v_uokD6H2cqEncMYNFjxVlP_4ZitMmEgzDCpD7Inx4mI0H5GRwizY0qq3EiH4MtRVg",
        },
      ],
    },
  ]



  const personalInterests = [
    {
      name: isSpanish ? "Arte (dibujo y diseño visual)" : "Arts (drawing, visual design)",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
      description: isSpanish
        ? "La acuarela y la pintura al óleo son dos de las pasiones más grandes de mi vida."
        : "Watercolor and oil painting are the greatest loves of my life.",
    },
    {
      name: isSpanish ? "Piano y música clásica" : "Piano and classical music",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop&crop=center",
      description: isSpanish
        ? "Encuentro armonía y expresión a través de este hermoso instrumento."
        : "Finding harmony and expression through this beautiful instrument.",
    },
    {
      name: isSpanish ? "Natación y actividades de bienestar" : "Swimming and wellness activities",
      image: "https://images.unsplash.com/photo-1570294440392-0056ffb1124a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: isSpanish
        ? "Mantengo mi bienestar físico y mental a través de actividades acuáticas."
        : "Maintaining physical and mental wellness through aquatic activities",
    },
    {
      name: isSpanish
        ? "Explorar nuevas tecnologías y tendencias de desarrollo de software"
        : "Exploring new technologies and software development trends",
      image: "https://images.unsplash.com/photo-1750055129957-6e757ce881dc?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: isSpanish
        ? "Me mantengo al día con tecnologías emergentes y buenas prácticas de desarrollo."
        : "Staying current with emerging technologies and development practices",
    },
  ]

  const projects = [
    {
      title: "Clínica Shiba - Web System for a Veterinary Clinic",
      description:
        "Fullstack web application for a veterinary clinic, featuring an email call-to-action, AI-powered chatbot, marketplace, appointment scheduling, veterinarian CRUD, client CRUD, pet CRUD, treatment sales, and an admin dashboard for full system control and real-time clinic insights.",
      tech: [
        "Angular 16",
        "Spring Boot",
        "PostgreSQL",
        "RESTful API",
        "Render",
        "Vercel",
        "Gemini API",
        "Docker",
        "CI/CD Pipelines",
      ],
      github: "https://github.com/tavaju",
      frontendRepo: "https://github.com/tavaju/ClinicaShibaAngular",
      backendRepo: "https://github.com/tavaju/ClinicaShibaSB",
      demo: "https://clinica-shiba-angular-theta.vercel.app/",
      videoUrl: "https://youtu.be/bHey_1XL8XM",
      duration: "18 weeks",
      team: "3 people",
      contributors: [
        { name: "Valeria Arenas", github: "https://github.com/ValeriaArenasB" },
        { name: "Juan Pablo Cañón", github: "https://github.com/Juanbap" },
        { name: "Tatiana Vivas", github: "https://github.com/Tatisvivas" },
      ],
      featured: true,
      highlight: true,
    },
    {
      title: "Planifika — Educational Project Management Platform (DrimSoft)",
      description:
        "Planifika is a DrimSoft web platform for educational institutions: centralized project management with planning, monitoring, reporting, and RBAC. I rotated across Scrum, Product Owner, development, QA, and DevOps—shipping from backlog clarity to production. Architecture: microservices behind an API gateway, REST APIs with JWT, Docker, and GitHub Actions CI/CD. Quality and reliability drew on JUnit, Selenium, Postman/Newman, JMeter, and ISO 25010 (performance, scalability, security, maintainability).",
      tech: [
        "Microservices",
        "API Gateway",
        "REST APIs",
        "JWT",
        "Docker",
        "GitHub Actions",
        "JUnit",
        "Selenium",
        "Postman / Newman",
        "JMeter",
        "ISO 25010",
      ],
      github: "https://github.com/Drim-Soft",
      demo: null,
      videoUrl: "https://youtu.be/Oi_r0BV7PU8?si=VarbZLf43wj82NS_",
      duration: "17 weeks",
      team: "12 people",
      featured: true,
      highlight: true,
    },

    {
      title: "Scrabble Support System – Console App for Word Validation and Strategy",
      description: "Console-based application developed for a Data Structures course to support the board game Scrabble. It implements advanced data structures for word search, validation, scoring, and generating strategic suggestions.",
      tech: ["C++", "GNU g++", "Makefile", "Console I/O"],
      github: "https://github.com/TatisVivas/SistemaDeApoyoScrabble",
      demo: null,
      duration: "17 weeks",
      team: "3 people",
      contributors: [
        { name: "Valeria Arenas", github: "https://github.com/ValeriaArenasB" },
        { name: "Tatiana Vivas", github: "https://github.com/Tatisvivas" },
        { name: "Mariana Osorio", github: "https://github.com/mariana-osoriov827" },
      ],
      featured: true,
    },
    {
      title: "PetStep – Mobile App for Dog Walking Services",
      description: "Android mobile app designed to connect pet owners with reliable dog walkers nearby. PetStep addresses time constraints, low visibility of available walkers, and security concerns by offering real-time monitoring and seamless communication.",
      tech: ["Kotlin", "Firebase", "XML", "JUnit", "Android", "GPS Tracking"],
      github: "https://github.com/TatisVivas/petstepproject",
      demo: null,
      duration: "12 weeks",
      team: "5 people",
      contributors: [
        { name: "Daniel Sandoval", github: "https://github.com/RogelioRichmanAstronaut" },
        { name: "Daniel Perez", github: "https://github.com/Perezpdaniel" },
        { name: "Juan Pablo Cañón", github: "https://github.com/Juanbap" },
        { name: "Andrés Rincón", github: "https://github.com/AndresCRincon" },
        { name: "Tatiana Vivas", github: "https://github.com/Tatisvivas" },
      ],
      featured: true,
      highlight: false,
    },
    {
      title: "Observable Spotify Business Model – Data Visualization Project",
      description: "Interactive project developed with Observable to analyze Spotify's data governance and business model. It explores industry trends, challenges, and opportunities, providing recommendations to improve strategy and data practices.",
      tech: ["ObservableHQ", "JavaScript", "Data Visualization", "Business Model Canvas"],
      github: null,
      demo: "https://observablehq.com/d/ff132fca675e9317",
      duration: "2 weeks",
      featured: true,
    },
    {
      title: "Apple Historic Review – Data Visualization in Power BI",
      description: "Comprehensive analysis of Apple's financial, sales, and customer data to identify trends, strategic opportunities, and market positioning.",
      tech: ["Python", "Power BI", "Power Query", "Data Modeling"],
      github: null,
      demo: "/EntregaFinalProyecto-VisualizaciónDeDatos.pdf",
      duration: "3 weeks",
      featured: true,
    },
    {
      title: "Energy Consumption (BSTS)",
      description:
        "Developed a predictive analysis model to compare energy consumption trends between G7 and BRICS countries using Bayesian Structural Time Series (BSTS). The work centered on modeling temporal patterns and surfacing structural differences in energy behavior across major economies. Implemented in R, the approach supported probabilistic forecasting and scenario analysis. Along the way it deepened my practice with time series data, statistical modeling, and translating results into real-world interpretation.",
      tech: ["R", "BSTS", "Time Series", "Bayesian inference", "Forecasting"],
      github: null,
      demo: null,
      duration: "2 weeks",
      team: "4 people",
      featured: true,
    },
    {
      title: "Free Flow Game – Puzzle with Auto-Solving Algorithms",
      description: "Frontend puzzle game built with Angular 16 where players connect pairs of numbers without overlapping paths. Includes an AI-based auto-solver and statistical analysis of solutions.",
      tech: ["Angular 16", "TypeScript", "TailwindCSS", "RxJS"],
      github: "https://github.com/TatisVivas/freeflow",
      demo: "https://freeflow-vwys.vercel.app/",
      duration: "1 month",
      team: "2 people",
      contributors: [
        { name: "Juan Pablo Cañón", github: "https://github.com/Juanbap" },
        { name: "Tatiana Vivas", github: "https://github.com/Tatisvivas" },
      ],
      featured: true,
    },
    {
      title: "TFTP Server – File Transfer Protocol Implementation",
      description: "Developed a custom TFTP server in Python, implementing read/write requests, error handling, and file directory management over UDP.",
      tech: ["Python", "Sockets (UDP)", "File I/O", "Networking"],
      github: "https://github.com/TatisVivas/tftp-server",
      demo: null,
      duration: "1 month",
      team: "3 people",
      contributors: [
        { name: "Valeria Arenas", github: "https://github.com/ValeriaArenasB" },
        { name: "Juan Pablo Cañón", github: "https://github.com/Juanbap" },
        { name: "Tatiana Vivas", github: "https://github.com/Tatisvivas" },
      ],
      featured: true,
    },
    {
      title: "WhatsApp Chat Visualizer",
      description:
        "A client-side TypeScript tool that parses WhatsApp-exported `.txt` chats and renders them as an interactive, WhatsApp-style thread—bubble layout, colors, avatars with initials, and drag-and-drop or click-to-upload. The parser turns raw lines into structured messages you can scan for behavioral and communication patterns; everything runs in the browser with React 19 and Vite 7, no backend required.",
      tech: ["React 19", "Vite 7", "TypeScript", "CSS3"],
      github: "https://github.com/TatisVivas/WhatsappChatVisualizer",
      demo: "https://whatsapp-chat-visualizer.vercel.app",
      duration: "2026",
      featured: false,
      personal: true,
    },
    {
      title: "Rate by Recommendation",
      description:
        "A movie web app built on The Movie Database (TMDb): real-time search, 1–5 star ratings, optional text reviews, a personal watchlist, and recommendations informed by what you save—plus light/dark themes and English/Spanish UI. React 19 on the frontend with Supabase handling profiles, preferences, watchlist, and stored reviews.",
      tech: ["React 19", "JavaScript", "Supabase", "TMDb API", "CSS3"],
      github: "https://github.com/TatisVivas/Rate-by-Recommendation",
      demo: "https://rate-by-recommendation.vercel.app",
      duration: "2026",
      featured: false,
      personal: true,
    },
  ]

  const projectTranslations: Record<string, { title: string; description: string }> = {
    "Clínica Shiba - Web System for a Veterinary Clinic": {
      title: "Clínica Shiba - Sistema web para clínica veterinaria",
      description:
        "Aplicación web fullstack para una clínica veterinaria con llamada a la acción por correo, chatbot con IA, marketplace, agendamiento de citas, CRUD de veterinarios/clientes/mascotas, venta de tratamientos y panel administrativo con control total e información en tiempo real.",
    },
    "Planifika — Educational Project Management Platform (DrimSoft)": {
      title: "Planifika — Plataforma de gestión de proyectos educativos (DrimSoft)",
      description:
        "Planifika es una plataforma web de DrimSoft para instituciones educativas: gestión centralizada de proyectos con planeación, seguimiento, reportes y RBAC. Participé en Scrum, Product Owner, desarrollo, QA y DevOps, llevando el trabajo desde el backlog hasta producción.",
    },
    "Scrabble Support System – Console App for Word Validation and Strategy": {
      title: "Sistema de apoyo Scrabble – App de consola para validación y estrategia",
      description:
        "Aplicación de consola desarrollada en la materia de Estructuras de Datos para apoyar el juego Scrabble. Implementa estructuras de datos avanzadas para búsqueda de palabras, validación, puntaje y sugerencias estratégicas.",
    },
    "PetStep – Mobile App for Dog Walking Services": {
      title: "PetStep – App móvil para paseadores de perros",
      description:
        "Aplicación móvil Android para conectar dueños de mascotas con paseadores confiables cercanos. PetStep aborda limitaciones de tiempo, baja visibilidad de paseadores y preocupaciones de seguridad mediante monitoreo en tiempo real y comunicación fluida.",
    },
    "Observable Spotify Business Model – Data Visualization Project": {
      title: "Modelo de negocio de Spotify en Observable – Proyecto de visualización de datos",
      description:
        "Proyecto interactivo desarrollado en Observable para analizar la gobernanza de datos y el modelo de negocio de Spotify. Explora tendencias del sector, desafíos y oportunidades, con recomendaciones para mejorar estrategia y prácticas de datos.",
    },
    "Apple Historic Review – Data Visualization in Power BI": {
      title: "Análisis histórico de Apple – Visualización de datos en Power BI",
      description:
        "Análisis integral de datos financieros, de ventas y de clientes de Apple para identificar tendencias, oportunidades estratégicas y posicionamiento de mercado.",
    },
    "Energy Consumption (BSTS)": {
      title: "Consumo energético (BSTS)",
      description:
        "Modelo predictivo para comparar tendencias de consumo energético entre países del G7 y BRICS usando Bayesian Structural Time Series (BSTS), enfocado en patrones temporales, diferencias estructurales y pronóstico probabilístico.",
    },
    "Free Flow Game – Puzzle with Auto-Solving Algorithms": {
      title: "Free Flow Game – Rompecabezas con algoritmos de auto-solución",
      description:
        "Juego tipo puzzle en frontend con Angular 16 donde se conectan pares de números sin cruzar rutas. Incluye auto-solucionador con IA y análisis estadístico de soluciones.",
    },
    "TFTP Server – File Transfer Protocol Implementation": {
      title: "Servidor TFTP – Implementación del protocolo de transferencia de archivos",
      description:
        "Servidor TFTP personalizado en Python con soporte de solicitudes de lectura/escritura, manejo de errores y administración de archivos sobre UDP.",
    },
    "WhatsApp Chat Visualizer": {
      title: "Visualizador de chats de WhatsApp",
      description:
        "Herramienta en TypeScript del lado del cliente que procesa chats exportados en `.txt` y los muestra como hilo interactivo estilo WhatsApp, con burbujas, colores, avatares y carga por arrastrar o clic, todo en el navegador.",
    },
    "Rate by Recommendation": {
      title: "Rate by Recommendation",
      description:
        "App web de películas sobre TMDb: búsqueda en tiempo real, calificación de 1 a 5 estrellas, reseñas opcionales, watchlist personal y recomendaciones según tus guardados, con tema claro/oscuro e interfaz en inglés/español.",
    },
  }

  const renderedProjects = projects.map((project) => {
    if (!isSpanish) return project
    const translation = projectTranslations[project.title]
    return {
      ...project,
      title: translation?.title || project.title,
      description: translation?.description || project.description,
      duration: project.duration.replace("weeks", "semanas").replace("month", "mes"),
      team: project.team?.replace("people", "personas"),
    }
  })

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-sans font-bold text-xl text-primary">{isSpanish ? "Mi Portafolio" : "My Portfolio"}</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors capitalize font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="outline" size="sm" onClick={() => setLanguage(isSpanish ? "en" : "es")} className="border-primary/40">
                <Globe className="h-4 w-4 mr-2" />
                {isSpanish ? "ES" : "EN"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="mb-3">
                <Button variant="outline" size="sm" onClick={() => setLanguage(isSpanish ? "en" : "es")} className="border-primary/40">
                  <Globe className="h-4 w-4 mr-2" />
                  {isSpanish ? "Cambiar a inglés" : "Switch to Spanish"}
                </Button>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors capitalize"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/foto Tatis.png"
                alt={isSpanish ? "Foto profesional" : "Professional photo"}
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20"
              />
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-4">
              {isSpanish ? "¡Hola! Soy " : "Hello! I'm "}
              <span className="text-primary">Tatiana Vivas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              {isSpanish
                ? "Estudiante de Ingeniería de Sistemas y Ciencia de Datos, apasionada por la tecnología y las soluciones innovadoras"
                : "Systems Engineering Student & Data Scientist passionate about technology and innovative solutions"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-medium" onClick={() => scrollToSection("about")}>
                {isSpanish ? "Conoce más sobre mí" : "Learn more about me"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                {isSpanish ? "Contacto" : "Contact"}
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{isSpanish ? "Sobre mí" : "About Me"}</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Personal description */}
            <div>
              <Card className="h-full">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    {isSpanish
                      ? "Soy estudiante universitaria con alto interés en el desarrollo de software y el análisis de datos. Siempre me mantengo abierta y activa al aprendizaje de nuevas tecnologías y metodologías, y me involucro con compromiso en cada proyecto. Disfruto trabajar en equipo, asumir retos y mejorar continuamente mi perfil técnico."
                      : "University student with high interest in software development and data analysis. I always stay open and active in learning new technologies and methodologies, and I get involved with commitment in each project. I enjoy working in teams, taking on challenges, and continuously improving my technical profile."}
                  </p>
                  <p className="text-muted-foreground">
                    {isSpanish
                      ? "Mi pasión por la tecnología me ha llevado a explorar distintas áreas, desde el desarrollo web hasta la ciencia de datos, buscando siempre formas innovadoras de resolver problemas complejos y crear soluciones con impacto positivo."
                      : "My passion for technology has led me to explore different areas, from web development to data science, always seeking innovative ways to solve complex problems and create solutions that generate positive impact."}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Facts */}
            <div className="space-y-4">
              <h3 className="font-sans text-xl font-semibold mb-6">{isSpanish ? "Datos rápidos" : "Quick Facts"}</h3>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{isSpanish ? "Excelencia académica" : "Academic Excellence"}</h4>
                      <p className="text-xs text-muted-foreground">{isSpanish ? "6 reconocimientos universitarios" : "6 university recognitions"}</p>
                      <p className="text-xs text-muted-foreground">{isSpanish ? "11 reconocimientos escolares" : "11 school recognitions"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{isSpanish ? "Ingeniería de Sistemas" : "Systems Engineering"}</h4>
                      <p className="text-xs text-muted-foreground">{isSpanish ? "Graduación: junio 2026" : "Graduation June 2026"}</p>
                      <div className="mt-1">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          GPA: 4.6/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{isSpanish ? "Ciencia de Datos" : "Data Science"}</h4>
                      <p className="text-xs text-muted-foreground">{isSpanish ? "Graduación: junio 2027" : "Graduation June 2027"}</p>
                      <div className="mt-1">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          GPA: 4.7/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{isSpanish ? "Estado laboral" : "Employment Status"}</h4>
                      <p className="text-xs text-muted-foreground">{isSpanish ? "Desarrolladora freelance" : "Freelance Developer"}</p>
                      <div className="mt-1">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {isSpanish ? "Disponible para proyectos" : "Available for Projects"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{isSpanish ? "Mi recorrido" : "My Journey"}</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-sans">{isSpanish ? "Experiencia profesional" : "Professional Experience"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-sans font-semibold text-lg">Spiriwors — Frontend (PRANA)</h3>
                  <p className="text-secondary font-medium">
                    PRANA ·{" "}
                    <a
                      href="https://www.spiriwors.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      spiriwors.com
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {isSpanish
                      ? "Spiriwors es un proyecto de PRANA donde la dirección creativa debía sentirse tan intencional en el navegador como en el papel. Lideré el frontend: construyendo una experiencia coherente y responsive con Next.js, React, TypeScript y Tailwind CSS, y manteniendo interacciones ágiles durante cada iteración. Como desarrolladora frontend, mi impacto estuvo en traducir el feedback de stakeholders y del equipo creativo en componentes reutilizables, layouts sólidos y una arquitectura orientada al rendimiento que redujo retrabajo y facilitó extender la interfaz sin rehacer toda la aplicación."
                      : "Spiriwors is a PRANA project where the creative direction had to feel just as intentional in the browser as on paper. I owned the frontend: shaping a cohesive, responsive experience with Next.js, React, TypeScript, and Tailwind CSS, and keeping interactions snappy as we iterated. As the frontend developer, my impact was in translation—turning stakeholder and artistic feedback into reusable components, solid responsive layouts, and a performance-minded architecture that reduced rework and made the UI easier to extend without rewiring the whole app."}
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-sans font-semibold text-lg">{isSpanish ? "Monitora administrativa" : "Administrative Monitor"}</h3>
                  <p className="text-secondary font-medium">
                    {isSpanish
                      ? "Pontificia Universidad Javeriana • Bogotá • 2025"
                      : "Pontifical Xavierian University • Bogotá • 2025"}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {isSpanish
                      ? "Brindé apoyo técnico y de ingeniería en procesos académicos, gestioné documentación de acreditación ABET y elaboré reportes de seguimiento con herramientas de Excel."
                      : "Provided technical and engineering support in academic processes, managed ABET accreditation documentation, and developed monitoring reports with Excel tools."}
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-sans font-semibold text-lg">{isSpanish ? "Monitora académica" : "Academic Monitor"}</h3>
                  <p className="text-secondary font-medium">
                    {isSpanish
                      ? "Pontificia Universidad Javeriana • Bogotá • 2024"
                      : "Pontifical Xavierian University • Bogotá • 2024"}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {isSpanish
                      ? "Ofrecí tutorías de programación en C, C++ y Java, diseñé talleres interactivos y realicé seguimiento al progreso estudiantil con apoyo personalizado."
                      : "Provided programming tutorials in C, C++, and Java, designed interactive workshops, and monitored student progress with personalized support."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-sans">{isSpanish ? "Educación" : "Education"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-sans font-semibold text-lg">{isSpanish ? "Ciencia de Datos" : "Data Science"}</h3>
                  <p className="text-primary font-medium">
                    {isSpanish ? "Pontificia Universidad Javeriana • Graduación: 2026" : "Pontifical Xavierian University • Graduation: 2026"}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    GPA: 4.7/5
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {isSpanish
                      ? "Cursos relevantes: Introducción a la inteligencia artificial, estructuras de datos, sistemas distribuidos."
                      : "Relevant coursework: Introduction to artificial intelligence, data structures, distributed systems."}
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-sans font-semibold text-lg">{isSpanish ? "Ingeniería de Sistemas" : "Systems Engineering"}</h3>
                  <p className="text-primary font-medium">
                    {isSpanish ? "Pontificia Universidad Javeriana • Graduación: 2026" : "Pontifical Xavierian University • Graduation: 2026"}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    GPA: 4.6/5
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {isSpanish
                      ? "Cursos relevantes: Sistemas operativos, arquitectura de software, desarrollo móvil y desarrollo web."
                      : "Relevant coursework: Operating systems, software architecture, mobile development, web development."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="font-medium" asChild>
              <a href={cvHref} download={cvFileName}>
                <Download className="mr-2 h-4 w-4" />
                {isSpanish ? "Descargar CV completo" : "Download Complete CV"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{isSpanish ? "Habilidades técnicas" : "Technical Skills"}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="font-sans text-xl font-semibold text-center text-primary mb-6">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="hover:shadow-lg transition-all hover:-translate-y-1 p-4">
                      <div className="text-center">
                        <div className="mb-2 flex justify-center">
                          <img
                            src={skill.icon || "/placeholder.svg"}
                            alt={`${skill.name} icon`}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback in case the image doesn't load
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = "none"
                              const fallback = target.nextElementSibling as HTMLElement
                              if (fallback) fallback.style.display = "block"
                            }}
                          />
                          <div className="text-2xl hidden">🔧</div>
                        </div>
                        <p className="font-medium text-sm text-foreground">{skill.name}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-4">{isSpanish ? "Proyectos recientes" : "Recent Projects"}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {isSpanish
              ? "Una selección de mis trabajos más destacados en ciencia de datos y desarrollo de software"
              : "A selection of my most outstanding works in data science and software development"}
          </p>

          {renderedProjects
            .filter((project) => project.highlight)
            .map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all hover:-translate-y-2 border-primary/30 mb-12"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    {project.videoUrl && getYouTubeVideoId(project.videoUrl) && (
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(project.videoUrl)}`}
                        title={project.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Project content */}
                  <div className="p-8">
                    <CardTitle className="font-sans text-2xl mb-4 text-foreground">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project information */}
                    <div className="flex gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">📅</span>
                        <span>{project.duration} {isSpanish ? "de desarrollo" : "Delivery"}</span>
                      </div>
                      {project.team &&
                        (project.contributors && project.contributors.length > 0 ? (
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() =>
                                setOpenContributorsKey(
                                  openContributorsKey === project.title ? null : project.title,
                                )
                              }
                              className="flex items-center gap-2 hover:text-primary transition-colors"
                            >
                              <Users className="h-4 w-4 text-primary" />
                              <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform ${openContributorsKey === project.title ? "rotate-180" : ""}`}
                              />
                            </button>

                            {openContributorsKey === project.title && project.contributors && (
                              <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-3 min-w-48 z-10">
                                <div className="space-y-2">
                                  {project.contributors.map((contributor, contribIndex) => (
                                    <a
                                      key={contribIndex}
                                      href={contributor.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors text-sm"
                                    >
                                      <Github className="h-4 w-4 text-primary" />
                                      <span className="text-foreground">{contributor.name}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                          </div>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.demo && (
                        <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {isSpanish ? "Probar en vivo" : "Try it Live"}
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <a href={project.frontendRepo || project.github || "#"} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {isSpanish ? "Código fuente frontend" : "Frontend Source Code"}
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <a href={project.backendRepo || project.github || "#"} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {isSpanish ? "Código fuente backend" : "Backend Source Code"}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {renderedProjects
              .filter((project) => project.featured && !project.highlight)
              .map((project, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-sans text-xl mb-2 flex items-center gap-2">
                          {project.title}
                          <Star className="h-5 w-5 text-secondary fill-secondary" />
                        </CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Project information */}
                    {(project.duration || project.team) && (
                      <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                        {project.duration && (
                          <div className="flex items-center gap-2">
                            <span className="text-primary">📅</span>
                            <span>{project.duration} {isSpanish ? "de desarrollo" : "Delivery"}</span>
                          </div>
                        )}
                        {project.team &&
                          (project.contributors && project.contributors.length > 0 ? (
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenContributorsKey(
                                    openContributorsKey === project.title ? null : project.title,
                                  )
                                }
                                className="flex items-center gap-2 hover:text-primary transition-colors"
                              >
                                <Users className="h-4 w-4 text-primary" />
                                <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${openContributorsKey === project.title ? "rotate-180" : ""}`}
                                />
                              </button>

                              {openContributorsKey === project.title && project.contributors && (
                                <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-3 min-w-48 z-10">
                                  <div className="space-y-2">
                                    {project.contributors.map((contributor, contribIndex) => (
                                      <a
                                        key={contribIndex}
                                        href={contributor.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors text-sm"
                                      >
                                        <Github className="h-4 w-4 text-primary" />
                                        <span className="text-foreground">{contributor.name}</span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {isSpanish ? "Código" : "Code"}
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Personal Projects */}
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-center mb-4 mt-4">{isSpanish ? "Proyectos personales" : "Personal Projects"}</h3>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {isSpanish
              ? "Proyectos que desarrollo de punta a punta: frontend, datos y experiencias de usuario pulidas."
              : "Side projects I ship end-to-end—frontend tooling, data on the wire, and polished UX."}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {renderedProjects
              .filter((project) => project.personal)
              .map((project) => (
                <Card key={project.title} className="hover:shadow-xl transition-all hover:-translate-y-1 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-sans text-xl mb-2">{project.title}</CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.duration || project.team) && (
                      <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                        {project.duration && (
                          <div className="flex items-center gap-2">
                            <span className="text-primary">📅</span>
                            <span>{project.duration}</span>
                          </div>
                        )}
                        {project.team &&
                          (project.contributors && project.contributors.length > 0 ? (
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenContributorsKey(
                                    openContributorsKey === project.title ? null : project.title,
                                  )
                                }
                                className="flex items-center gap-2 hover:text-primary transition-colors"
                              >
                                <Users className="h-4 w-4 text-primary" />
                                <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                                <ChevronDown
                                  className={`h-3 w-3 transition-transform ${openContributorsKey === project.title ? "rotate-180" : ""}`}
                                />
                              </button>
                              {openContributorsKey === project.title && project.contributors && (
                                <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-3 min-w-48 z-10">
                                  <div className="space-y-2">
                                    {project.contributors.map((contributor, contribIndex) => (
                                      <a
                                        key={contribIndex}
                                        href={contributor.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-2 rounded hover:bg-muted transition-colors text-sm"
                                      >
                                        <Github className="h-4 w-4 text-primary" />
                                        <span className="text-foreground">{contributor.name}</span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{project.team} {isSpanish ? "equipo" : "Team"}</span>
                            </div>
                          ))}
                      </div>
                    )}
                    <div className="flex gap-3 flex-wrap">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            {isSpanish ? "Código" : "Code"}
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {renderedProjects
              .filter((project) => !project.featured && !project.personal)
              .map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-sans text-lg">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          {isSpanish ? "Código" : "Code"}
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Tatisvivas" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                {isSpanish ? "Ver todos mis proyectos en GitHub" : "View all my projects on GitHub"}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{isSpanish ? "Mis intereses" : "My interests"}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {personalInterests.map((interest, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={interest.image || "/placeholder.svg"}
                    alt={interest.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-sans font-semibold text-lg mb-3 text-primary">{interest.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-center mb-12">{isSpanish ? "¡Conectemos!" : "Let's Connect!"}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-sans text-xl font-semibold mb-6">{isSpanish ? "Envíame un mensaje" : "Send me a message"}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder={isSpanish ? "Tu nombre" : "Your name"} name="name" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                <Input type="email" placeholder={isSpanish ? "Tu correo" : "Your email"} name="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                <Textarea placeholder={isSpanish ? "Tu mensaje" : "Your message"} rows={5} name="message" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required />
                <Button className="w-full font-medium" type="submit" disabled={isSending}>
                  {isSending ? (isSpanish ? "Enviando..." : "Sending...") : isSpanish ? "Enviar mensaje" : "Send Message"}
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                {sendResult === "success" && (
                  <p className="text-sm text-green-600">{isSpanish ? "¡Mensaje enviado! Te responderé pronto." : "Message sent! I'll respond soon."}</p>
                )}
                {sendResult === "error" && (
                  <p className="text-sm text-red-600">{isSpanish ? "Hubo un problema. Inténtalo de nuevo." : "There was a problem. Please try again."}</p>
                )}
              </form>
            </div>

            <div>
              <h3 className="font-sans text-xl font-semibold mb-6">{isSpanish ? "Sígueme en" : "Follow me on"}</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Github className="h-6 w-6 text-primary" />
                  <span>github.com/Tatisvivas</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <span>www.linkedin.com/in/tatiana-vivas-restrepo-b23833282</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>tatis.re.11@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            {isSpanish ? "© 2025 Tatiana Vivas. Hecho con ❤️ y Next.js" : "© 2025 Tatiana Vivas. Made with ❤️ and Next.js"}
          </p>
        </div>
      </footer>
    </div>
  )
}
