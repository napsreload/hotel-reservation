import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './Components/header';
import AppHero from './Components/hero'

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero/>
      </main>
    
    </div>
  );
}

export default App;
