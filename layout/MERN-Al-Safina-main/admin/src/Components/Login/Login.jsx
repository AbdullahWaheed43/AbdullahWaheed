import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Authentication/authContext";
import LoadingSpinner from "../Shared/spinner";

export default function Login() {
  const context = useContext(AuthContext);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [eror, setError] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `admin/login/${email}/${password}`
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      context.login(responseData.admin._id);
      setIsLoading(false);
      history.push("/");
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      //console.log(err.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="text-center py-5">
      {isLoading && <LoadingSpinner asOverlay />}

      <p className="p-0 m-0 h1 mb-4">Login</p>
      <form
        onSubmit={login}
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
        <button
          type="submit"
          style={{ backgroundColor: "#FE9126" }}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
}
