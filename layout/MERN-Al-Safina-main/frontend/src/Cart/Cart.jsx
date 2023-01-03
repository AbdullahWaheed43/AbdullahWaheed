import React, { useContext } from "react";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Hooks/cartHook";

import "./Cart.css";

import { AuthContext } from "../Authentication/auth";

export default function Cart() {
  const history = useHistory();
  const context = useContext(AuthContext);

  const { total, cart, decQuan, incQuan, deleteItem,deleteAll } = useCart();

  const checkout = async () => {
    if (!context.isLoggedIn) {
      history.push("/login");
      return;
    }

    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "cart/add", {
        cart: cart,
        user: context.userId,
      })
      .then((res) => {
        history.push("/checkout");
      })
      .catch((e) => console.log(e));

    console.log(cart);
  };

  if (cart.length === 0) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <h5>There is no Item in Cart</h5>
      </div>
    );
  }

  return (
    <div className="p-5">
      <p className="text-end">
        <button className="btn btn-sm btn-danger" onClick={() => deleteAll()}><FontAwesomeIcon icon={faTrash} /> Delete all</button>
      </p>
      <table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((e, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={e.img} width={80} alt="" />
              </td>
              <td>{e.name}</td>

              <td>{e.price * e.quantity}</td>
              <td>
                <div className="d-flex">
                  <p
                    className="bg-danger text-white inc"
                    style={{ width: 20, paddingLeft: "7px" }}
                    onClick={() => decQuan(e.id)}
                  >
                    -
                  </p>
                  <p className="mx-2">{e.quantity}</p>
                  <p
                    className="bg-info text-white inc"
                    style={{ width: 20, paddingLeft: "5px" }}
                    onClick={() => incQuan(e.id)}
                  >
                    +
                  </p>
                </div>
              </td>
              <td>
                <button
                  onClick={() => deleteItem(e.id)}
                  className="btn btn-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="bg-danger d-flex justify-content-center rounded "
        style={{
          position: "absolute",
          right: "30px",
          width: 250,
          height: 30,
          paddingTop: 1,
        }}
      >
        <button
          style={{
            textDecoration: "none",
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
          }}
          onClick={() => checkout()}
          className="text-white fw-bold"
        >
          Total: {total} Rs Continue <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
