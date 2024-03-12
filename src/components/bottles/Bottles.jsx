import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLocalStorage, getStorageCart } from "../../utilliti/localstorage";
import Cart from "../../cart/Cart";

function Bottles() {
  const [bottle, setBottle] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    const fetchBottle = async () => {
      let res = await fetch("bottle.json");
      let data = await res.json();
      setBottle(data);
    };
    fetchBottle();
  }, []);

  // load cart from local storage **********
  useEffect(() => {
    if (bottle.length > 0) {
      const storedCart = getStorageCart();
      const savedCart = [];
      storedCart.map((id) => {
        const findBottle = bottle.find((bottle) => bottle.id === id);
        if (findBottle) {
          savedCart.push(bottle);
        }
      });
      console.log("saved card", savedCart);
      setAddToCart(savedCart);
    }
  }, [bottle]);
  const handleAddToCart = (bottle) => {
    const newAddToCart = [...addToCart, bottle];
    setAddToCart(newAddToCart);
    addToLocalStorage(bottle.id);
  };
  return (
    <div>
          <Cart cart={ addToCart} />
      <div className="grid grid-cols-4 max-w-7xl mx-auto">
        {bottle.map((items, index) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={index}
            bottle={items}
          />
        ))}
      </div>
    </div>
  );
}

export default Bottles;
