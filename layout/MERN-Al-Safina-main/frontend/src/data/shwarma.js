import chickenparatha from "../Images/Items/chickenparatha.png"
import zingerPartha from "../Images/Items/zingerParatha.png"
import malaiBoti from "../Images/Items/chickenMalai.png"
import chickenShawarma from "../Images/Items/shwarma.png"
import zingerShwarma from "../Images/Items/zingerShwarma.png"
import openShwrma from "../Images/Items/open Shwarma.jpg"

const shwrma = [
  {
    id: "6",
    name: "Chicken Paratha Roll",
    price: "190",
    img: chickenparatha
  },
  {
    id: "7",
    name: "Zinger Paratha Roll",
    price: "200",
    img: zingerPartha
  },
  {
    id: "8",
    name: "Malai Botti Paratha Roll",
    price: "250",
    img: malaiBoti
  },
  {
    id: "9",
    name: "Chicken Shawarma",
    price: "150",
    img: chickenShawarma
  },
  {
    id: "10",
    name: "Zinger Shawarma",
    price: "180",
    img: zingerShwarma
  },
  {
    id: "11",
    name: "Open Shawarma",
    price: "320",
    img: openShwrma
  }
];
export function getShwarma() {
  return shwrma;
}
