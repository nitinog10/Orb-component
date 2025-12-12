"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-32 bg-background/95 backdrop-blur-md border-y border-[#2a2bf7]/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a2bf7]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-balance bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] bg-clip-text text-transparent">
              About
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mb-8 rounded-full" />
          </div>
          <div
            className={`space-y-6 text-base sm:text-lg leading-relaxed text-foreground/85 font-body transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <p className="text-pretty">
              I am an AI Developer and Generative AI Engineer, passionate about building intelligent, scalable, and
              real-world AI systems. My expertise spans across Agentic AI pipelines, RAG architectures, and Model
              Context Protocol (MCP) servers.
            </p>
            <p className="text-pretty">
              Currently working as AI Developer & Technical Operations at HARON INDIA and AI Developer Intern at
              TheTechBus, I have consistently delivered high-impact AI projects and led teams in building
              production-level applications using modern AI stacks.
            </p>
            <p className="text-pretty">
              My mission is to build next-gen AI agents, powerful automation systems, and real-world ML applications
              that solve large-scale problems. I specialize in Computer Vision, Reinforcement Learning, LangChain,
              LangFlow, and LangGraph.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
