import { useState, useEffect } from "react";

export const useCart = () => {
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);
    const [num, setNum] = useState(0)

    const deleteAll =
        () => {
            const crt = [];
            localStorage.setItem("cart", JSON.stringify(crt));
            setNum(e => e + 1)
        };

    useEffect(() => {
        var crt = JSON.parse(localStorage.getItem("cart"));
        if (!crt) {
            crt = [];
        }
        setCart(crt);
    }, [num]);

    useEffect(() => {
        let tot = 0;
        cart.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
        setTotal(tot);
    }, [cart]);

    const deleteItem = async (id) => {
        setCart((c) => {
            return c.filter((ca) => ca.id !== id);
        });

        var crt = JSON.parse(localStorage.getItem("cart"));
        var newcart = crt.filter((el) => el.id !== id);

        localStorage.setItem("cart", JSON.stringify(newcart));
    };

    const decQuan = async (id, quan) => {
        const newdata = cart.map((p) =>
            p.id === id
                ? {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    oldprice: p.oldprice,
                    time: p.time,
                    img: p.img,
                    quantity: p.quantity <= 1 ? 1 : p.quantity - 1,
                }
                : p
        );

        setCart(newdata);
        localStorage.setItem("cart", JSON.stringify(newdata));
    };

    const incQuan = async (id) => {
        const newdata = cart.map((p) =>
            p.id === id
                ? {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    oldprice: p.oldprice,
                    time: p.time,
                    img: p.img,
                    quantity: p.quantity + 1,
                }
                : p
        );

        setCart(newdata);
        localStorage.setItem("cart", JSON.stringify(newdata));
    };

    return { total, cart, deleteItem, decQuan, incQuan, deleteAll }

}