import React from 'react'
import './pricecard.css'
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import logo from '../assets/homeassets/sitelogo.png'
import Axios from 'axios'

export default function Pricecard(props){

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

async function handleOpenRazerPay(data){
  const pri=data.price.price;
  console.log(pri);


  if(pri===0){
    
    return;
  }


  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
);

if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
}

// creating a new order
const result = await Axios.post(`${process.env.REACT_APP_HOST}payments`,{amount:pri});

if (!result) {
    alert("Server error. Are you online?");
    return;
}

// Getting the order details back
const { amount, id: order_id, currency } = result.data;

const options = {
    key: "rzp_test_iJHHgn2nSX7kg2", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Projectplace Payment",
    description: "Test Transaction",
    image: { logo },
    order_id: order_id,
    handler: async function (response) {
        const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
        };

        // const result = await Axios.post(`${process.env.REACT_APP_HOST}payments`, data);

        // alert(result.data.msg);
    },
    
    notes: {
        address: "Projectplace payments",
    },
    theme: {
        color: "#61dafb",
    },
};

const paymentObject = new window.Razorpay(options);
paymentObject.open();






}

    return(<>
    <div className='main-container-pricecard'
    onClick={()=>handleOpenRazerPay(props)}
    style={{
        background:props.price.color,
        color:props.price.textColor
    }}
    
    >
         <div className='pricing-card-heading'>{props.price.name}</div>
         <div className='pricing-card-price'>Rs.{props.price.price}/mo</div>
         <div className='spacing'></div>
         <div className='pricing-card-benefits'>{ props.price.benefit1yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span>  {props.price.benefit1}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit2yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit2}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit3yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit3}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit4yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit4}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit5yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit5}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit6yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit6}</div>
         <div className='pricing-card-benefits'>{ props.price.benefit7yes==='yes'? <TiTick/>: <ImCross/>}  <span className='space-in'></span> {props.price.benefit7}</div>
         
         
     </div>
    </>)


} 
