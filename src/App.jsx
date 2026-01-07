import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from './compnents/Home'
import Navbar from './compnents/Navbar'
import About from './compnents/About'
import Contact from './compnents/Contact'
import NotFound from './compnents/Notfound'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/About' element= {<About />} />
        <Route path='/Contact' element= {<Contact />} />
        <Route path='*' element= {<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
