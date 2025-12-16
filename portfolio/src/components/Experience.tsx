import { motion } from 'framer-motion';

export const Experience = () => {
    const experiences = [
        {
            role: 'Senior Data Engineer',
            company: 'Piraeus Bank',
            period: '2024 - Present',
            desc: "Created and managed a central repository from scratch, unifying many of the bank's internal data sources from different divisions into Azure Databricks, creating a one stop shop for all things related to Data Science projects & Analytics. Leveraging Azure and Databricks to drive digital transformation and enable data-driven decision making.",
            logo: '/logos/piraeus_favicon.ico',
        },
        {
            role: 'Data Engineer',
            company: 'PPC S.A (ΔΕΗ)',
            period: '2023 - 2024',
            desc: 'Contributed to research projects involving Big Data, Machine Learning, and AI. Built data processing pipelines for scientific datasets.',
            logo: '/logos/ppc.png',
        },
        {
            role: 'Digital Marketing Analyst',
            company: 'WIND Hellas (now NOVA)',
            period: '2020 - 2022',
            desc: 'Developed and maintained large-scale data ingestion systems. Optimized SQL queries for performance improvements by 40%.',
            logo: '/logos/wind.jpg',
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
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        After being part of some of the largest corporations in Greece, I can effectively plan & build scalable solutions for any type of business.
                    </p>
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
                            <div className="absolute -left-6 top-0 bg-background p-1 rounded-full">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-800 shadow-lg shadow-primary/20 overflow-hidden">
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-400">{exp.company}</h4>
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
