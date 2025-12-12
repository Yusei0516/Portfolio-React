import './App.css'
import { Header } from './components/Header';
import { Section } from './components/Section';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />

      <main className='main'>
        <Section id="about" title="About">
          <About />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects">
          <Projects />
        </Section>

        <Section id="articles" title="Articles">
          <Articles />
        </Section>

        <Footer />
      </main>
    </div>
  );
};

export default App;
