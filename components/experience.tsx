import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "AI Developer & Technical Operations",
    company: "HARON INDIA",
    period: "Current",
    description:
      "Leading AI development initiatives and technical operations, building production-level AI applications and managing technical infrastructure.",
  },
  {
    icon: Briefcase,
    title: "AI Developer Intern",
    company: "TheTechBus",
    period: "Current",
    description:
      "Developing cutting-edge AI solutions, implementing machine learning models, and contributing to innovative AI projects.",
  },
  {
    icon: GraduationCap,
    title: "Head Alumni",
    company: "Oriental Group of Institutes",
    period: "Present",
    description:
      "Managing technical operations and community engagement, fostering connections between alumni and current students.",
  },
]

export function Experience() {
  return (
    <section className="relative py-32 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 bg-primary mb-4" />
          <p className="text-xl text-muted-foreground">Professional journey in AI development and leadership</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <exp.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
