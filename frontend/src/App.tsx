import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Footer} from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Header title='test'/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
