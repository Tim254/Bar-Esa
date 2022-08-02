import { useState } from "react";
import Header from "./Structure/Header";
import Drinks from "./Drinks/Drinks";
import Cart from "./Cart-Items/Cart";
import CartProvider from "./Storage/CartProvider";
import Footer from "./UI/Footer";

function App() {
  const [cartIsVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };
  const hideCartHandler = () => {
    setCartVisible(false);
  };
  return (
      <CartProvider>
        {cartIsVisible && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Drinks />
        </main>
        <Footer/>
      </CartProvider>

  );
}

export default App;
