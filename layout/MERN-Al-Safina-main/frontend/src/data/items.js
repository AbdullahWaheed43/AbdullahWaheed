import zingerBurger from "../Images/Items/zingerBurger.png"
import pattyburger from "../Images/Items/pattyburger.png"
import beefBurger from "../Images/Items/beefBurger.png"
import filetBurger from "../Images/Items/filletBurger.png"
import maxican from "../Images/Items/maxican.png"
import mamaMia from "../Images/Items/mama.png"
import chickenparatha from "../Images/Items/chickenparatha.png"
import zingerPartha from "../Images/Items/zingerParatha.png"
import malaiBoti from "../Images/Items/chickenMalai.png"
import chickenShawarma from "../Images/Items/shwarma.png"
import zingerShwarma from "../Images/Items/zingerShwarma.png"
import openShwrma from "../Images/Items/open Shwarma.jpg"
import pizzaOnion from "../Images/Items/Pizzaonion.png"
import Pizzavegetable from "../Images/Items/Pizzavegetable.png"
import Pizzachkandmushroom from "../Images/Items/Pizzachkandmushroom.png"
import PizzachkTikka from "../Images/Items/PizzachkTikka.png"
import Pizzahotandspicy from "../Images/Items/Pizzahotandspicy.png"
import PizzamalaiPizza from "../Images/Items/PizzamalaiPizza.png"
import PizzachkFajita from "../Images/Items/PizzachkFajita.png"
import PizzaPeporni from "../Images/Items/PizzaPeporni.png"
import PizzaIstbolian from "../Images/Items/PizzaIstbolian.png"
import PizzakababCrust from "../Images/Items/PizzakababCrust.png"
import pizzaSafinaSpecial from "../Images/Items/pizzaSafinaSpecial.png"
import Pizzacreamy from "../Images/Items/Pizzacreamy.png"
import chickenWings from "../Images/Items/chickenWings.png"
import ChickenNuggets from "../Images/Items/ChickenNuggets.png"
import ChickenPakora from "../Images/Items/ChickenPakora.png"
import fries from "../Images/Items/fries.png"
import cheeseFries from "../Images/Items/cheeseFries.png"
import chickenWrap from "../Images/Items/chickenWrap.png"
import malaiBotiWrap from "../Images/Items/malaiBotiWrap.png"
import zingerWrap from "../Images/Items/zingerWrap.png"
import seekhkabakWrap from "../Images/Items/seekhkabakWrap.png"
import chickenTikkaWrap from "../Images/Items/chickenTikkaWrap.png"
import chickenCalzone from "../Images/Items/chickenCalzone.png"
import tikkacalzone from "../Images/Items/tikkacalzone.png"
import malaicalzone from "../Images/Items/malaicalzone.png"
import creamycalzone from "../Images/Items/creamycalzone.png"
import kababSeekh from "../Images/Items/kababSeekh.png"
import kababGola from "../Images/Items/kababGola.png"
import kababChicken from "../Images/Items/kababChicken.png"
import kababMalaiBoti from "../Images/Items/kababMalaiBoti.png"
import kababMix from "../Images/Items/kababMix.png"


