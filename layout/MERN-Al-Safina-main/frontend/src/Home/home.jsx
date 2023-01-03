import React from "react";
import Carousel from "./Carousel";
import { getBurgers } from "../data/Burger";
import { getShwarma } from "../data/shwarma";
import Card from "../Shared/Card";
import { Link } from "react-router-dom";
import Map from "./Map";
import { getPizza } from "../data/pizza";
import { getStarter } from "../data/starter";
import { getWrap } from "../data/wrap";
import { getKabab } from "../data/kabab";
import { getCalzone } from "../data/calzone";

export default function Home(props) {
  const items = getBurgers();
  const disItems = getShwarma();
  const pizza = getPizza();
  const starter = getStarter();
  const wrap = getWrap();
  const kabab = getKabab();
  const calzone = getCalzone();

  return (
    <div>
      <Carousel />

      <div className="container border rounded bg-light mt-3 pb-2">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Burgers</h5>
          <Link to="/products/burger" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {items.map((e) => (
            <Card item={e} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Shawarma and Paratha Roll</h5>
          <Link to="/products/p&s" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {disItems.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Pizza</h5>
          <Link to="/products/pizza" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {pizza.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Starter and Fries</h5>
          <Link to="/products/s&f" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {starter.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Wraps</h5>
          <Link to="/products/wrap" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {wrap.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Kabab</h5>
          <Link to="/products/kabab" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {kabab.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="container border rounded bg-light mt-3 pb-2 mb-3">
        <div className="d-flex justify-content-between mt-3 px-2">
          <h5>Calzone</h5>
          <Link to="/products/calzone" className="text-decoration-none">
            See More
          </Link>
        </div>
        <div className="row">
          {calzone.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <Map />
    </div>
  );
}
