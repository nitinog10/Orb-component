import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nitinog10",
    username: "nitinog10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    username: "Connect on LinkedIn",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nitiniszod10@gmail.com",
    username: "nitiniszod10@gmail.com",
  },
]

export function Contact() {
  return (
    <section className="relative py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Open to collaborations, exciting AI projects, and innovative opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 text-center"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{link.label}</h3>
                  <p className="text-sm text-muted-foreground break-all">{link.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Nitin Kumar Mishra. Built with passion for AI and innovation.</p>
        </div>
      </div>
    </section>
  )
}
