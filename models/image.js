const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type:String,
       
    },
    Date:{
        type:String,
        default:Date.now().toLocaleString()
    }
});

let Image = mongoose.model("Image",schema);

module.exports = Image;