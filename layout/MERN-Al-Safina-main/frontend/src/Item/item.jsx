import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllItems } from "../data/items";
import { AuthContext } from "../Authentication/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  const allItems = getAllItems();
  const { pid } = useParams();

  const context = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(
    allItems[pid].isPizza ? allItems[pid].price.small : null
  );
  const [id, setId] = useState("S");

  const decrementQuantity = () => {
    if (quantity <= 1) {
      return;
    }

    setQuantity((e) => e - 1);
  };

  const setPizza = (size) => {
    if (size === "S") {
      setPrice(allItems[pid].price.small);
      setId("S");
    } else if (size === "M") {
      setPrice(allItems[pid].price.medium);
      setId("M");
    } else if (size === "L") {
      setPrice(allItems[pid].price.large);
      setId("L");
    } else if (size === "F") {
      setPrice(allItems[pid].price.family);
      setId("F");
    }
  };

  const addToCart = async () => {
    const itm = {
      id: allItems[pid].isPizza ? pid + id : pid,
      name: allItems[pid].isPizza
        ? allItems[pid].name + " (" + id + ")"
        : allItems[pid].name,
      price: allItems[pid].isPizza ? price : allItems[pid].price,
      img: allItems[pid].img,
      quantity: quantity,
      userid: context.userId,
    };

    var cart = JSON.parse(localStorage.getItem("cart"));
    var flag = 0;
    const iid = allItems[pid].isPizza ? pid + id : pid;

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
    <div>
      <div className="border-white mb-3 mt-5" style={{ zIndex: "0" }}>
        <div className="row g-0 align-items-center">
          <div className="col-5">
            <img
              className="img-fluid rounded-start img-hover"
              style={{ height: 300 }}
              src={allItems[pid].img}
              alt={allItems[pid].name}
            />
          </div>
          <div className="col-7">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">
                {allItems[pid].isPizza
                  ? allItems[pid].name + " (" + id + ")"
                  : allItems[pid].name}
              </h1>
              <div className="mt-2">
                <span className="text-sm text-green-600 ">In Stock</span>
              </div>

              {allItems[pid].isPizza ? (
                <div className="flex flex-col">
                  <button
                    className="btn btn-sm rounded border mx-2"
                    onClick={() => setPizza("S")}
                  >
                    S
                  </button>
                  <button
                    className="btn btn-sm rounded border mx-2"
                    onClick={() => setPizza("M")}
                  >
                    M
                  </button>
                  <button
                    className="btn btn-sm rounded border mx-2"
                    onClick={() => setPizza("L")}
                  >
                    L
                  </button>
                  <button
                    className="btn btn-sm rounded border mx-2"
                    onClick={() => setPizza("F")}
                  >
                    F
                  </button>
                </div>
              ) : null}

              <div className="mt-2">
                <span className="text-lg font-semibold">
                  Rs. {allItems[pid].isPizza ? price : allItems[pid].price}
                  {!!allItems[pid].isStarter
                    ? "/" + allItems[pid].isStarter + "pcs"
                    : null}
                  {!!allItems[pid].isKabab ? " per seekh" : null}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center">
                <button
                  className="btn btn-danger text-white px-4 py-2 font-bold text-black transition bg-gray-200 rounded hover:bg-gray-400"
                  onClick={() => decrementQuantity()}
                >
                  -
                </button>
                <span className="mx-4">{quantity}</span>
                <button
                  className="btn btn-primary text-white px-4 py-2 font-bold rounded "
                  onClick={() => setQuantity((e) => e + 1)}
                >
                  +
                </button>
              </div>
              <button
                style={{ backgroundColor: "rgb(254, 145, 38)" }}
                className="btn btn-sm px-4 py-2 font-bold text-white rounded mt-2"
                onClick={() => addToCart()}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
              </button>
            </div>
            <div className="mt-5 prose">
              <h4>Description</h4>
              <p>product description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
