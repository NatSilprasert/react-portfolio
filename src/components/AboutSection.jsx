import { Briefcase, Code, User } from "lucide-react"

function AboutSection() {
    return(
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">A Computer Engineering Student & Passionate Developer</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto alias similique sunt aspernatur ea maiores facilis voluptates ducimus quibusdam, dolores minima dignissimos repellat veritatis eos.
                        </p>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora adipisci saepe aspernatur sunt provident ipsum eos voluptate molestiae rerum repellendus.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] transform scale-100 hover:scale-105">
                                Get In Touch
                            </a>
                            <a href="#cv" className="px-6 py-2 rounded-full bg-none text-primary border border-primary font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.8)] hover:bg-white transform scale-100 hover:scale-105">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web development</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dignissimos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UX/UI Design</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dignissimos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dignissimos.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection