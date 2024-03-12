import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";

function Bottles() {
  const [bottle, setBottle] = useState([]);
  useEffect(() => {
    const fetchBottle = async () => {
      let res = await fetch("bottle.json");
      let data = await res.json();
      setBottle(data);
    };
    fetchBottle();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 max-w-7xl mx-auto">
        {bottle.map((items, index) => (
          <Bottle key={index} bottle={items} />
        ))}
      </div>
    </div>
  );
}

export default Bottles;
