import React from 'react'
import  Head from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Profile} from './pages/Profile';
import Repositories from './pages/Repositories'

ReactDOM.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>,
  document.getElementById('root')
)
