function getBasket() {
    var currentBasket = localStorage.getItem('Basket');
    return currentBasket ? JSON.parse(currentBasket) : null;
}

function setBasket(basket) {
    if (basket) {
        var currentBasket = JSON.stringify(basket);
        localStorage.setItem('Basket', currentBasket);
    }
}

function getOrNewBasket() {
    var currentBasket = localStorage.getItem('Basket');
    if (currentBasket) {
        return JSON.parse(currentBasket);
    } else {
        var basket = {
            products: [],
            count: 0,
            id: Math.floor(Math.random() * 9999),
            totalPrice: 0
        }
        localStorage.setItem('Basket', JSON.stringify(basket));
        return basket;
    }
}

function getTotalPrice(basket) {
    var price = 0
    if (basket && basket.products && basket.products.length) {
        basket.products.forEach(function(product) {
            price += (parseFloat(product.price) * (product.qty));
        })
    }
    return price.toString();
}

function addProductToBasket(basket, product) {
    if (!basket || !product) {
        return null;
    } else {
        var isProductFound = false;
        basket.products.forEach(function (prod) {
            if(prod.id === product.id) {
                prod.qty += 1;
                isProductFound = true
            }
        })
        if (!isProductFound) {
            product.qty = 1;
            basket.products.push(product);
        }
        var totalPrice = getTotalPrice(basket);
        basket.totalPrice = parseFloat(totalPrice).toFixed(2).toString();
        basket.count = basket.products.length;
        localStorage.setItem('Basket', JSON.stringify(basket));
    }
}

function removeProductFromBasket(pid) {
    var currentBasket = getBasket();
    if (currentBasket) {
        var productPrice = 0;
        var qty = 0;
        currentBasket.products = currentBasket.products.filter((product) => {
            if (product.id === pid) {
                productPrice = product.price;
                qty = product.qty;
            }
            return product.id !== pid;
        })
        currentBasket.totalPrice = (currentBasket.totalPrice - (parseFloat(productPrice) * qty)).toString();
        currentBasket.totalPrice = parseFloat(currentBasket.totalPrice).toFixed(2).toString();
        currentBasket.count = currentBasket.products.length;
        setBasket(currentBasket);
    }
}

module.exports = {
    getBasket: getBasket,
    setBasket: setBasket,
    getOrNewBasket: getOrNewBasket,
    addProductToBasket: addProductToBasket,
    removeProductFromBasket: removeProductFromBasket
}