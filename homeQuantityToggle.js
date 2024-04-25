export const homeQuantityToggle=(event,id,stock)=>
{
const currentcard=document.querySelector(`#card${id}`);
// console.log(currentcard);
const productquantity=currentcard.querySelector(".productQuantity");
// console.log(productquantity);
let quantity=parseInt(productQuantity.getAttribute("data-quantity"));
};