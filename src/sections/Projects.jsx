import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "EduExamin.com",
    description:
      "Educational platform for creating and practicing exams using MCQ and True/False questions.",
    image: "/projects/project-1.PNG",
    tags: ["React", "Tailwind CSS", "PHP", "Laravel", "Mysql"],
    link: "https://eduexamin.com",
    github: "",
  },
  {
    title: "Invoice Manager",
    description:
      "Custom invoice generation system developed for a client that allows him to create and manage invoices with a user-friendly interface.",
    image: "/projects/project-2.PNG",
    tags: ["React", "CSS", "PHP", "Laravel", "Mysql"],
    link: "",
    github: "",
  },
  {
    title: "Link Library",
    description:
      "A full-stack web application for organizing and managing links, custom icons, and group categorization.",
    image: "/projects/project-3.PNG",
    tags: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/aliDibrahim/link-library",
  },
  {
    title: "Landing page",
    description:
      "A modern React landing page built with Vite and Tailwind CSS. This project includes reusable UI sections.",
    image: "/projects/project-4.PNG",
    tags: ["React", "tailwind CSS", "Vite"],
    link: "https://landing-page-sand-chi-31.vercel.app/",
    github: "https://github.com/aliDibrahim/landing-page",
  },
  {
    title: "Dashboard",
    description:
      "A modern admin dashboard website built with React, Vite, Tailwind CSS, and Recharts.",
    image: "/projects/project-5.PNG",
    tags: ["React", "tailwind CSS", "Vite", "Recharts"],
    link: "https://dashboard-ivory-iota-53.vercel.app/",
    github: "https://github.com/aliDibrahim/Dashboard",
  },
  {
    title: "Digital Sanctuary",
    description:
      "A modern prayer timetable application built with React and Vite. It offers prayer time tracking, Qibla direction, a daily Tasbih counter, PDF export, language support, and a clean mobile-friendly UI.",
    image: "/projects/project-6.PNG",
    tags: ["React", "tailwind CSS", "Vite"],
    link: "https://the-digital-sanctuary-phi.vercel.app/",
    github: "https://github.com/aliDibrahim/The-Digital-Sanctuary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <FadeIn delay={0}>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make an impact.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn
              key={idx}
              delay={(idx + 1) * 0.1}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                  bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                  )}

                  {!project.link && !project.github && (
                    <span className="px-4 py-2 rounded-full bg-background  border-2 border-primary text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      Private client
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                    group-hover:text-primary group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/aliDibrahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedBorderButton>
                GitHub repo
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
