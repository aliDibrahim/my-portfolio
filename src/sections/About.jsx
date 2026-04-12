import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <FadeIn delay={0}>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}one component at a time.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="space-y-4 text-muted-foreground">
              <p>
                I am a Frontend Web Developer with a strong focus on building modern, responsive, and user-friendly web applications. I also have foundational knowledge in backend development, allowing me to understand full-stack workflows and collaborate effectively on complete systems.
              </p>
              <p>
                I started my journey in tech while studying at the Faculty of Informatics Engineering (2019–2024). Alongside my academic studies, I began learning web development independently in 2023 and have continued improving my skills through real-world projects and freelance work.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass rounded-2xl p-6 glow-border">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not just
                  functional, but truly delightful — products that users love to
                  use and developers love to maintain."
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <FadeIn
                key={idx}
                delay={(idx + 1) * 0.1}
                className="glass p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};