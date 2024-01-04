import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import CEO from './components/CEO';
import CFO from './components/CFO';
import Contact from './components/Contact';
import Student from './components/Student';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}>
           <Route path="CEO" element={<CEO/>} />
           <Route path="CFO" element={<CFO/>} />
        </Route>
        <Route path="/student/:name" element={<Student/> } />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
