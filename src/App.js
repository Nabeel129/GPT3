import React from 'react'
import { Navbar, CTA, Brand } from './components/exportsIndex'
import { Blog, Header, Footer, Features, Possibility, WhatGPT3 } from './containers/exportsIndex'

import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App