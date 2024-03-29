import { app } from "./app.js";
import Razorpay from "razorpay";
import { config } from "dotenv";
// import {connectDB}  from "./config/database.js";
// import dotenv from "dotenv";

// dotenv.config();

// connectDB();

const PORT=4000
export const RAZORPAY_API_KEY="rzp_test_b4OdJyVt2hya3s"
export const RAZORPAY_API_SECRET="U8OaOt0Z1qkRRdcsVWx0JpVK"

// console.log(process.env.PORT)
export const instance = new Razorpay(
    {
        // key_id: process.env.RAZORPAY_API_KEY,
        // key_secret: process.env.RAZORPAY_API_SECRET
        key_id: RAZORPAY_API_KEY,
        key_secret: RAZORPAY_API_SECRET
    }
)

app.listen(PORT, () =>
    console.log(`Server is working on ${PORT}`)
);