import { Product } from "../../api/product";

const product = await Product.getProducts();

const products = Array(10).fill(product[0]);

export { products };
