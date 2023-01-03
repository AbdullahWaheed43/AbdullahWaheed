import kababSeekh from "../Images/Items/kababSeekh.png"
import kababGola from "../Images/Items/kababGola.png"
import kababChicken from "../Images/Items/kababChicken.png"
import kababMalaiBoti from "../Images/Items/kababMalaiBoti.png"
import kababMix from "../Images/Items/kababMix.png"


const allItem = [

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
export function getKabab() {
    return allItem;
}