const allItem = [
  {
    id: "0",
    name: "Patty Burger",
    price: "150",
    img: pattyburger,
    keyword: "patty burger"
  },
  {
    id: "1",
    name: "Zinger Burger",
    price: "180",
    img: zingerBurger,
    keyword: "zinger burger"
  },
  {
    id: "2",
    name: "Beef Burger",
    price: "210",
    img: beefBurger,
    keyword: "beef burger"
  },
  {
    id: "3",
    name: "Fillet Burger",
    price: "300",
    img: filetBurger,
    keyword: "fillet burger"
  },
  {
    id: "4",
    name: "Maxican Hot Chilli",
    price: "400",
    img: maxican,
    keyword: "maxican hot chilli burger"
  },
  {
    id: "5",
    name: "Mama Mia Burger",
    price: "450",
    img: mamaMia,
    keyword: "mama mia burger"
  }, {
    id: "6",
    name: "Chicken Paratha Roll",
    price: "190",
    img: chickenparatha,
    keyword: "Chicken Paratha Roll p&s"
  },
  {
    id: "7",
    name: "Zinger Paratha Roll",
    price: "200",
    img: zingerPartha,
    keyword: "Zinger Paratha Roll p&s"
  },
  {
    id: "8",
    name: "Malai Botti Paratha Roll",
    price: "250",
    img: malaiBoti,
    keyword: "Malai Botti Paratha Roll p&s"
  },
  {
    id: "9",
    name: "Chicken Shawarma",
    price: "150",
    img: chickenShawarma,
    keyword: "Chicken Shawarma p&s"
  },
  {
    id: "10",
    name: "Zinger Shawarma",
    price: "180",
    img: zingerShwarma,
    keyword: "Zinger Shawarma p&s"
  },
  {
    id: "11",
    name: "Open Shawarma",
    price: "320",
    img: openShwrma,
    keyword: "Open Shawarma p&s"
  },
  {
    id: "12",
    name: "Onion Pizza",
    img: pizzaOnion,
    keyword: "Onion Pizza",
    isPizza: 1,
    price: {
      small: "300",
      medium: "600",
      large: "900",
      family: "1200"
    }
  },
  {
    id: "13",
    name: "Vegetable Pizza",
    img: Pizzavegetable,
    keyword: "Vegetable Pizza",
    isPizza: 1,
    price: {
      small: "330",
      medium: "650",
      large: "900",
      family: "1400"
    }
  },
  {
    id: "14",
    name: "Chicken & Mushroom Pizza",
    img: Pizzachkandmushroom,
    keyword: "Chicken & Mushroom Pizza",
    isPizza: 1,
    price: {
      small: "380",
      medium: "700",
      large: "980",
      family: "1400"
    }
  },
  {
    id: "15",
    name: "Hot and Spicy Pizza",
    img: Pizzahotandspicy,
    keyword: "Hot and Spicy Pizza",
    isPizza: 1,
    price: {
      small: "370",
      medium: "690",
      large: "940",
      family: "1430"
    }
  },
  {
    id: "16",
    name: "Chicken Tikka Pizza",
    img: PizzachkTikka,
    keyword: "Chicken Tikka Pizza",
    isPizza: 1,
    price: {
      small: "380",
      medium: "700",
      large: "950",
      family: "1450"
    }
  },
  {
    id: "17",
    name: "Malai Boti Pizza",
    img: PizzamalaiPizza,
    keyword: "Malai Boti Pizza",
    isPizza: 1,
    price: {
      small: "380",
      medium: "700",
      large: "960",
      family: "1450"
    }
  },
  {
    id: "18",
    name: "Chicken Fajita Pizza",
    img: PizzachkFajita,
    keyword: "Chicken Fajita Pizza",
    isPizza: 1,
    price: {
      small: "390",
      medium: "700",
      large: "970",
      family: "1480"
    }
  },
  {
    id: "19",
    name: "Peproni Pizza",
    img: PizzaPeporni,
    keyword: "Peproni Pizza",
    isPizza: 1,
    price: {
      small: "400",
      medium: "750",
      large: "980",
      family: "1490"
    }
  },
  {
    id: "20",
    name: "Islambolian Pizza",
    img: PizzaIstbolian,
    keyword: "Islambolian Pizza",
    isPizza: 1,
    price: {
      small: "400",
      medium: "750",
      large: "990",
      family: "1500"
    }
  },
  {
    id: "21",
    name: "Kabab Crust Pizza",
    img: PizzakababCrust,
    keyword: "Kabab Crust Pizza",
    isPizza: 1,
    price: {
      small: "430",
      medium: "770",
      large: "1050",
      family: "1500"
    }
  },
  {
    id: "22",
    name: "Safina Special Pizza",
    img: pizzaSafinaSpecial,
    keyword: "Safina Special Pizza",
    isPizza: 1,
    price: {
      small: "430",
      medium: "760",
      large: "1000",
      family: "1550"
    }
  },
  {
    id: "23",
    name: "Creamy Pizza",
    img: Pizzacreamy,
    keyword: "Creamy Pizza",
    isPizza: 1,
    price: {
      small: "420",
      medium: "780",
      large: "1050",
      family: "1590"
    }
  },
  {
    id: "24",
    name: "Chicken Pakora",
    price: "300",
    img: ChickenPakora,
    isStarter: 8,
    keyword: "Chicken Pakora starter s&f"
  },
  {
    id: "25",
    name: "Chicken Nuggets",
    price: "300",
    img: ChickenNuggets,
    isStarter: 10,
    keyword: "Chicken Nuggets starter s&f"
  },
  {
    id: "26",
    name: "Chicken Wings",
    price: "350",
    img: chickenWings,
    isStarter: 8,
    keyword: "Chicken Wings starter s&f"
  },
  {
    id: "27",
    name: "Fries",
    price: "150",
    img: fries,
    keyword: "fries s&f"
  },
  {
    id: "28",
    name: "Cheese Fries",
    price: "230",
    img: cheeseFries,
    keyword: "Cheese fries s&f"
  },
  {
    id: "29",
    name: "Chicken Spicy Wrap",
    price: "300",
    img: chickenWrap,
    keyword: "Chicken Spicy Wrap"
  },
  {
    id: "30",
    name: "Malai Boti Wrap",
    price: "300",
    img: malaiBotiWrap,
    keyword: "Malai Boti Wrap"
  },
  {
    id: "31",
    name: "Zinger Wrap",
    price: "300",
    img: zingerWrap,
    keyword: "Zinger Wrap"
  },
  {
    id: "32",
    name: "Seekh Kabab Wrap",
    price: "320",
    img: seekhkabakWrap,
    keyword: "Seekh Kabab Wrap"
  },
  {
    id: "33",
    name: "Chicken Tikka Wrap",
    price: "320",
    img: chickenTikkaWrap,
    keyword: "Chicken Tikka Wrap"
  },
  {
    id: "34",
    name: "Spicy Chicken Calzoni",
    price: "1000",
    img: chickenCalzone,
    keyword: "Spicy Chicken Calzoni Calzone"
  },
  {
    id: "35",
    name: "Chicken Tikka Calzone",
    price: "1100",
    img: tikkacalzone,
    keyword: "Chicken Tikka Calzone Calzoni"
  },
  {
    id: "36",
    name: "Malai Boti Calzoni",
    price: "1200",
    img: malaicalzone,
    keyword: "Malai Boti Calzoni Calzone"
  },
  {
    id: "37",
    name: "Creamy Calzoni Calzone",
    price: "1300",
    img: creamycalzone,
    keyword: "Creamy Calzoni Calzone"
  },
  {
    id: "38",
    name: "Seekh Kabab",
    price: "100",
    isKabab: 1,
    img: kababSeekh,
    keyword: "Seekh Kabab"
  },
  {
    id: "39",
    name: "Golla Kabab",
    price: "110",
    isKabab: 1,
    img: kababGola,
    keyword: "Golla Kabab"
  },
  {
    id: "39",
    name: "Chicken Kabab",
    price: "120",
    isKabab: 1,
    img: kababChicken,
    keyword: "Chicken Kabab"
  },
  {
    id: "40",
    name: "Malai Boti",
    price: "150",
    isKabab: 1,
    img: kababMalaiBoti,
    keyword: "Malai Boti Kabab"
  },
  {
    id: "41",
    name: "Mix Kabab",
    price: "500",
    img: kababMix,
    keyword: "Mix Kabab"
  },

];
export function getAllItems() {
  return allItem;
}
