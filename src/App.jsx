import React from 'react'
import Header from './components/Header/Header.jsx'; 
import Tag from './components/Tag/Tag.jsx';
import Hero from './components/Hero/Hero.jsx';
import Partners from './components/partners/Partners.jsx';

const App = () => {
  return (
    <div className='ml-18 mr-18 mt-4'>

    <Header/>
    <Tag/>
    <Hero/>
    <Partners/>
    
    </div>
  )
}

export default App