import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react"
import { cn } from "../lib/utils";

function HeroSection() {
    const [showScrollHint, setShowScrollHint] = useState(true);
    const [showHintDom, setShowHintDom] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowHintDom(true), 1000);
        return () => clearTimeout(timer);
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollHint(window.scrollY < 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nat</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2"> Silprasert</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 lg:w-4/5">
                        A Full Stack Developer who passionate about self-improvement, business, and tech innovation.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transform scale-95 hover:scale-105"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 animate-fade-in-delay-4">
                {showHintDom && (
                    <div
                        className={cn(
                            "transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 animate-bounce",
                            showScrollHint ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                    >
                        <span className="text-sm text-muted-foreground"> Scroll </span>
                        <ArrowDown className="h-5 w-5 text-primary"/>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection