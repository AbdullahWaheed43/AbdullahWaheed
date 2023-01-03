import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../Shared/spinner";
import { checkoutValidation } from "./checkoutValidation";

export default function CheckOut(props) {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");

  //http://localhost:1000/user/byid/622d8fd4d71c35b0facd255f

  useEffect(() => {
    const getUser = async () => {
      //console.log(process.env.REACT_APP_BACKEND_URL);
      await axios
        .get(process.env.REACT_APP_BACKEND_URL + `user/byid/${context.userId}`)
        .then((response) => {
          //console.log(response.data.user);
          let user = response.data.user;
          setEmail(user.email);
          setAddress(user.address);
          setName(user.name);
          setPhone(user.phone);
        })
        .catch((e) => console.log(e));
    };
    getUser();
  }, [context.userId]);

  useEffect(() => {
    const getCart = async () => {
      var data;
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + `cart/get/${context.userId}`
        );
        const responseData = await response.json();
        data = responseData.cart.cart;
        setCart(responseData.cart.cart);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        //setError(err.message || "Something went wrong, please try again.");
      }

      let tot = 0;
      data.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
      setTotal(tot);
    };

    getCart();
  }, [context.userId]);


  if (cart.length === 0 && !isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <h5>There is no Item in Checkout</h5>
      </div>
    );
  }

  const confirmOrder = async (event) => {
    event.preventDefault();

    setError("");
    const data = {
      phone: phone,
      address: address,
    };

    const errors = checkoutValidation(data);

    if (Object.keys(errors).length !== 0) {
      setError(errors);
      return;
    }

    setIsLoading(true);
    //console.log(cart);
    //console.log();
    await axios
      .patch(process.env.REACT_APP_BACKEND_URL + "user/updateuser", {
        userid: context.userId,
        name: name,
        phone: phone,
        address: address,
      })
      .then((res) => res.data)
      .catch((e) => console.log(e));

    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "order/add", {
        cart: cart,
        total: total,
        user: context.userId,
      })
      .then((res) => {
        history.push("/u/active");
        toast.success("Order has been placed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => console.log(e));

    await axios
      .delete(
        process.env.REACT_APP_BACKEND_URL + `cart/deletebyid/${context.userId}`
      )
      .then((res) => res.data)
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });

    const crt = [];
    localStorage.setItem("cart", JSON.stringify(crt));
  };

  return (
    <div className="container-fluid mt-4">
      {isLoading && <LoadingSpinner asOverlay />}
      <div
        className="row flex-column-reverse flex-md-row"
        style={{ margin: "0 auto" }}
      >
        <div className="col-1 "></div>
        <div className="col-12 col-md-5 mb-5">
          <h4>Billing Details</h4>
          <form onSubmit={confirmOrder}>
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error.phone && (
                  <p className="text-danger p-0 m-0 mb-1 ms-3">{error.phone}</p>
                )}
                {error.address && (
                  <p className="text-danger p-0 m-0 mb-1 ms-3">{error.address}</p>
                )}
              </div>
            ) : null}

            <div className="form-group mb-2 row">
              <label for="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(name) => setName(name.target.value)}
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="form-group  mb-2 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword"
                  value={email}
                  disabled
                  // onChange={(email) => setEmail(email.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group mb-2 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Phone
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  value={phone}
                  onChange={(phone) => setPhone(phone.target.value)}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="form-group mb-2 row">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Address
              </label>
              <div className="col-sm-10">
                <textarea
                  type="password"
                  value={address}
                  onChange={(address) => setAddress(address.target.value)}
                  className="form-control"
                  id="inputPassword"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <button
              style={{ backgroundColor: "#fd7e14", color: "white" }}
              className="btn"
              // onClick={()=>confirmOrder()}
            >
              Confirm Order
            </button>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-12 col-md-4 mb-3">
          <div className="border bg-light p-2">
            <h5>Cart Summary</h5>
            <ul style={{ listStyle: "none" }}>
              {cart.map((e) => (
                <li className="border-bottom my-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>
                        {e.quantity} x {e.name.substr(0, 30)}...
                      </strong>
                    </div>
                    <div>Rs {e.price * e.quantity}</div>
                  </div>
                </li>
              ))}
              <li className="text-end">
                Sub Total Rs<strong>{total}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
