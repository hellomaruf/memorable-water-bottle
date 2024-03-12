function Bottle({ bottle, handleAddToCart }) {
  const { name, img, price } = bottle;
  //   console.log(bottle);
  return (
    <div>
      <div className=" bg-purple-100 m-5 p-4 rounded-xl border border-purple-500">
        <img className=" w-64" src={img} alt="" />
        <h2 className=" font-semibold text-lg text-gray-700 py-2">{name}</h2>
        <h2>Price : ${price}</h2>
        <button
          onClick={()=>handleAddToCart(bottle)}
          className=" bg-purple-500 text-white py-2 px-4 rounded-lg mt-3 hover:bg-purple-400 duration-200"
        >
          Purchese
        </button>
      </div>
    </div>
  );
}

export default Bottle;
