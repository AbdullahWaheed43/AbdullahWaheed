import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    //alert(email)
    const registered = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "user/adduser", registered)
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        setemail("");
        setpassword("");
        setname("");
        toast.success("Sign Up Success Full");
        history.push("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="text-center py-5">
      <p className="p-0 m-0 h1 mb-4">Register Here</p>

      <form
        onSubmit={submit}
        className="col-10 col-sm-6 col-md-4 text-start bg-light p-4"
        style={{ margin: "0px auto" }}
      >
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={name}
            onChange={(name) => setname(name.target.value)}
          />
        </div>
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
        <input
          className="btn text-white"
          style={{ backgroundColor: "#fe9126" }}
          type="submit"
          value="Submit"
        />
      </form>
      <p className="m-0 p-0 h4 mt-4">Already a User</p>
      <Link
        to="/login"
        className="m-0 p-0 h6"
        style={{ textDecoration: "none", color: "#fe9126" }}
      >
        Login Here
      </Link>
    </div>
  );
};
export default Register;
