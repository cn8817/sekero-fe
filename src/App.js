import React from 'react'
import Navbar from './components/general/Navbar'
import { Route, Switch } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import StoryPage from './components/story/StoryPage'
import ShopPage from './components/shop/ShopPage'
import RecipesPage from './components/recipes/RecipesPage'
import CartPage from './components/cart/CartPage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/story' component={StoryPage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/recipes' component={RecipesPage}/>
        <Route exact path='/cart' component={CartPage}/>
      </Switch>
    </div>
  );
}

export default App;
