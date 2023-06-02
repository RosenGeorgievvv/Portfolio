import './App.css';
import MainPage from './pages/MainPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
