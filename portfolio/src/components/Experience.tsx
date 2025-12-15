
import { motion } from 'framer-motion';
import { Network, Code2, Briefcase, Database } from 'lucide-react';

export const Experience = () => {
    const experiences = [
        {
            role: 'Senior Data Engineer',
            company: 'DataTech Solutions [Placeholder]',
            period: '2022 - Present',
            desc: 'Leading the migration of legacy data warehouses to Databricks Lakehouse. Designing automated ETL pipelines using PySpark and Azure Data Factory. Mentoring junior engineers.',
            icon: <Network />,
        },
        {
            role: 'Data Engineer',
            company: 'Cloud Systems Inc. [Placeholder]',
            period: '2019 - 2022',
            desc: 'Developed and maintained large-scale data ingestion systems. Optimized SQL queries for performance improvements by 40%. Implemented CI/CD workflows for data pipelines.',
            icon: <Database />,
        },
        {
            role: 'Software Engineer',
            company: 'Tech Innovators [Placeholder]',
            period: '2017 - 2019',
            desc: 'Built backend services and APIs for real-time data processing. Collaborated with data scientists to productize machine learning models.',
            icon: <Code2 />,
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

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-lg text-gray-400 mb-3">{exp.company}</h4>
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
