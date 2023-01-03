import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../Authentication/authContext";
import { useHistory } from "react-router-dom";
import logo from "../Image/logos/logobr.png";

import "./header.css";

export default function Header() {
  const history = useHistory();
  const context = useContext(AuthContext);

  const logout = () => {
    context.logout();
    history.push("/");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{ backgroundColor: "#fe9126" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" style={{ height: 50 }} />
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
              {context.isLoggedIn ? (
                <>
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
                    <Link className="nav-link  text-white" to="/users">
                      User
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/order"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Order
                    </Link>
                  </li>
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
                </>
              ) : (
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
              )}
            </ul>
            {!context.isLoggedIn ? null : (
              <>
                <Link to={"/u"} className="btn text-white me-2">
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
