import axios from 'axios'
import Script from 'next/script';
import React, { useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

const Payment = async() => {
    const token = Cookies.get("user");
        let verify = await jwt.verify(token, process.env.JWT_TOKEN);
        console.log(verify)
    const makePayment = async () =>{
        const response =await axios.post(`/api/razorpay`);
        const data = response.data;

        
        

        const options = {
            key : process.env.RAZORPAY_KEY,
            name : "Dheeraj",
            currency : data.currency,
            amount : data.amount,
            order_id : data.id,
            description : "Thank You !",
            handler : function(response){},
            prefill : {
                name : "Dheeraj",
                email : "dj@gmail.com",
                contact : 123456789       
            }
        };

        const paymentObj = new window.Razorpay(options);
        paymentObj.open()
    }
    useEffect(()=>{
        makePayment();
    },[]);
  return (
    <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  )
}

export default Payment










// import axios from "axios";
// import Script from "next/script";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// const Payment = () => {
//   const router = useRouter();
  
//   const makePayment = async () => {
//     const val = {
//       id: router.query?.id,
//     };
//     const { data } = await axios.post(`/api/razorpay`, val);
//     console.log(data)

//     const options = {
//       key: process.env.RAZORPAY_KEY,
//       name: "Aditya",
//       currency: data.currency,
//       amount: data.amount,
//       order_id: data.id,
//       description: "Thank You !",
//       handler: function (response) {},
//       prefill: {
//         name: "Aditya",
//         email: "adi@gmail.com",
//         contact: 987654321,
//       },
//     };

//     const paymentObj = new window.Razorpay(options);
//     paymentObj.open();
//   };

//   useEffect(() => {
//     makePayment();
//   }, []);

//   return (
//     <>
//       <Script src="http://checkout.razorpay.com/v1/checkout.js" />
//     </>
//   );
// };

// export default Payment;