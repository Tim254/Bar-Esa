
import { useContext } from "react";
import CartContext from "../Storage/Context-cart";

import CartIcon from "./CartIcon";

import classes from "./CartButton.module.css"

const CartButton = props=> {

    const cartCtxt = useContext(CartContext)
    const numberOfCartItems = cartCtxt.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}
export default CartButton