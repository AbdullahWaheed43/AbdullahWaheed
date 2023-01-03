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


const pizzas = [
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
];
export function getPizza() {
    return pizzas;
}
