import express from "express"; // becoz type = "module"
// import { config } from "dotenv";
// import router from "./routes/paymentroutes.js";
import paymentRoute from "./routes/paymentroutes.js";
import cors from "cors";
import { RAZORPAY_API_KEY, RAZORPAY_API_SECRET } from "../mainServer/server.js"


// config({path: "C:\Users\abc\Desktop\payment gateway\server\config\config.env"})
export const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extened: true }))

app.use("/api", paymentRoute)

app.get("/api/getkey", (req,res)=>
    res.status(200).json({ key: RAZORPAY_API_KEY }))