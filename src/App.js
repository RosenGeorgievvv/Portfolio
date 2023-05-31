import './App.css';
import MainPage from './pages/MainPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
