const mongoose = require('mongoose');
const connectDb= async()=>{
    try{
        //mongodb connection string
        const con =  mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(con);
        console.log(`MongoDb connected:${con.connection}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
console.log(connectDb.con);
 module.exports = connectDb;
