import './App.css';
import Navbar from './components/navbar/Navbar';
import Focus from './components/navbar/focus/Focus';
import Power from './components/power/Power';
import Sharpness from './components/sharpness/Sharpness';
import Options from './components/options/options';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Power />
      <Focus />
      <Sharpness />
      <Options />
      <Contact />
    </>
  );
}

export default App;
