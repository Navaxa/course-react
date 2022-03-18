import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Cronometer } from './components/Cronometer';
import { Counter } from './components/Counter';
import { NewsPage } from './pages/NewsPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="counter" element={<Counter name="cesar"/>}/>
        <Route path="news" element={<NewsPage />}/>
        <Route path="cronometer" element={<Cronometer/>}/>
      </Routes>
    </BrowserRouter>
  );
}
