import {cart} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';



let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId
//here we create a variable to store the result
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product
        };
    });

cartSummaryHTML += `
<div class="cart-item-container">
    <div class="delivery-date">
        Delivery Date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
        <img class="product-image" src="${matchingProduct.image}">
    </div>

    <div class="product-name">
        ${matchingProduct.name}
    </div>

    <div class="product-price">
        $${formatCurrency(matchingProduct.priceCent )}
    </div>

    <div class="product-quatity">
        <span>
            Quantity: <spa class="quantity-label">${cartItem.quantity}</spa>
        </span>
        <span class="update-quantity-link link-primary">
            Update
        </span>
        <span class="delete-quantity-link link-primary">
            Delete
        </span>
        <span class="update-quantity-link link-primary">
            Update
        </span>
        <span class="delete-quantity-link link-primary">
            Delete
        </span>
    </div>


    <div class="delivery-options">
        <div class="delivery-options-title">
            Choose a delivery options:
        </div>
    
        <div class="delivery-options">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
            </div>
        </div>
    
        <div class="delivery-options">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
            </div>
        </div>
    
        <div class="delivery-options">
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
            </div>
        </div>
    </div>
</div>`;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;