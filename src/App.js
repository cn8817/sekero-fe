import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import OurStory from './pages/OurStory'
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
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
