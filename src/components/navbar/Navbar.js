import React, { useState, useEffect } from 'react'
import './navbar.css'
import siteLogo from '../assets/homeassets/sitelogo.png'
import { Link } from "react-router-dom";
import Yellowbutton from './Yellowbutton';
import { FaAlignJustify, FaTimes } from "react-icons/fa";



export default function Navbar(props) {






    // setisLogin(datass);

    const [show, setshow] = useState('dis-none')

    const [loginuname, setloginuname] = useState('')
    const LoginedUserName= sessionStorage.getItem('UserName');

    useEffect(() => {

        if (props.iamLogin === "true") {
            const localUName = sessionStorage.getItem('UserName');
            setloginuname(localUName)
        }


    }, [props.iamLogin])


    const handleShow = () => {
        setshow((pre) => {
            return pre === 'dis-none' ? '' : 'dis-none';
        })
    }


    return ( 
        
        
        <div className = 'most-outer-nav-div' >


        <div className = "main-nav-container" >

        <div className = 'site-icon-and-name' > 
        <div className = "site-icon-image" > 
        <img src = { siteLogo }
        className = 'site-icon-main-image'
        alt = "Main site icon" / >
        </div> 
        <div className = "siteName-div" > ProjectPlace </div>


        { /*here are nav links*/ }

        <div className = 'small-screen-menu-open' > {
            show === 'dis-none' && <
            FaAlignJustify style = {
                {
                    fontSize: '30px'

                }
            }
            onClick = { handleShow }

            / >} {

            show !== 'dis-none' && <FaTimes style = {
                {
                    fontSize: '30px'

                }
            }
            onClick = { handleShow }/>





        }



        </div>

        <div className = 'links-div'>
        <Link to = "/"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '15px'
            }
        } >
        Home 
        </Link>   
        <Link to = "/pricing"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '15px'
            }
        } >
        Pricing </Link>
        <Link to = "/findprojects"
        style = {
            {
                textDecoration: 'none',
                color: 'white',
                marginLeft: '15px'
            }
        } >
        Find Projects </Link>

        {
            props.iamLogin === "false" && < >
                <Link to = "/register"
                    style = {
                    {
                        textDecoration: 'none',
                        color: 'white',
                        marginLeft: '15px'
                    }
                } >
                Register </Link> 
                <Link to = "/login" >

                <Yellowbutton text = "Login" / > </Link> </>
        }

        {
            props.iamLogin === "true" && 
            <Link to = { "/" + loginuname }
            style = {
                    {
                        /*textDecoration: 'none',*/
                        color: 'white',
                        marginLeft: '20px'
                    }
                } >
                 {LoginedUserName} </Link>
        }

        </div >

        </div >



        <div className = { "links-small-screen " + show } >


        <Link to = "/"
        style = {
            {
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                marginTop: '10px',
                marginBottom: '5px',
                margin: 'auto'
            }
        } >
        Home </Link>  
         <Link to = "/pricing"
        style = {
            {
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                marginTop: '10px',
                marginBottom: '5px',
                margin: 'auto'
            }
        } >
        Pricing </Link>
        <Link to = "/findprojects"
        style = {
            {
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                marginTop: '10px',
                marginBottom: '5px',
                margin: 'auto'
            }
        } >
        Find Projects </Link>

        {
            props.iamLogin === "false" && < > 
            <Link to = "/register"
            style = {
                    {
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '10px',
                        marginBottom: '5px',
                        margin: 'auto'
                    }
                } >
                Register </Link>
                 <Link to = { "/login" }
            style = {
                    {
                        textDecoration: 'none',
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '10px',
                        marginBottom: '5px',
                        margin: 'auto'
                    }
                } >
                Login </Link>  </>

        }
        
         {
            props.iamLogin === "true" && 
            <Link to = { "/" + loginuname }
            style = {
                    {
                        // textDecoration: 'none',
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '10px',
                        marginBottom: '5px',
                        margin: 'auto'
                    }
                } >
                 {loginuname} </Link> 
        }



        </div> 




        </div >
        </div >
    )
}