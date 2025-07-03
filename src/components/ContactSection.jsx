import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react"
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

function ContactSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false); // เพิ่ม state

    const handleSummit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsAvailable(false); // ปิดปุ่ม

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    }

    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Let’s connect and build something great together — message me anytime.
                </p> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg">
                    <div className="space-y-8 flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>  
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a 
                                        href="mailto:natsilprasert@gamil.com"
                                        target="_blank" 
                                        className="text-muted-foreground hover-text-primary transition-colors"
                                    >
                                        natsilprasert@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>  
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a 
                                        href="tel:+66889913347"
                                        target="_blank"
                                        className="text-muted-foreground hover-text-primary transition-colors"
                                    >
                                        088-991-3347
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Instagram className="h-6 w-6 text-primary"/>  
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Instagram</h4>
                                    <a 
                                        href="https://www.instagram.com/natsilpnotnatslip/"
                                        target="_blank"
                                        className="text-muted-foreground hover-text-primary transition-colors"
                                    >
                                        natsilpnotnatslip
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/nat-silprasert-893149365/" target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.facebook.com/nat.silp.98757" target="_blank"> 
                                    <Facebook/>
                                </a>
                                <a href="https://www.instagram.com/natsilpnotnatslip/" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://github.com/NatSilprasert" target="_blank">
                                    <Github/>
                                </a>
                            </div>             
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSummit}>
                            <div>
                                <label htmlFor="name" className="block text-left text-sm fony-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter Your Name..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-left text-sm fony-medium mb-2">Your Email</label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com..."
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-left text-sm fony-medium mb-2">Your Message</label>
                                <textarea 
                                    type="text" 
                                    id="message" 
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter Message..."
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting || !isAvailable}
                                className={cn(
                                    "px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.8)] w-full flex items-center justify-center gap-2",
                                    (!isAvailable || isSubmitting) && "opacity-60 cursor-not-allowed"
                                )}
                            >
                                {isAvailable ? isSubmitting ? "Sending..." : "Send Message" : "Not Available"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div> 
            </div>    
        </section>
    )
}

export default ContactSection