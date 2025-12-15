import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import TextCursor from './components/TextCursor';

function App() {
  return (
    <TextCursor text='📈'>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </TextCursor>
  );
}

export default App;

/**#image="/logos/test.png"*/