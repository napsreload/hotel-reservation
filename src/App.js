import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './Components/header';
import AppHero from './Components/hero'
import AppAbout from './Components/about'

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero/>
        <AppAbout/>
      </main>
    
    </div>
  );
}

export default App;
