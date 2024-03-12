import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";

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
  const handleAddToCart = (bottle) => {
    const newAddToCart = [...addToCart, bottle];
    setAddToCart(newAddToCart);
  };
  console.log(addToCart.length);
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
