import React from 'react'
import './pricecard.css'
import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
export default function Pricecard(props){
    return(<>
    <div className='main-container-pricecard'
    
    style={{
        background:props.price.color,
        color:props.price.textColor
    }}
    
    >
         <div className='pricing-card-heading'>{props.price.name}</div>
         <div className='pricing-card-price'>${props.price.price}/mo</div>
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
