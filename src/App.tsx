import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Work } from '@/pages/Work';
import { ProjectCaseStudy } from '@/pages/ProjectCaseStudy';
import { AILab } from '@/pages/AILab';
import { Teaching } from '@/pages/Teaching';
import { Experience } from '@/pages/Experience';
import { Skills } from '@/pages/Skills';
import { CVCenter } from '@/pages/CVCenter';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectCaseStudy />} />
            <Route path="/ai-lab" element={<AILab />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/cv" element={<CVCenter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;