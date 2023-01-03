import React, { useEffect, useState } from "react";

import Card from "../Shared/Card";

import { getAllItems } from "../data/items";
import { useParams } from "react-router-dom";

export default function Items(props) {
  const { item } = useParams();
  const items = getAllItems();
  const [result, setResult] = useState(items);

  useEffect(() => {
    let crt = [];
    items.filter((val) => {
      let value;
      if (item === "all") {
        value = val;
      } else if (val.keyword.toLowerCase().includes(item.toLowerCase())) {
        value = val;
      }
      crt.push(val);
      return value;
    });
    //console.log(crt)
    setResult(crt);
  }, [item, items]);

  return (
    <div className="container-fluid">
      <div className="row p-2">
        {result
          .filter((val) => {
            var result;
            if (item === "all") {
              result = val;
            } else if (
              val.keyword.toLowerCase().includes(item.toLowerCase())
            ) {
              result = val;
            }
            return result;
          })
          .map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
      </div>
    </div>
  );
}
