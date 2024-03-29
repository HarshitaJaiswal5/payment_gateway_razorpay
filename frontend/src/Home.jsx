import React from 'react'
import {Box, Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {

    const checkoutHandler = async (amount)=>{

        const {data:{key}} =await axios.get("http://localhost:4000/api/getkey")

        const {data : {order}} = await axios.post("http://localhost:4000/api/checkout", {
            amount
    })

        console.log(key)
        console.log(order.amount)
        const options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Hershi",
            description: "Test Transaction",
            image: "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4000/api/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const razor= new window.Razorpay(options);
        
            razor.open();
        
    }

  return (
    <Box>
        <Stack h ={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

            <Card amount={5000} img="https://th.bing.com/th/id/OIP.92BZsfNRmXabAljJNWj3AAHaFv?w=248&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" checkoutHandler={checkoutHandler}/>
            <Card amount={3000} img="http://ts2.mm.bing.net/th?id=OIP.48S_I4Y0DarA4rDLwNQO6QHaIV&pid=15.1" checkoutHandler={checkoutHandler}/>

        </Stack>
    </Box>
   
  )
  }

export default Home
