

import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Hotel from "@/models/Hotel";;

const Payment = () => {
  const router = useRouter();

  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };
    const { data } = await axios.post(`/api/razorpay`, val);

    if(!data){
      console.log(`Error fetching Razorpay data`);
      return;
    }


    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Dheeraj",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You !",
      handler: function (response) {},
      prefill: {
        name: "Dheeraj",
        email: "dj@gmail.com",
        contact: 987654321,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, [makePayment]);

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" onLoad={()=>makePayment()} />
    </>
  );
};

export default Payment;
