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
            products: []
        }
        localStorage.setItem('Basket', JSON.stringify(basket));
        return basket;
    }
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
        localStorage.setItem('Basket', JSON.stringify(basket));
    }
}

function removeProductFromBasket(pid) {
    var currentBasket = getBasket();
    if (currentBasket) {
        currentBasket.products = currentBasket.products.filter((product) => {
            return product.id !== pid;
        })
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