const projects = [
  {
    title: "MindMapBhopal",
    subtitle: "AI Urban Planning Simulator",
    tech: ["AI Agents", "ML Models", "GIS", "Simulation", "Python"],
    description:
      "Large-scale AI-driven urban planning engine simulating traffic congestion, utility load distribution, population density, heatmaps & pollution. Built using ML-based prediction models with agentic simulation loops generating 3D visual planning outputs.",
    role: "Lead AI Architect - Built ML models, simulation logic, and visualization pipeline",
  },
  {
    title: "Bhopal Beyond Time",
    subtitle: "AI + VR Tourism Reconstruction",
    tech: ["ML Audio Models", "Vision AI", "VR", "360° Rendering"],
    description:
      "Full AI-powered VR experience narrating the story of Bhopal across past, present, good future, and bad future. Features emotion-based AI voiceovers, scene enhancement using ML, and live question-answering inside VR.",
    role: "Built AI narration engine, ML scene adaptation, and interaction logic",
  },
  {
    title: "Real-Time Facial Emotion Recognition",
    subtitle: "Deep Learning Computer Vision System",
    tech: ["CNN", "TensorFlow", "OpenCV"],
    description:
      "Production-ready deep learning model detecting facial emotions in real-time. Classifies 7 emotion categories using custom CNN trained on FER datasets. Runs with high FPS using OpenCV optimization with heatmaps and confidence scores.",
    role: "Model training, optimization, and deployment",
  },
  {
    title: "Credit Risk Prediction System",
    subtitle: "Ensemble ML Models",
    tech: ["Random Forest", "XGBoost", "Logistic Regression", "Pandas"],
    description:
      "ML system for financial institutions to predict loan defaults. Includes automated feature engineering, handling imbalanced data (SMOTE), model stacking, and hyperparameter optimization. Achieved 92% ROC-AUC.",
    role: "Designed full ML pipeline, API deployment, and model evaluation",
  },
  {
    title: "ReWear",
    subtitle: "AI-Based Sustainable Exchange Platform",
    tech: ["Firebase", "ML Recommendations", "Python"],
    description:
      "Sustainability platform with clothing exchange, ML similarity & recommendation system, usage prediction, and carbon impact calculator.",
    role: "Created ML recommendation engine, built frontend, and integrated backend",
  },
]

export function Projects() {
  return (
    <section className="relative py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mb-4" />
          <p className="text-xl text-muted-foreground">High-impact AI systems and production-level applications</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-accent">
                  Your Role: <span className="text-foreground">{project.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
