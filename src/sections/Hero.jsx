import { ArrowRight, ChevronDown, Download } from "lucide-react";
import HeroImage from "../../public/hero-bg.jpg";
import { Button } from "../components/Button";
import Logo from "../../public/logo.png";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
// ---------------------------
// skills list
const skills = [
  "HTML",
  "CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "SASS",
  "Bootstrap",
  "Material UI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
];

// ---------------------------
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* backgound */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>
      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={i}
          ></div>
        ))}
      </div>

      {/* content */}
      <div className=" container mx-auto px-6 pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - text content*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer + Frontend Developer
              </span>
            </div>
            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">modern</span>
                <br />
                web experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>


              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Ali Ibrahim — a frontend web developer specializing in React, Next.js, and TypeScript. I build responsive, user-focused applications with clean design and scalable architecture.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href="/cv.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground ">Follow:</span>
              {[
                { icon: FiGithub, href: "https://github.com/aliDibrahim" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/ali-d-ibraheem/" },
                { icon: FiFacebook, href: "https://www.facebook.com/ali.ibraheem.35513" },
              ].map((social, index) => (
                <a
                  href={social.href}
                  key={index}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column - profile image*/}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* start glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow" />
              {/* end glow effect */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <div className="realtive ">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
                  <img
                    src={Logo}
                    alt="profile image"
                    className="w-full aspect-4/5 object-cover rounded-2xl"
                  />
                </div>
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Availabe for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 flex items-center gap-1.5">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground ">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors ">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800 z-100"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group "
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
