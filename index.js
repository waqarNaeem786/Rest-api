const express = require("express")
const dishRouter = require('./routes/disRouter')
const leaderRouter = require('./routes/leaderRouter')
const promotionRouter = require('./routes/promoRouter')
//
const app = express()
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//Routes
app.use("/dishes", dishRouter)
app.use("/leader", leaderRouter)
app.use("/promotions", promotionRouter)


//ports on localhost
app.listen(9000, ()=>{
    console.log("server is up and runing")
})