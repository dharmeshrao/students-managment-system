const connect = require('./configs/db')
const app = require('./index')
app.listen(3000,async ()=>{
    await connect()
    console.log("listning on port 2323");
})