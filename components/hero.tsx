"use client"

import { ArrowDown, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Globe } from "./Globe"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />

      <div className="orbital-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 parallax-layer">
        <Globe />
      </div>

      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <div className="space-y-6 md:space-y-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-balance leading-[1.05] tracking-tight">
            Nitin Kumar Mishra
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-balance">
            <span className="bg-gradient-to-r from-[#2a2bf7] via-[#00b7ff] to-[#8b49ff] bg-clip-text text-transparent">
              AI Developer
            </span>{" "}
            |{" "}
            <span className="bg-gradient-to-r from-[#8b49ff] via-[#c9b5ff] to-[#2a2bf7] bg-clip-text text-transparent">
              Generative AI Engineer
            </span>
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2a2bf7]/20 to-[#8b49ff]/20 border border-[#2a2bf7]/30">
            <div className="w-2 h-2 rounded-full bg-[#00b7ff] animate-pulse" />
            <span className="text-sm sm:text-base font-medium text-[#c9b5ff]">NASA Space Apps Winner</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed font-body">
            Building intelligent, scalable AI systems with RAG architectures, agentic pipelines, and next-generation
            machine learning solutions
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="group text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-[#2a2bf7] to-[#8b49ff] hover:from-[#2a2bf7]/90 hover:to-[#8b49ff]/90 transition-all duration-300 shadow-lg shadow-[#2a2bf7]/30 hover:shadow-xl hover:shadow-[#2a2bf7]/40"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base sm:text-lg px-8 py-6 border-[#00b7ff]/40 hover:border-[#00b7ff] hover:bg-[#00b7ff]/10 transition-all duration-300 bg-transparent hover:shadow-lg hover:shadow-[#00b7ff]/20"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-6 items-center justify-center pt-6">
            <a
              href="mailto:nitinkmishra010@gmail.com"
              className="text-foreground/60 hover:text-[#00b7ff] transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/nitinog10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-[#00b7ff] transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nitin-kumar-mishra-ab3326275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-[#00b7ff] transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#00b7ff]/50 flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-3 bg-[#00b7ff]/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
