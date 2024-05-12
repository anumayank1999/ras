import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AutoSlider from './Header';
import Footer from './Footer';
import Error from './Error';
import Contact from './Contact';
import Download from './Download';
import About from './About';
import Form from './Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  <HashRouter>
    <Navbar />
    <AutoSlider/>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    <Route path='/form' element={<Form />} />
    <Route path='/download' element={<Download />} />

    {/*<Route path='/form' element={<App/>} />*/}
    <Route path="/:id" element={<Error />}/>
    {/*<Route path="/:id" element={<Error />}/>*/}
    </Routes>
    
    </HashRouter>
    <Footer/>
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
