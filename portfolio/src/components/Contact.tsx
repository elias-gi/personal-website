import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        if (!form.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                form.current?.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
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
                        Whether you have a project proposal, a question about my work, or just want to say hi, feel free to reach out.
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
                                <a href="mailto:ilias.giannakos@outlook.com" className="text-gray-400 hover:text-white transition-colors">ilias.giannakos@outlook.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                            <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/ilias-giannakos/" className="text-gray-400 hover:text-white transition-colors">Connect with me</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-gray-800 hover:border-primary/30 transition-colors">
                            <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">GitHub</h3>
                                <a href="https://github.com/elias-gi" className="text-gray-400 hover:text-white transition-colors">Check my repos</a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 bg-surface/50 p-8 rounded-2xl border border-gray-800"
                        onSubmit={sendEmail}
                    >
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Name</label>
                            <input name="user_name" required type="text" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Email</label>
                            <input name="user_email" required type="email" className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your_email@email.com" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-2">Message</label>
                            <textarea name="message" required className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary h-32 resize-none transition-colors" placeholder="How can I help you?"></textarea>
                        </div>

                        {status.message && (
                            <div className={`p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>Sending... <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
