import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Experience } from './pages/Experience';
import { Experiences } from './pages/Experiences';
import { Formations } from './pages/Formations';
import { Home } from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';
// import './scss/Global.scss';
// import './scss/Link.scss';
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
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Skills} path='/skills' />
            <Route component={Experience} path='/experiences/:id' />
            <Route component={Experiences} path='/experiences' />
            <Route component={Project} path='/projects/:id' />
            <Route component={Projects} path='/projects' />
            <Route component={Formation} path='/formations/:id' />
            <Route component={Formations} path='/formations/' />
          </Switch>
        </BrowserRouter>
      </Layout>
    </Theme>
  );
}

export default App;
