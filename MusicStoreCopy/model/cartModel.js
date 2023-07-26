const mongoose = require('mongoose');

var userCartSchema = new mongoose.Schema({
    username:String,
    trackid:String,
    trackname:String,
    quantity:String,
    unitprice:String
});
var CartItem = mongoose.model('userCart',userCartSchema);

module.exports = CartItem;