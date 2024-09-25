import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
//import {products} from '../data/products.js';
//import {cart} from '../data/cart.js';



// The whole code in this file is used to make the site interactive.
let productsHTML = '';

products.forEach((product) => {
    // here we generate html to display our data on the screen
    productsHTML += `
    <div class="products-container">
        <div class="product-image-container">
            <img src="${product.image}" class="product-img1">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-rating-star">
            <img src="${product.rating.stars}" class="stars-rating">
            <div class="product-rating-number">
                ${product.rating.count}
            </div>
        </div>
        <div class="product-price">
            $${formatCurrency(product.priceCent)}
        </div>
        <div>
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div>
            <button class="button-btn js-add-to-cart"
            data-product-id="${product.id}">Add to Cart</button>
        </div>
    </div>`;
});

document.querySelector('.js-products-grid').
innerHTML = productsHTML;

function updateCartQuantity() {
    //The code below shows the total number of products in the cart
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').
innerHTML = cartQuantity;
};
// Below here we make the button interactive by using EventListener
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId)
            updateCartQuantity()
            
        });
    });

    
/** the code below is to increase the quantity of one product   
let matchingItem = '';

cart.forEach((cartItem) => {
    if (productId === cartItem.productName) {
        matchingItem = cartItem;
    }
});

if (matchingItem) {
    matchingItem.quantity += 1;
}else{
    cart.push({
        productId: productId,
        quantity: 1,
    });
}
//The code below shows the total number of products in the cart
let cartQuantity = 0;

cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
});

document.querySelector('.js-cart-quantity').
innerHTML = cartQuantity;
*/

//////////////////////////////////////////////////////
// The whole code in this file is used to make the site interactive.

/*let productsHTML = '';

products.forEach((product) => {
     // here we generate html to display our data on the screen

    productsHTML += `
    <div class="products-container">
        <div class="product-image-container">
            <img src="${product.image}" class="product-img1">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-rating-star">
            <img src="${product.rating.stars}" class="stars-rating">
            <div class="product-rating-number">
                ${product.rating.count}
            </div>
        </div>
        <div class="product-price">
            $${(product.priceCent / 100).toFixed(2)}
        </div>
        <div>
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div>
            <button class="button-btn js-add-to-cart" data-products-id="${product.id}">Add to Cart</button>
        </div>
    </div>
    `;    
});
//////////////////////////////////////////////////////

// The code below is used to check the quantity of products in the cart
function updateCartQuantity() {
    cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

};
    
// the code below is use to get a product from array
document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        
        // Below here, we make our button interactive by adding eventListener to the button!
        button.addEventListener('click', () => {
            const productsId = button.dataset.productsId;
            addToCart(productsId);
            updateCartQuantity()

// we used the code below to display the cart quantity on the screen or the page
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        });
    });*/