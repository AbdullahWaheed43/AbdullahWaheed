import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Shared/spinner";

function OrderHistory() {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "order/allhistory"
        );
        const responseData = await response.json();
        //console.log(responseData.activeOrder);
        setOrder(responseData.activeOrder);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        console.log(err.message || "Something went wrong, please try again.");
      }
    };

    fetchOrders();
  }, []);

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

  if (order.length === 0 && !isLoading) {
    return (
      <div className="border p-2 rounded">
        <h3 className="text-secondary text-center">No Order History</h3>
      </div>
    );
  }

  return (
    <div className="border p-2 rounded">
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>Active Orders</h5>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Search here"
            onChange={(search) => setSearch(search.target.value)}
          />
        </div>
      </div>
      {order
        .filter((val) => {
          var result;
          if (search === "") {
            result = val;
          } else if (
            val.user.name.toLowerCase().includes(search.toLowerCase())
          ) {
            result = val;
          }
          return result;
        })
        .map((e) => (
          <div className="p-2 my-2 rounded bg-light">
            <h5 className="m-0 p-0">User Detail</h5>
            <p className="m-0 p-0">
              <strong>Name: </strong>
              {e.user.name}
            </p>
            <p className="m-0 p-0">
              <strong>Phone Number: </strong>
              {e.user.phone}
            </p>
            <p className="m-0 p-0">
              <strong>Address: </strong>
              {e.user.address}
            </p>
            <p className="m-0 p-0">
              <strong>Total: </strong>
              {e.total}
            </p>
            <p className="m-0 p-0">
              <strong>Ordered at: </strong>
              {date(e.updatedAt)}
            </p>
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
        ))}
    </div>
  );
}

export default OrderHistory;
