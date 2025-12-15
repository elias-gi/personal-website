
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Get in Touch</span>
                    <h2 className="text-4xl font-bold mt-2 text-white">Let's Work Together</h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Whether you have a question about my work, a project proposal, or just want to say hi, feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Email Me</h3>
                                <a href="mailto:ilias@example.com" className="text-gray-400 hover:text-white transition-colors">ilias@example.com [Placeholder]</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                            <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">LinkedIn</h3>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Connect with me</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                            <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">GitHub</h3>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Check my repos</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 bg-surface/50 p-8 rounded-2xl border border-gray-800"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Name</label>
                            <input type="text" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Email</label>
                            <input type="email" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Message</label>
                            <textarea className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary h-32 resize-none transition-colors" placeholder="How can I help you?"></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
