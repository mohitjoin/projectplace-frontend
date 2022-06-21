import React,{useEffect,useState} from 'react'
import Navbar from '../navbar/Navbar'
import { Navigate } from 'react-router-dom';
import Footer from '../home/Footer';
import './pricing.css'
import AllPrices from './priceinfo'
import Pricecard from './Pricecard';


export default function Pricing() {


    const [isLogin, setisLoginu] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [userUrl, setuserUrl] = useState("");


    useEffect(() => {
        if (datassi === null) {
            setuserUrl("/login")
        }
        if (datassi !== null)
            setisLoginu(datassi)


    }, [datassi])
    if (datassi === null) {

        return (
            <div> 
                <Navigate to = { userUrl }/> 
            </div>
        )
    }



    return ( 
    
        <>
        <Navbar iamLogin = { isLogin }/>
        <div className='pricing-main-container'> 
         <div className='pricing-main-div'>
             
           <div className='pricing-heading' >Pricing</div>
           <div className='pricing-cards-containers'>


             {
                 AllPrices.map((ap,index)=>{
                     return(<><Pricecard key={index+100}  price={ap}/></>)
                 })
             }


           </div>


         </div>   
        
        </div>
        <Footer/>
        </>
    )
}