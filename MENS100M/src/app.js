const express=require("express");
const app=express();

require("./db/conn");
// const MensRanking=require("./models/mens");

const router=require("./routers/men")
const port=process.env.PORT||8000;

app.use(express.json());
app.use(router)


app.listen(port,()=>{
    console.log(`connection is live at port no. ${port}`);
})