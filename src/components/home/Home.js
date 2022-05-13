import React, { useState } from 'react'
import Hero from './Hero'
import Showcase from './Showcase'
import ViewMoreProjects from './ViewMoreProjects'
import Whatyouget from './Whatyouget'
import Whatstdentsay from './Whatstdentsay'
import Contactusform from './Contactusform'
import Footer from './Footer'
import Navbar from '../navbar/Navbar'
import { useEffect } from 'react';



export default function Home() {

    const [isLogin, setisLogin] = useState("false")
    // sessionStorage.setItem('UserName', null);
    const datass = sessionStorage.getItem('hasLogin');

    // setisLogin((pre) => {
    //     if (datass !== null)
    //         return pre = datass;
    //     else return pre;
    // });
    useEffect(() => {
        if (datass == null) {} else
            setisLogin(datass);
    }, [datass, isLogin])



    return ( 
    
    <div >
        <Navbar iamLogin = { isLogin }/> 


        <Hero iamLogin = { isLogin }/> 
        <Showcase /> 
        <ViewMoreProjects /> 
        <Whatyouget /> 
        <Whatstdentsay />
        <Contactusform /> 
        <Footer />


        </div>
    )
}