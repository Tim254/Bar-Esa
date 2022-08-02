import { useContext } from 'react'
import classes from './DrinkItem.module.css'
import DrinkItemForm from './DrinkItemForm' 
import CartContext from '../Storage/Context-cart'

const DrinkItem = props => {
    const cartCtxt = useContext(CartContext)
    const price = `KES ${props.price.toFixed(0)}`

    const addToCartHandler = amount => {
        cartCtxt.AddDrink({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return <li className={classes.drink}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <DrinkItemForm onAddToCart = {addToCartHandler}/>
        </div>
    </li>
}
export default DrinkItem