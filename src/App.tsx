import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav_bar from './components/Nav_bar';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Experiences } from './Pages/Experiences';
import { Formation } from './Pages/Formation';
import { Formations } from './Pages/Formations';
import { Home } from './Pages/Home';
import './scss/Global.scss';

function App() {
  const [, setGLang] = useState('FR');

  return (
    <BrowserRouter>
      <Nav_bar onChangeLang={setGLang} />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/About' />
        <Route component={Experiences} path='/experiences' />
        <Route component={Experience} path='/experience/:slug' />
        <Route component={Formations} path='/formations' />
        <Route component={Formation} path='/formation/:slug' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
