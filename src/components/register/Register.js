import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './register.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { auth, googleAuthProvider } from '../firebase'
import { Navigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
export default function Register() {

    const [isLogin, setisLogin] = useState("false")
    const datassi = sessionStorage.getItem('hasLogin');
    const [error, seterror] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userUrl, setuserUrl] = useState("/pppp");
    const [sucessregister, setsucessregister] = useState("false");
    useEffect(() => {



        if (datassi != null)
            setisLogin(datassi)

    }, [datassi])

    const handleRegisterwithGoogle = (() => {

        console.log("Register in register")


        auth.signInWithPopup(googleAuthProvider)
            .then((us) => {
                console.log(us.additionalUserInfo.profile.email + "");

                var userloginname = us.additionalUserInfo.profile.email;
                userloginname = userloginname.replace("@gmail.com", "");

                sessionStorage.setItem('UserName', userloginname);
                sessionStorage.setItem('hasLogin', "true");
                setuserUrl("/" + userloginname)

                setsucessregister("true")



            })
            .catch((err) => {
                seterror("Please try other Email or Password")
                    // console.log(err);
            })


    })
    const handleRegister = (() => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user.user.multiFactor.user.email)

                var ulink = user.user.multiFactor.user.email;
                ulink = ulink.replace("@gmail.com", "");
                setuserUrl("/" + ulink)
                sessionStorage.setItem('hasLogin', "true");
                setsucessregister("true")
                sessionStorage.setItem('UserName', ulink);
            })
            .catch((error) => {
                seterror("Please try other Email or Password")
                    // console.log(error)
            })
    })

    if (sucessregister === "true") {
        return <
            Navigate to = { userUrl }
        />
    }


    return ( <
        div >

        <
        Navbar iamLogin = { isLogin }
        / >

        <
        div className = 'main-container-register' >
        <
        div className = 'main-register' >
        <
        div className = 'register-heading' >
        Register <
        /div>  <
        div className = 'error-message-text' > { error } < /div>

        <
        TextField style = {
            {

                height: '80px',
                margin: '10px 30px',
                fontSize: '42px'
            }
        }
        onChange = {
            ((e) => {
                setemail(e.target.value)
            })
        }
        className = 'inputs-on-register'
        value = { email }
        label = "Email"
        variant = "standard" / > < div > < /div> <
        TextField style = {
            {

                height: '80px',
                margin: '10px 30px',
                fontSize: '42px'
            }
        }
        value = { password }
        className = 'inputs-on-register'
        onChange = {
            ((e) => {
                setpassword(e.target.value)
            })
        }
        label = "Password"
        variant = "standard" / > < div > < /div>

        <
        Button style = {
            {

                height: '60px',
                margin: '10px 30px',
                fontSize: '24px',
                borderRadius: '41px',
                padding: '24px 12px',
                background: '#FCD980',
                color: 'black'

            }
        }
        onClick = { handleRegister }
        className = 'register-button' >
        Register < /Button>< div > < /div >

        <
        Button style = {
            {

                height: '60px',
                margin: '10px 30px',
                fontSize: '24px',
                borderRadius: '21px',
                padding: '24px 12px',
                background: '#FCD980',
                color: 'black'

            }
        }
        onClick = { handleRegisterwithGoogle }
        className = 'register-button' > { "Register with Google  " } <
        FaGoogle style = {
            {
                marginLeft: '20px'
            }
        }
        / > < /Button > < div > < /div >





        <
        /div> < /
        div >


        <
        /div>
    )
}