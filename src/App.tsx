import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='sm:container mx-auto p-2 max-w-screen-md flex-grow'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
