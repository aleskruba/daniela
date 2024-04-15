import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/themeContext';
import { useContext, useEffect } from 'react';



function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" id={theme}>
      <Navbar/>
       <About/>
       <Experiences/>
       <Courses/>
       <Contact/>
      <Footer/>

  
    </div>
  );
}

export default App;
