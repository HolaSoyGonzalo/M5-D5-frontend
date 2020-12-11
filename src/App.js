import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import BackOffice from "./components/BackOffice";
import Footer from "./components/Footer";
//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/backoffice" exact>
          <BackOffice />
        </Route>
        <Route path="/products/:id" exact>
          <SingleProduct />
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
