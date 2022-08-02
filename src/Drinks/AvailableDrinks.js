import { useEffect, useState } from "react";
import Card from "../UI/Card";
import DrinkItem from "./DrinkItem";
import classes from "./AvailableDrinks.module.css";



const AvailableDrinks = () => {
const [drinks, setDrinks] = useState([])
const [isLoading, setLoadingDrinks] = useState(true)


  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch('https://bar-esa-default-rtdb.firebaseio.com/Drinks.json')
      const responseData = await response.json()

      const loadedDrinks = []
      for(const key in responseData){
        loadedDrinks.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }

      setDrinks(loadedDrinks)
      setLoadingDrinks(false)
    }
    fetchDrinks();
  }, [])

  if(isLoading){
    return (
      <section className={classes.drinksLoading}>
        <p>Drinks Loading</p>
      </section>
    )
  }


  const drinksList = drinks.map((drink) => (
    <DrinkItem
      key={drink.id}
      id={drink.id}
      name={drink.name}
      description={drink.description}
      price={drink.price}
    />
  ));

  return (
    <section className={classes.drinks}>
      <Card>
        <ul>{drinksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDrinks;
