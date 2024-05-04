import './style/App.css';
// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import ErrorPage from './pages/Error/index'
import Housing from './pages/Housing/index'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/logement/:id" element={<Housing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App;