import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Experience } from './pages/Experience';
import { Experiences } from './pages/Experiences';
import { Formations } from './pages/Formations';
import { Home } from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';

import { Layout } from './layout/Layout';
import { Formation } from './pages/Formation';
import Skills from './pages/Skills';
import Header from './components/header/Header';
import Theme from './themes/Theme';

function App() {
  const [, setGLang] = useState('FR');

  return (
    <Theme>
      <Layout>
        <BrowserRouter>
          <Header onChangeLang={setGLang} />
          <Routes>
            <Route Component={Home} path='/' />
            <Route Component={Skills} path='/skills' />
            <Route Component={Experience} path='/experiences/:id' />
            <Route Component={Experiences} path='/experiences' />
            <Route Component={Project} path='/projects/:id' />
            <Route Component={Projects} path='/projects' />
            <Route Component={Formation} path='/formations/:id' />
            <Route Component={Formations} path='/formations/' />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Theme>
  );
}

export default App;
