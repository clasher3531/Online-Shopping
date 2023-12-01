var Constants =  require('../Config/Constants.json');

function getBasket() {
    var currentBasket = sessionStorage.getItem('Basket');
    return currentBasket ? JSON.parse(currentBasket) : null;
}

function setBasket(basket) {
    if (basket) {
        var currentBasket = JSON.stringify(basket);
        sessionStorage.setItem('Basket', currentBasket);
    }
}

function getOrNewBasket() {
    var currentBasket = sessionStorage.getItem('Basket');
    if (currentBasket) {
        return JSON.parse(currentBasket);
    } else {
        var basket = {
            products: [],
            count: 0,
            id: Math.floor(Math.random() * 9999),
            totalPrice: 0,
            shippingAddress: {},
            billingAddress: {},
            payment: {},
            email: "",
            shippingMethod: "Standard Delivery",
            shippingMethodPrice: 0,
            taxPrice: 0,
            totalNetPrice: 0
        }
        sessionStorage.setItem('Basket', JSON.stringify(basket));
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

function calculateTotalNetPrice(price) {
    var netPrice = price + ((Constants.taxPercentage * price)/100);
    return parseFloat(netPrice).toFixed(2).toString();
}

function calculateTax(price) {
    var taxPrice = (Constants.taxPercentage * price)/100;
    return parseFloat(taxPrice).toFixed(2).toString();
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
        basket.totalNetPrice = calculateTotalNetPrice(parseFloat(totalPrice));
        basket.taxPrice = calculateTax(parseFloat(totalPrice));
        basket.count = basket.products.length;
        sessionStorage.setItem('Basket', JSON.stringify(basket));
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
        currentBasket.totalNetPrice = calculateTotalNetPrice(parseFloat(currentBasket.totalPrice));
        currentBasket.taxPrice = calculateTax(parseFloat(currentBasket.totalPrice));
        currentBasket.count = currentBasket.products.length;
        setBasket(currentBasket);
    }
}

function setShippingAddress(shippingAddress) {
    var currentBasket = getBasket();
    if (shippingAddress === null || currentBasket===null) {
        return "";
    } else {
        currentBasket.shippingAddress = shippingAddress;
        setBasket(currentBasket);
    }
}

function setEmailAddress(email) {
    var currentBasket = getBasket();
    if (email === null || currentBasket === null) {
        return ""
    } else {
        currentBasket.email = email;
        setBasket(currentBasket);
    }
}

function validateShippingAddress() {
    var currentBasket = getBasket();
    if (currentBasket === null || currentBasket.shippingAddress === null || currentBasket.email === null) {
        return false;
    } else {
        var shippingAddress = currentBasket.shippingAddress;
        if (shippingAddress.title === null || shippingAddress.firstName === null || shippingAddress.lastName === null || shippingAddress.city === null || shippingAddress.zip === null || shippingAddress.state === null || shippingAddress.address1 === null) {
            return false;
        } else {
            return true;
        }
    }
}

function shippingMethodChangeNetPrice(data) {
    var currentBasket = getBasket();
    if (currentBasket) {
        if (data.shippingMethod === Constants.STDMETHOD && currentBasket.shippingMethod === Constants.SATMETHOD) {
            currentBasket.shippingMethod = data.shippingMethod;
            currentBasket.shippingMethodPrice = data.shippingPrice;
            currentBasket.totalNetPrice = parseFloat(parseFloat(currentBasket.totalNetPrice) - Constants.satDeliveryPrice).toFixed(2).toString();
        } else if (data.shippingMethod === Constants.SATMETHOD && currentBasket.shippingMethod === Constants.STDMETHOD) {
            currentBasket.shippingMethod = data.shippingMethod;
            currentBasket.shippingMethodPrice = data.shippingPrice;
            currentBasket.totalNetPrice = parseFloat(parseFloat(currentBasket.totalNetPrice) + Constants.satDeliveryPrice).toFixed(2).toString();
        }
        setBasket(currentBasket);
    }
}

function copyShippingAddressToBilling() {
    var currentBasket = getBasket();
    if (currentBasket && currentBasket.shippingAddress) {
        currentBasket.billingAddress = JSON.parse(JSON.stringify(currentBasket.shippingAddress));
        setBasket(currentBasket);
    }
}

function setPaymentInformation(data) {
    var currentBasket = getBasket();
    if (currentBasket && data) {
        currentBasket.payment = data;
        setBasket(currentBasket);
    }
}

module.exports = {
    getBasket: getBasket,
    setBasket: setBasket,
    getOrNewBasket: getOrNewBasket,
    addProductToBasket: addProductToBasket,
    removeProductFromBasket: removeProductFromBasket,
    setShippingAddress: setShippingAddress,
    setEmailAddress: setEmailAddress,
    validateShippingAddress: validateShippingAddress,
    shippingMethodChangeNetPrice: shippingMethodChangeNetPrice,
    copyShippingAddressToBilling: copyShippingAddressToBilling,
    setPaymentInformation: setPaymentInformation
}