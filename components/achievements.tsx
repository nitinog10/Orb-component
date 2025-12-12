"use client"

import { Trophy, Award, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    icon: Trophy,
    title: "NASA Space Apps Challenge",
    badge: "Global Winner",
    description: "Built a technically advanced AI system recognized as one of the best global solutions",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    icon: Award,
    title: "National-Level Ideathon",
    badge: "Winner",
    description: "First place in national competition for innovative AI solutions",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
  {
    icon: Target,
    title: "Top 5 Finalist",
    badge: "9+ Hackathons",
    description: "RNTU Binary Battle, LakeCity Hack 2.0, and multiple hackathon finalist positions",
    gradient: "from-[#8b49ff] to-[#c9b5ff]",
  },
]

export function Achievements() {
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
    <section ref={sectionRef} className="relative py-20 sm:py-32 bg-card/40 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2bf7]/5 via-transparent to-[#8b49ff]/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2a2bf7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b49ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-balance bg-gradient-to-r from-[#00b7ff] via-[#2a2bf7] to-[#8b49ff] bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00b7ff] via-[#2a2bf7] to-[#8b49ff] mb-4 rounded-full" />
          <p className="text-lg sm:text-xl text-foreground/80 text-pretty font-body">
            Recognized excellence in AI development and innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-card group p-6 sm:p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
                <achievement.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#00b7ff] group-hover:text-[#2a2bf7] transition-colors duration-300 relative z-10 group-hover:scale-110 transform group-hover:drop-shadow-[0_0_12px_rgba(42,43,247,0.8)]" />
              </div>
              <div
                className={`inline-block px-4 py-1.5 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 text-[#c9b5ff] text-sm font-medium rounded-full mb-4 border border-[#2a2bf7]/30`}
              >
                {achievement.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-balance text-foreground">
                {achievement.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-pretty text-sm sm:text-base font-body">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
