import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "../components/FadeIn";

const testimonials = [
    {
        quote:
            "Ali is a highly skilled frontend developer who consistently delivers clean, efficient, and user-focused solutions. His attention to detail and commitment to quality really stand out.",
    },
    {
        quote:
            "Working with Ali was a great experience. He quickly understood our requirements and translated them into a smooth, well-structured application.",
    },
    {
        quote:
            "Ali has a strong understanding of modern web technologies and knows how to build interfaces that are both visually appealing and highly functional.",
    },
    {
        quote:
            "Reliable, professional, and easy to communicate with — Ali delivers high-quality work and always strives to improve and optimize his solutions."
    },
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/2 w-100 h-100 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />
            <div
                className="container mx-auto px-6 relative z-10"
            >
                {/* Section Header */}
                <div
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <FadeIn delay={0}>

                        <span
                            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
                        >
                            What People Say
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>

                        <h2
                            className="text-4xl md:text-5xl font-bold mt-4 mb-6  text-secondary-foreground"
                        >
                            Kind words from{" "}
                            <span
                                className="font-serif italic font-normal text-white"
                            >
                                amazing people.
                            </span>
                        </h2>
                    </FadeIn>

                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Main Testimonial */}
                        <FadeIn delay={0.2} className="glass p-8 rounded-3xl md:p-12 glow-border">
                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                "{testimonials[activeIdx].quote}"
                            </blockquote>

                            <div>
                                <div className="font-semibold">
                                    {testimonials[activeIdx].author}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {testimonials[activeIdx].role}
                                </div>
                            </div>
                        </FadeIn>


                        {/* Testimonials Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                            >
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                                            ? "w-8 bg-primary"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
