import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToLocalStorage, getStorageCart } from "../../utilliti/localstorage";

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
    console.log("Called the use effect ", bottle.length);
    if (bottle.length > 0) {
      const storedCart = getStorageCart();
        storedCart.map((id) => {
          console.log(id);
      })
    }
  }, [bottle]);

  const handleAddToCart = (bottle) => {
    const newAddToCart = [...addToCart, bottle];
    setAddToCart(newAddToCart);
    addToLocalStorage(bottle.id);
  };
  return (
    <div>
      <h2 className=" text-center text-xl font-bold pt-2">
        Card : {addToCart.length}
      </h2>
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
