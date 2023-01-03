import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

function Home() {
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
        var data = [];
        data.push({
          orders: 0,
          total: 0,
        });
        responseData.activeOrder.map((e, index) => {
          data.push({
            orders: index + 1,
            total: e.total,
          });
        });

        console.log(data);

        setOrder(data);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        console.log(err.message || "Something went wrong, please try again.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <section>
      <div className="earnings">
        Earnings
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={order}>
            <XAxis dataKey="orders" />
            <Line dataKey={"total"} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default Home;
