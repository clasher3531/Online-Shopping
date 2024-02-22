const mongoose = require('mongoose');
const validator = require('validator');

const basketSchema = new mongoose.Schema({
    products: [{
        type: Object
    }],
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        }
    },
    count: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Count must be a postive number');
            }
        }
    },
    totalPrice: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Price must be a postive number');
            }
        }
    },
    shippingAddress: {
        type: Object
    },
    billingAddress: {
        type: Object
    },
    payment: {
        type: Object
    },
    shippingMethod: {
        type: String,
        required: true
    },
    shippingMethodPrice: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('ShippingMethodPrice must be a postive number');
            }
        }
    },
    taxPrice: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('TaxPrice must be a postive number');
            }
        }
    },
    totalNetPrice: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('TotalNetPrice must be a postive number');
            }
        }
    }
})

const Basket = mongoose.model('Basket', basketSchema);
module.exports = Basket;
