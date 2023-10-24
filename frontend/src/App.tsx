import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Header title='test'/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
