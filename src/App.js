import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs/ContactUs';
import Gallery from './components/Gallery/Gallery';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
      <NavBar/>
      <Routes>
        <Route path='/Home' exact element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
