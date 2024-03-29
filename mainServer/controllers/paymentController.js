import { instance } from "../server.js";
import crypto from "crypto";
import { RAZORPAY_API_KEY } from "../server.js";
import { RAZORPAY_API_SECRET } from "../server.js";

export const checkout = async (req, res) => {

    try {
        const options = {
            amount: Number(req.body.amount * 100), //amount in smallest current  that is 500rs
            currency: "INR",
            // reciept: "order_rcptid_11"
        };
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            error: "An error occurred while creating the order"
        })
    }
};
export const paymentVerification = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;
    if (isAuthentic) {
        //Database

        res.redirect(
            `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
        )

    } else {
        res.status(400).json({
            success: false,
        })
    }


};
