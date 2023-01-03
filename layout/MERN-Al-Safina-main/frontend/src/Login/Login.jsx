import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Authentication/auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const context = useContext(AuthContext);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [eror, setError] = useState("");
  const history = useHistory();

  const submit = async (event) => {
    event.preventDefault();
    //console.log("Hello");
    //let email = email || "temp";
    setError("");
    if (!email || !password) {
      setError("Please Enter Email or Password");
      return;
    }

    const url =
      process.env.REACT_APP_BACKEND_URL + `user/login/${email}/${password}`;
    console.log(url);
    await axios
      .get(
        process.env.REACT_APP_BACKEND_URL + `user/login/${email}/${password}`
      )
      .then((response) => {
        //console.log(response);
        context.login(response.data.user._id);
        toast.success("Logged In", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        history.push("/");
        setemail("");
        setpassword("");
      })
      .catch((e) => {
        console.log(e.message);
        var error;
        e.response ? (error = e.response.data.error): (error = e.message)
        setError(error);
      });
  };

  return (
    <div className="text-center py-5">
      <p className="p-0 m-0 h1 mb-4">Login</p>
      <form
        onSubmit={submit}
        className="col-10 col-sm-6 col-md-4 text-start bg-light p-4"
        style={{ margin: "0px auto" }}
      >
        {eror && (
          <div className="alert alert-danger" role="alert">
            {eror}
          </div>
        )}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(email) => setemail(email.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(password) => setpassword(password.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="m-0 p-0 h4 mt-4">FOR NEW PEOPLE</p>
      <Link
        to="/register"
        className="m-0 p-0 h6"
        style={{ textDecoration: "none", color: "#fe9126" }}
      >
        Register Here
      </Link>
    </div>
  );
}
