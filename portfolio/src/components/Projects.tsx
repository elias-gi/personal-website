
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
    const projects = [
        {
            title: 'Cloud Data Warehouse Migration',
            desc: 'Migrated 50TB+ of data from on-premise Oracle to Azure Databricks. Implemented Delta Lake for ACID transactions and optimized query performance by 60%.',
            tags: ['Azure', 'Databricks', 'Python', 'SQL', 'Delta Lake'],
            links: { github: '#', demo: '#' },
            image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' // Generic tech image
        },
        {
            title: 'Real-time Analytics Pipeline',
            desc: 'Built a streaming pipeline using Kafka and Spark Structured Streaming to process IoT sensor data. Dashboarding with PowerBI for real-time monitoring.',
            tags: ['Kafka', 'Spark', 'Streaming', 'PowerBI', 'Scala'],
            links: { github: '#', demo: '#' },
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'Automated CI/CD for Data',
            desc: 'Designed a comprehensive CI/CD solution for data pipelines using GitHub Actions, Terraform and Databricks Asset Bundles, reducing deployment time by 80%.',
            tags: ['GitHub Actions', 'Terraform', 'DevOps', 'Docker'],
            links: { github: '#', demo: '#' },
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Portfolio</span>
                    <h2 className="text-4xl font-bold mt-2 text-white">Featured Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-background border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.github} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.links.demo} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface border border-gray-700 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
