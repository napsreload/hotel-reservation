import AppHeader from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AppHero from './Components/hero'
import AppAbout from './Components/about'
import AppFilter from './Components/filter'
import Properties_list from './Components/properties_list'

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
        <Properties_list />
      </header>
      <main>
        <AppHero />
        <AppAbout/>
      </main>
    
    </div>
  );
}

export default App;
