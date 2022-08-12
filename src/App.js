import logo from './face-emojji-1.png';
import Navigation from './Navigation';
import XKCD from './XKCD'
import Animals from './Animals'
import Fox from './Fox'
import Satellite from './Satellite';
import Quote from './Quote'
import CatFact from './CatFact';
import User from './User';
import Dog from './Dog'
import WikipediaDisplay from './WikipediaDisplay'
import WikipediaInput from './WikipediaInput';
import './App.css';

import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    xkcd: false,
    animals: false,
    fox: false,
    satellite: false,
    quote: false,
    catFact: false,
    user: false,
    dog: false,
    wiki: {display: false, content: {}}
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome To My Data Fetching App</h1>
      </header>
        <Navigation state={state} setState={setState}/>
      <main>
        {state.wiki.display && <WikipediaInput state={state} setState={setState}/>}
        {state.catFact && <CatFact />}
        {state.xkcd && <XKCD />}
        {state.fox && <Fox />}
        {state.dog && <Dog />}
        {state.satellite && <Satellite />}
        {state.animals && <Animals />}
        {state.quote && <Quote />}
        {state.user && <User />}
      </main>
    </div>
  );
}

export default App;
