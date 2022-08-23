import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './about'
import Contact from './contact'
import Home from "./home"
import Food from "./game/Food"
import NumberGuessing from "./game/NumberGuessing"
const routing = (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/tic-toc" element={<Food />} />
                <Route path="/number-guessing" element={<NumberGuessing />} />
            </Routes>
        </Router>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routing);