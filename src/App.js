import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import React , { useEffect } from "react"
import { auth } from './firebase'
import {useStateValue} from './StateProvider'
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Footer from './Footer';
import WOW from 'wowjs';
import Order from './Order';

const promise = loadStripe(
  'pk_test_51HkwgmBfTjjfFydqZOJj1PDxXNXio1fOeQTYg76JAFakG9I1QO5eZd097Vfs84T6NcZ09MB89GeD85zmHmwxPSZA004vC7AuK5'
)

function App() {

  const [{} , dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>>' , authUser)

    if(authUser){
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    } else {
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  })

  new WOW.WOW().init();

  } , [])

  return (
    <Router>
    <div className="App">
    
      <Switch>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/checkout">
      <Header/>
        <Checkout/>
        <Footer/>
      </Route>

      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
       <Payment/>
       </Elements>
       <Footer/>
      </Route>

      <Route path="/order">
        <Header/>
          <Order/>
        <Footer/>
      </Route>

      <Route path="/">
      <Header/>
          <Home/>
          <Footer/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}
export default App;
