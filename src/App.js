import React, {Component}from 'react';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/Footer';
import './style.scss'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar/>  
      <Slider/>
      <div className="container">
      <Home/>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}
}

export default App;
