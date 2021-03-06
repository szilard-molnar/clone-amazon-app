import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// PUBLIC STRIPE API KEY
const promise = loadStripe("pk_test_51JB9YsL9dR4JdSuU9csRMbanffpcTh8eCR0VtrvN0hURtDdXwaSof97XHmjciCeISZjseC1zAjnc0ZpuGpPkLwLT00ORNFDqsN");

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run ONCE when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log(`The user is >>> `, authUser);
      if(authUser) {
        // the user just logged in, or the user was logged in.
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
