import './style.css'

import products from "./api/product.json";
import { showProductContainer } from './homeProductContainer';
// call the funtion to see the card
showProductContainer(products);
console.log(products);