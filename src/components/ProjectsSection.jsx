import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "TCOS × LOVEiS Cafe Drink Service",
        description: "Website for TCOS × LOVEiS cafe, enabling drink orders.",
        image: "/projects/project1.png",
        tags: ["Next.js", "TypeScript", "MongoDB"],
        demoUrl: "https://stagedrinks.vercel.app/",
        githubUrl: "https://github.com/NatSilprasert/loveis-drink-server-promptpay",
    },
    {
        id: 2,
        title: "TCOS Merch Website",
        description: "E-commerce site selling TCOS merchandise, with authentication, cart, admin dashboard.",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "MongoDB"],
        demoUrl: "https://merchtcos.vercel.app/",
        githubUrl: "https://github.com/NatSilprasert/tcos-merch-project",
    },
    {
        id: 3,
        title: "GTA VI Landing Page Clone",
        description: "GTA VI landing clone with parallax, scroll-synced video animations using GSAP.",
        image: "/projects/project3.png",
        tags: ["Next.js", "TailwindCSS", "GSAP"],
        demoUrl: "https://gtaviclone.vercel.app",
        githubUrl: "https://github.com/NatSilprasert/gta-vi-landing",
    },
]

function ProjectsSection() {
    return(
        <section id="projects" className="py-24 px-4 relative"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                     Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A collection of projects I’ve built, designed, and developed myself.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items center">
                                    <div className="flex space-x-3">
                                        <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
 
                <div className="text-center mt-12">
                    <a 
                        className="w-fit flex items-center mx-auto gap-2 transition-all hover:text-primary"
                        target="_blank"
                        href="https://github.com/NatSilprasert"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
