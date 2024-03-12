function Cart({ cart }) {
  return (
    <div className=" max-w-7xl mx-auto">
      <h2 className=" text-center text-xl font-bold pt-2">
        Card : {cart.length}
      </h2>
      <div className=" flex w-36 gap-3">
        {cart.map((bottle, i) => (
          <img key={i} src={bottle.img}></img>
        ))}
      </div>
    </div>
  );
}

export default Cart;
