import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Authentication/auth";
import axios from "axios";
import { useHistory } from "react-router-dom";

function History() {
  const history = useHistory();
  const context = useContext(AuthContext);

  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      //console.log(process.env.REACT_APP_BACKEND_URL);
      context.userId
        ? await axios
            .get(
              process.env.REACT_APP_BACKEND_URL +
                `order/history/${context.userId}`
            )
            .then((response) => {
              setOrder(response.data.activeOrder);
              console.log(response.data);
            })
            .catch((e) => console.log(e))
        : history.push("/");
    };
    getCart();
  }, [context.userId, history]);

  if (order.length === 0) {
    return (
      <div className="border p-2 rounded">
        <h3 className="text-secondary text-center">No Order History</h3>
      </div>
    );
  }

  const date = (e) => {
    var dat = new Date(e);
    console.log(dat.getMonth());

    return (
      "Date " +
      dat.getDate() +
      "-" +
      (dat.getMonth() + 1) +
      "-" +
      dat.getFullYear() +
      " Time " +
      dat.getHours() +
      ":" +
      dat.getMinutes() +
      ":" +
      dat.getSeconds()
    );
  };

  return (
    <div className="border p-2 rounded">
      {order.map((e) => (
        <div className="p-2 my-2 rounded bg-light">
          <div className="d-flex justify-content-between">
            {date(e.updatedAt)}
            <p
              className={
                "text-end " + (e.status === 0 ? "text-success" : "text-danger")
              }
            >
              <strong>
                Status: {e.status === 0 ? "Completed" : "Canceled"}
              </strong>
            </p>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {e.order.map((or, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{or.name}</td>
                  <td>{or.quantity}</td>
                  <td>{or.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-end">
            <b>Total:</b> {e.total}
          </p>
        </div>
      ))}
    </div>
  );
}

export default History;
