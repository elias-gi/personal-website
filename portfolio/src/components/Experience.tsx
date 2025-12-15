import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
    const experiences = [
        {
            role: 'Senior Data Engineer',
            company: 'Piraeus Bank',
            period: '2023 - Present', // Estimated start based on "Senior" title, user to verify
            desc: 'Architecting and maintaining enterprise-grade data platforms. Leveraging Azure and Databricks to drive digital transformation and enable data-driven decision making.',
            logo: 'https://logo.clearbit.com/piraeusbank.gr',
        },
        {
            role: 'Data Engineer',
            company: 'PPC S.A (ΔΕΗ)',
            period: '2019 - 2023', // Estimated, user to verify
            desc: 'Contributed to research projects involving Big Data, Machine Learning, and AI. Built data processing pipelines for scientific datasets.',
            logo: 'https://logo.clearbit.com/demokritos.gr',
        },
        {
            role: 'Digital Marketing Analyst',
            company: 'WIND Hellas (now NOVA)',
            period: '2017 - 2019',
            desc: 'Developed and maintained large-scale data ingestion systems. Optimized SQL queries for performance improvements by 40%.',
            logo: '', // Placeholder
        }
    ];

    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-semibold uppercase tracking-wider text-sm">Career Path</span>
                    <h2 className="text-4xl font-bold mt-2 text-white">Professional Experience</h2>
                </motion.div>

                <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-3 top-0 bg-background p-1">
                                <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-full text-white shadow-lg shadow-primary/20">
                                    <Briefcase size={16} />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    {exp.logo && (
                                        <img
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            className="w-12 h-12 rounded-lg bg-white object-contain p-1"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-lg text-gray-400">{exp.company}</h4>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {exp.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
