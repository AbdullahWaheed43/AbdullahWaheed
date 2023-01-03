import chickenWrap from "../Images/Items/chickenWrap.png"
import malaiBotiWrap from "../Images/Items/malaiBotiWrap.png"
import zingerWrap from "../Images/Items/zingerWrap.png"
import seekhkabakWrap from "../Images/Items/seekhkabakWrap.png"
import chickenTikkaWrap from "../Images/Items/chickenTikkaWrap.png"


const allItem = [
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

];
export function getWrap() {
    return allItem;
}
