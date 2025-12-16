import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import TextCursor from './components/TextCursor';
import LogoLoop from './components/LogoLoop';
import { SiDocker, SiDatabricks, SiGithub, SiApachespark, SiReact, SiTypescript, SiPython, SiPostgresql, SiTerraform } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';

const techLogos = [
  { node: <SiDatabricks />, title: "Databricks", href: "https://databricks.com" },
  { node: <VscAzureDevops />, title: "Azure DevOps", href: "https://azure.microsoft.com/en-us/products/devops" },
  { node: <SiApachespark />, title: "Apache Spark", href: "https://spark.apache.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiTerraform />, title: "Terraform", href: "https://www.terraform.io" },
];

function App() {
  return (
    <TextCursor text='📈'>
      <Layout>
        <Hero />
        <div className="py-10 bg-background/50 border-y border-white/5">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={48}
            gap={60}
            pauseOnHover
            fadeOut
            className="opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <About />
        <Experience />

        <Contact />
      </Layout>
    </TextCursor>
  );
}

export default App;

/**#image="/logos/test.png"
<Projects />  */