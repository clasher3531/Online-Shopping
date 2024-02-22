const jwt = require('jsonwebtoken');
const Customer = require('../models/customers');

const auth = async (req, res, next) => {
    try {
        var token = req.headers['authorization'].replace('Bearer ', '');
        var decode = jwt.verify(token, '$2a$08$p8PwLhhGic2MkzreuKqyZ.GIlSAdGzBdgdkWN96AtRa2.rUzTUXFq');
        var customer = await Customer.findOne({'_id': decode._id, 'tokens.token': token});
        if (!customer) {
            throw new Error();
        }
        req.token = token;
        req.customer = customer;
        next();
    } catch (e) {
        res.status(401).send({'error': 'Please Authenticate'});
    }
}

module.exports = auth;