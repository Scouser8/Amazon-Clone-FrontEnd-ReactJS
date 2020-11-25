import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payments from "./Payments";
import Login from "./Login";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Hi2tjF2rdrsGf19AdOHcigQLPbtnQKC0fAWCyGVF0BaosEiGO9lkA8SrBYhkOrmVBhR5GCebXXFZwwHTXQLtGvc00PTIEKECL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`The User is: ${JSON.stringify(authUser)}`);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //User logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payments />
            </Elements>
          </Route>
          <Route path="**">
            <h1>ERROR 404 Page not found.</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
