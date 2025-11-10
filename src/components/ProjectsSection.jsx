import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 8,
        title: "CuClub",
        description: "A platform to help students in Chulalongkorn University discover and track campus events easily.",
        image: "/projects/project8.png",
        tags: ["TypeScript", "tRPC", "PostgreSQL"],
        demoUrl: "",
        githubUrl: "https://github.com/eventfinderthnc/eventfinder",
    },
    {
        id: 7,
        title: "Pokemopoly Game",
        description: "turn-based digital board game using Java and JavaFX, applying core OOP principles for clean and modular design.",
        image: "/projects/project7.png",
        tags: ["Java", "JavaFX", "OOP"],
        demoUrl: "",
        githubUrl: "https://github.com/NatSilprasert/2110215_prog_meth",
    },
    {
        id: 6,
        title: "PromptLaew - AI Image Generator Platform",
        description: "AI platform that integrates an LLM to generate and share images from trending and user-created prompts.",
        image: "/projects/project6.png",
        tags: ["LLM", "JavaScript", "JWT"],
        demoUrl: "",
        githubUrl: "https://github.com/NatSilprasert/promptleaw",
    },
    {
        id: 5,
        title: "Ticket Booking App",
        description: "fully functional cross-platform ticket booking app using React Native and Go with GORM for database management.",
        image: "/projects/project5.png",
        tags: ["React Native", "Golang", "Docker"],
        demoUrl: "",
        githubUrl: "https://github.com/NatSilprasert/ticket_booking_app",
    },
    {
        id: 4,
        title: "Awwwards Winning Website Clone",
        description: "A clone of website that has won an Awwwards Site built with React, TailwindCSS and GSAP.",
        image: "/projects/project4.png",
        tags: ["React", "TypeScript", "GSAP"],
        demoUrl: "https://spyltclone.vercel.app",
        githubUrl: "https://github.com/NatSilprasert/gsap-awwwards",
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
    {
        id: 2,
        title: "TCOS × LOVEiS Cafe Drink Service",
        description: "Website for TCOS × LOVEiS cafe, enabling drink orders.",
        image: "/projects/project1.png",
        tags: ["Next.js", "TypeScript", "MongoDB"],
        demoUrl: "https://stagedrinks.vercel.app/",
        githubUrl: "https://github.com/NatSilprasert/loveis-drink-server-promptpay",
    },
    {
        id: 1,
        title: "TCOS Merch Website",
        description: "E-commerce site selling TCOS merchandise, with authentication, cart, admin dashboard.",
        image: "/projects/project2.png",
        tags: ["React", "TailwindCSS", "MongoDB"],
        demoUrl: "https://merchtcos.vercel.app/",
        githubUrl: "https://github.com/NatSilprasert/tcos-merch-project",
    },
    {
        id: 0,
        title: "MERN E-Commerce",
        description: "A Full Stack E-commerce Website using React, Node.js, Express and MongoDB.",
        image: "/projects/project0.png",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "https://mern-e-commerce-project-natsilps-projects.vercel.app",
        githubUrl: "https://github.com/NatSilprasert/MERN-ecommerce-project",
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
                    A collection of projects I have built and contributed to.
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
