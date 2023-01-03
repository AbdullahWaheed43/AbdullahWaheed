import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authentication/auth";
import "./card.css";
import { toast } from "react-toastify";

export default function Card(props) {
  const context = useContext(AuthContext);

  const { item } = props;

  const addToCart = async (res) => {
    const itm = {
      id: res.isPizza ? res.id + "S" : res.id,
      name: res.isPizza ? res.name + " (S)" : res.name,
      price: res.isPizza ? res.price.small : res.price,
      img: res.img,
      quantity: 1,
      userid: context.userId,
    };

    var cart = JSON.parse(localStorage.getItem("cart"));
    var flag = 0;
    const iid = res.isPizza ? res.id + "S" : res.id;

    if (!cart) {
      cart = [];
    }
    if (cart) {
      cart.map((e) => (e.id === iid ? (flag = 1) : null));
    }

    if (flag === 0) {
      if (cart.length === 0) {
        const crt = [];
        crt.push(itm);
        localStorage.setItem("cart", JSON.stringify(crt));
      } else {
        cart.push(itm);
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      toast.success("Added to Cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Already Added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="col-6 col-md-3 col-lg-2 m-0 p-1">
      <div className="m-0 p-0 mx-md-2">
        <div className="card-img text-center mt-1">
          <Link
            to={`/product/${item.id}/`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <img
              className="img-hover"
              src={item.img}
              alt=""
              style={{ height: 100 }}
            />
          </Link>
        </div>
        <div className="card-body p-2">
          <Link
            to={`/product/${item.id}/`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h5 className="card-tit">
              {item.name.substring(0, 20)}
              {item.isPizza ? " (S)" : null}
              ...
            </h5>
          </Link>
          <div className="d-flex justify-content-between px-3">
            <p className="card-text text-end p-0 my-1 ">
              {item.isPizza ? item.price.small : item.price} Rs
              {!!item.isStarter ? "/" + item.isStarter + "pcs" : null}
              {!!item.isKabab ? " /seekh" : null}
            </p>
            <button
              className="btn btn-sm text-white"
              style={{ backgroundColor: "#fd7e14" }}
              onClick={() => addToCart(item)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
