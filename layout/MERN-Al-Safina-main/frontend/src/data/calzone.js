import chickenCalzone from "../Images/Items/chickenCalzone.png"
import tikkacalzone from "../Images/Items/tikkacalzone.png"
import malaicalzone from "../Images/Items/malaicalzone.png"
import creamycalzone from "../Images/Items/creamycalzone.png"


const allItem = [

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

];
export function getCalzone() {
    return allItem;
}
