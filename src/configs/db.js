const mongoose = require('mongoose')
const connect = async ()=>{
    return await mongoose.connect("mongodb://127.0.0.1:27017/students")
}
module.exports = connect;