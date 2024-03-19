import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { View } from './components/index.js'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/view' element={<View/>}/>

    </Routes>
  </BrowserRouter>
</React.StrictMode>
)
