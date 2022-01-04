import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App m-0">
      <Navbar/>
      {/* <Button>button</Button>
      <Button variant='secondary'>secondary</Button> */}
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
