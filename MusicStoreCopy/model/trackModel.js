const mongoose = require('mongoose');

var trackSchema= new mongoose.Schema({    
    trackName:String,
    artistName:String,
    albumName:String,
    albumYear:String,
    albumGenre:String,  
    trackPrice:String
 });
var Track=mongoose.model('Track',trackSchema);

module.exports =Track;