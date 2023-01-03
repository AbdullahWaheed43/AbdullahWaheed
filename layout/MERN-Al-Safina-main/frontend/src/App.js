import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./Header/Header";
import Home from "./Home/home";
import Login from "./Login/Login";
import Register from "./Register/register";
import Item from "./Item/item";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import CheckOut from "./CheckOut/CheckOut";
import Items from "./AllItems/items";
import Order from "./Orders/Order"

import { AuthContext } from "./Authentication/auth";
import { useAuth } from "./Hooks/authHook.js"
import Contact from "./Contact/contact";


function App() {
  const { login, logout, isLoggedIn, userId } = useAuth()
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product/:pid" exact>
            <Item />
          </Route>
          <Route path="/products/:item" exact>
            <Items />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout" exact>
            <CheckOut />
          </Route>
          <Route path="/u">
            <Order />
          </Route>
        </Switch>
        <ToastContainer>

        </ToastContainer>




        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
