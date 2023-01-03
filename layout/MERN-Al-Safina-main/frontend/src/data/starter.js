import chickenWings from "../Images/Items/chickenWings.png"
import ChickenNuggets from "../Images/Items/ChickenNuggets.png"
import ChickenPakora from "../Images/Items/ChickenPakora.png"
import fries from "../Images/Items/fries.png"
import cheeseFries from "../Images/Items/cheeseFries.png"


const starter = [
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

];
export function getStarter() {
    return starter;
}
