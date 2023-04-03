import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Experiences } from './Pages/Experiences';
import { Formations } from './Pages/Formations';
import { Home } from './Pages/Home';
import Project from './Pages/Project';
import Projects from './Pages/Projects';
// import './scss/Global.scss';
// import './scss/Link.scss';
import { Layout } from './Layout/Layout';
import { Formation } from './Pages/Formation';
import Skills from './Pages/Skills';
import Header from './components/Header/Header';
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
            <Route component={About} path='/About' />
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
