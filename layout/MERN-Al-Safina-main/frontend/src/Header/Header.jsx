import {
  faPhoneAlt,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/auth";
import logo from "../Images/logos/logobr.png";
import { toast } from "react-toastify";

import "./Header.css";

export default function Header(props) {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [item, setItem] = useState();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    var crt = JSON.parse(localStorage.getItem("cart"));
    if (!crt) {
      crt = [];
    }
    setCart(crt);
  }, []);

  //console.log(context);
  const logout = () => {
    context.logout();
    toast.success("Logged Out");
    history.push("/");
  };

  const search = (e) => {
    e.preventDefault();
    if (item === "") {
      history.push(`/products/all`);
      return;
    }
    history.push(`/products/${item}`);
  };

  return (
    <div>
      <nav className="container-fluid  my-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center ">
            <p className="m-0 p-0">
              <FontAwesomeIcon icon={faPhoneAlt} /> Order Online or Call us at:{" "}
              <br />
              0309 6984786
            </p>
          </div>
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center">
            <img src={logo} style={{ width: "100px" }} alt="" />
          </div>
          <div className="col-12 col-md-4 my-2 my-lg-0 text-center">
            <form onSubmit={search} className="d-flex col-12 col-lg-8">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(item) => setItem(item.target.value)}
              />
              <button
                className="btn text-white"
                style={{ backgroundColor: "#fe9126" }}
                type="submit"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#fe9126" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="#"></Link>

          <div className="d-flex">
            <Link
              to={context.isLoggedIn ? "/cart" : "/login"}
              className="btn text-white me-2 d-block d-md-none"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
              <li className="nav-item">
                <Link
                  className="nav-link  text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/products/all">
                  Our Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About Us
                </Link> 
              </li>*/}
              {!context.isLoggedIn ? (
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to="/login"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn text-white nav-link text-white"
                    style={{
                      backgroundColor: "#fe9126",
                      outline: "none",
                      border: "none",
                    }}
                    onClick={() => logout()}
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
            <Link
              to={"/cart"}
              className="btn text-white me-2"
              style={{ position: "relative" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {cart.length !== 0 ? (
                <span
                  className="bg-danger"
                  style={{
                    borderRadius: "50%",
                    position: "absolute",
                    top: -1,
                    right: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 20,
                    height: 20,
                  }}
                >
                  {cart.length}
                </span>
              ) : null}
            </Link>
            {!context.isLoggedIn ? null : (
              <>
                <Link to={"/u/active"} className="btn text-white me-2">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
