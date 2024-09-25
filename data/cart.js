export const cart = [{
    productId: '3a6t-a45jd9-7n5j',
    quantity: 2,
}, {
    productId: 'j59he-gkrcmi-sfldn',
    quantity: 1,
}];

export function addToCart(productId) {
    //   the code below is to increase the quantity of one product   
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
};
/*const cart = [];

function addToCart(productsId) {
    // the code below is to increase the quantity of one product
    let matchingItem = '';

    cart.forEach((cartItem) => {
        if(productsId === cartItem.productsId){matchingItem = cartItem}
    })

    if (matchingItem) {
        matchingItem.quantity += 1
    }else {
        cart.push({
            productsId: productsId,
            quantity: 1,
        });
    }
};    
//////////////////////////////////////////////// */  
