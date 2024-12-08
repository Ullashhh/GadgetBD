import { getShoppingCart, getWishList } from "./fakeDataBase";

const cartProductLoader = async () => {
  const loaderProducts = await fetch("https://dummyjson.com/products");
  const products = await loaderProducts.json();
  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.products.find((product) => product.id == id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

const wishProductLoader = async () => {
  const wishedProducts = await fetch("https://dummyjson.com/products");
  const products = await wishedProducts.json()
  const wishedCart = getWishList()
  let wishlist=[]
  for(const id in wishedCart){
    const wishedProduct = products.products.find((product) => product.id == id)
    if(wishedProduct){
      wishlist.push(wishedProduct)
    }
  }
  return wishlist;
}


export {cartProductLoader, wishProductLoader};
