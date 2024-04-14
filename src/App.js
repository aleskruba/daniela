import './App.css';
import About from './components/About';
import Experiences from './components/Experiences';
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
       <Experiences/>
      <Footer/>

  
    </div>
  );
}

export default App;
