const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  }
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

const addProduct = (cart, product) => {

};



const updatedCart = addProduct(cart, hatProduct);

console.log(updatedCart);
console.log(cart);