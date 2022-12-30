import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NAVBAR from './components/NavBar';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Experiences } from './Pages/Experiences';
import { Formation } from './Pages/Formation';
import { Formations } from './Pages/Formations';
import { Home } from './Pages/Home';
import Project from './Pages/Project';
import Projects from './Pages/Projects';
import './scss/Global.scss';
import './scss/Link.scss';
import { useDispatch } from 'react-redux';
import NavBarMobile from './components/NavBarMobile';
import Skills from './Pages/Skills';
import { setMobileView } from './redux/structure/actions';

function App() {
  const [, setGLang] = useState('FR');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsMobile(window.innerWidth < 769);
    dispatch(setMobileView(window.innerWidth < 769));
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isMobile ? (
        <NavBarMobile onChangeLang={setGLang} />
      ) : (
        <NAVBAR onChangeLang={setGLang} />
      )}
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
  );
}

export default App;
