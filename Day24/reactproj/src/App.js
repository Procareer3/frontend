import './App.css';
import Card from './components/Card';
import ClassComponent from './components/ClassComponent';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greetings name="Diana"/>
      <ClassComponent/>
     <h4>Let's Code!</h4>
     <Card/>
    <Footer/>
    </div>
  );
}

export default App;
