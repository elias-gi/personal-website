
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cloud, Code } from 'lucide-react';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-semibold tracking-wider text-lg">
                            Hi, I'm Ilias Giannakos, a Senior Data Engineer
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight text-white"
                    >
                        Helping Organizations<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            trust their data and make actionable decisions
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg mb-8 max-w-lg"
                    >
                        I specialize in transforming complex data into actionable insights using Databricks, Azure, and modern Big Data technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-700 text-white font-semibold hover:bg-white/10 transition-all"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Right Content - Abstract Tech Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/10 backdrop-blur-sm p-8 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="flex justify-between items-start">
                                <Database className="text-primary w-12 h-12" />
                                <div className="space-y-2">
                                    <div className="h-2 w-16 bg-white/20 rounded-full" />
                                    <div className="h-2 w-8 bg-white/20 rounded-full ml-auto" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Cloud className="text-secondary w-5 h-5" />
                                        <span className="text-sm text-gray-400">Azure Data Factory</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                                        <div className="bg-secondary h-1.5 rounded-full w-3/4" />
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-1.5">
                                        <div className="bg-primary h-1.5 rounded-full w-1/2" />
                                    </div>
                                </div>
                                <div className="h-32 rounded-xl bg-white/5 border border-white/10 p-4 transform translate-x-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Code className="text-accent w-5 h-5" />
                                        <span className="text-sm text-gray-400">Databricks PySpark</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-white/10 rounded-full" />
                                        <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
