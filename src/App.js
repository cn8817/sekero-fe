import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import OurStory from './pages/OurStory'
import Shop from './pages/Shop'
import Product from './components/Product'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Button>button</Button>
      <Button variant='secondary'>secondary</Button> */}
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/our-story' component={OurStory}/>
        <Route exact path='/products' component={Shop}/>
        <Route path='/products/:id' component={Product}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
