function createOrder(basket) {
    try {
        if (basket) {
            var orderNumber = Math.floor(Math.random() * 99999).toString();
            var order = convertBasketIntoOrder(basket);
            if (order) {
                order['orderNo'] = orderNumber;
                setOrder(order);
                return order;
            }
            return null;
        }
    } catch(e) {
        return null;
    }
}

function convertBasketIntoOrder(basket) {
    if (basket) {
        var order = {};
        Object.keys(basket).forEach(function(key){
            order[key] = basket[key];
        });
        sessionStorage.removeItem('Basket');
        return order;
    }
    return null;
}

function setOrder(order) {
    if (order) {
        localStorage.setItem(order.orderNo, JSON.stringify(order))
    }
}

function getOrder(orderNo) {
    if (orderNo) {
        var order = JSON.parse(localStorage.getItem(orderNo));
        return order;
    }
}

function handlePayment(order) {
    if (order) {
        var transactionDetails = {
            transactionID : Math.floor(Math.random() * 99999).toString()
        }
        order['paymentTransaction'] = transactionDetails;
        setOrder(order);
        return {success: true}
    }
    return {success: false}
}

module.exports = {
    createOrder: createOrder,
    getOrder: getOrder,
    setOrder: setOrder,
    handlePayment: handlePayment
}