const mongoose = require('mongoose');
const url = "mongodb+srv://nikhiljoshi:NikhilClasher1234@nikhilcluster.gmvscdv.mongodb.net/Customers?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
mongoose.connect(url);
