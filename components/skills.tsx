const skillCategories = [
  {
    title: "Artificial Intelligence",
    skills: [
      "Deep Learning (CNN, RNN, Attention Models)",
      "Computer Vision & OpenCV",
      "Reinforcement Learning",
      "ML Algorithms (Regression, Clustering, Ensembles)",
    ],
  },
  {
    title: "Generative AI",
    skills: ["RAG Systems", "LangChain, LangFlow, LangGraph", "Prompt Engineering", "Fine-tuning LLMs"],
  },
  {
    title: "Agentic AI",
    skills: [
      "Multi-agent pipelines",
      "Autonomous AI systems",
      "AI workflow orchestration",
      "Intelligent simulation agents",
    ],
  },
  {
    title: "MCP & Development",
    skills: [
      "Model Context Protocol servers",
      "Custom IDE tools",
      "Automation systems",
      "Developer-focused AI utilities",
    ],
  },
  {
    title: "Tech Stack",
    skills: [
      "Python, C++, Kotlin",
      "TensorFlow, PyTorch",
      "Docker, Firebase, Google Cloud",
      "REST APIs, Web Integrations",
    ],
  },
]

export function Skills() {
  return (
    <section className="relative py-32 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mb-4" />
          <p className="text-xl text-muted-foreground">Comprehensive expertise across the AI and ML ecosystem</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-muted-foreground leading-relaxed flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
