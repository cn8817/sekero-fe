import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Button>button</Button>
      <Button variant='secondary'>secondary</Button> */}
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
