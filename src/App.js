import React from 'react'
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import OurStory from './pages/OurStory'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import Footer from './components/Footer';
import CheckoutForm from './pages/CheckOutPage'
import Register from './components/Register'
import Login from './components/Login'
import RecipesPage from './pages/RecipesPage'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
//figure out how to use stripe after implementing my own aws backend apis

function App() {

  const stripePromise = loadStripe('pk_test_51KFT3GHOSFoUSMnACcRtY2l3R36EUZpVqJsUUixh7TSScEsWPv2StMffXAMlUQKWJaNPuUA6wDFj3STUh9mlCNDK00qo8fflqr');

  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/our-story' component={OurStory}/>
        <Route exact path='/products' component={Shop}/>
        <Route path='/products/:id' component={ProductPage}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/recipes' component={RecipesPage}/>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
