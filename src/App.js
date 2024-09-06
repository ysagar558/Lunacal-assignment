import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import React from 'react';
import AboutMe from './AboutMe';
import Recommended from './Recommended';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experiences from './Experiences';
import './App.css';
function aboutme() {
  const main = ReactDOM.createRoot(document.getElementById('main'));
  main.render(<AboutMe />);
}
function recom() {
  const main = ReactDOM.createRoot(document.getElementById('main'));
  main.render(<Recommended />);
}
function exp() {
  const main = ReactDOM.createRoot(document.getElementById('main'));
  main.render(<Experiences />);
}

function App() {
  return (
    <div>
      <div className="block1">
        <img src="/Frame1000002294.png" className="sideicon" alt="logo" />
        <button className="btn1" onClick={aboutme}>About Me</button>
        <button className="btn2" onClick={exp}>Experiences</button>
        <button className="btn3" onClick={recom}>Recommended</button>
      </div>


      <div className='block2'>
        <img src="./Frame1000002294.png" className='sideicon2' alt="icon" />
        <button className="btn4">Gallery</button>
        <button className="btn5">+ Add Image</button>
        <img src="./Component313.png" className='arrow1' />
        <img src="./Component312.png" className='arrow2' />
        <img src="./Rectangle5160.png" className='img1' />
        <img src="./Rectangle5160.png" className='img2' />
        <img src="./Rectangle5160.png" className='img3' />


      </div>

      <div id='main'>

      </div>

    </div>
  );
}

export default App;
