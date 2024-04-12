import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/themeContext';
import { useContext } from 'react';



function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="App" id={theme}>
      <Navbar/>

       <About/>
      <Footer/>

  
    </div>
  );
}

export default App;
