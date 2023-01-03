
import zingerBurger from "../Images/Items/zingerBurger.png"
import pattyburger from "../Images/Items/pattyburger.png"
import beefBurger from "../Images/Items/beefBurger.png"
import filetBurger from "../Images/Items/filletBurger.png"
import maxican from "../Images/Items/maxican.png"
import mamaMia from "../Images/Items/mama.png"

const burger = [
  {
    id: "0",
    name: "Patty Burger",
    price: "150",
    img: pattyburger
  },
  {
    id: "1",
    name: "Zinger Burger",
    price: "180",
    img: zingerBurger
  },
  {
    id: "2",
    name: "Beef Burger",
    price: "210",
    img: beefBurger
  },
  {
    id: "3",
    name: "Fillet Burger",
    price: "300",
    img: filetBurger
  },
  {
    id: "4",
    name: "Maxican Hot Chilli",
    price: "400",
    img: maxican
  },
  {
    id: "5",
    name: "Mama Mia Burger",
    price: "450",
    img: mamaMia
  }
];
export function getBurgers() {
  return burger;
}
