import './App.css';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/themeContext';
import { useContext } from 'react';



function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="App" id={theme}>
      <Navbar/>


 

  
    </div>
  );
}

export default App;
