import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import ErrorPage from './Pages/404Page/404page'
import Contact from './Pages/Contact/contact'
// import Blog from './Pages/Blog/blog'
// import Prediction from './Pages/Prediction/predict'
// import Screen1 from './Pages/Prediction/screen1'
// import Screen2 from './Pages/Prediction/screen2'
// import Screen3 from './Pages/Prediction/screen3'
// import Screen4 from './Pages/Prediction/screen4'
// import CashFlow from './Pages/CashFlow/cashflow'
// import Revenue from './Pages/Revenue/revenue'
// import Investor from './Pages/Investor/investor'
// import Budget from './Pages/Budget/budget'
export default function App() {
  useEffect(() => {
    document.title = 'InvestIQ';
  }, [])
  return (
    < BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/blog' element={<Blog />} />
      <Route path='/predict' element={<Prediction />} />
      <Route path='/screen1' element={<Screen1 />} />
      <Route path='/screen2' element={<Screen2 />} />
      <Route path='/screen3' element={<Screen3 />} />
      <Route path='/screen4' element={<Screen4 />} />
      <Route path='/cashflow' element={<CashFlow />} />
      <Route path='/revenue' element={<Revenue />} />
      <Route path='/invest' element={<Investor />} />
  <Route path='/budget' element={<Budget />} />*/}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter >
  )
}
