
import { motion } from 'framer-motion';
import { Server, Database, GitBranch, Terminal, Cloud, Layers } from 'lucide-react';

export const About = () => {
    const skills = [
        { name: 'Data Engineering', icon: <Database />, desc: 'ETL/ELT pipelines, Data Warehousing, Data Modeling' },
        { name: 'Big Data', icon: <Server />, desc: 'Databricks, Spark, Hadoop ecosystem' },
        { name: 'Cloud Architecture', icon: <Cloud />, desc: 'Azure, AWS, Scalable infrastructure' },
        { name: 'DevOps & CI/CD', icon: <GitBranch />, desc: 'GitHub Actions, Jenkins, Terraform, Docker' },
        { name: 'Scripting', icon: <Terminal />, desc: 'Python, Scala, SQL, Bash' },
        { name: 'System Design', icon: <Layers />, desc: 'Microservices, Event-driven architecture' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="about" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Me</span>
                    <h2 className="text-4xl font-bold mt-2 text-white">Engineering Data Excellence</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a Senior Data Engineer based in Greece, specializing in building robust data platforms and scalable architectures.
                            My journey in tech involves deeply understanding the entire data lifecycle—from ingestion to actionable insights.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With extensive experience in Databricks and Azure, I bridge the gap between complex data problems and efficient operational solutions.
                            I am passionate about automating workflows, optimizing performance, and implementing reliable CI/CD pipelines.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                variants={item}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                            >
                                <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
                                    {skill.icon}
                                </div>
                                <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                                <p className="text-sm text-gray-400">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
