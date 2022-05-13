import React, { useState, useEffect } from 'react'
import './login.css'
import loginasset from '../assets/loginassets/loginasset.png'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Navigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import Navbar from '../navbar/Navbar'
import { auth, googleAuthProvider } from "../firebase";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    const [uName, setUName] = useState("");
    const [uPassword, setUPassword] = useState("");
    const [userUrl, setuserUrl] = useState("");
    const [errorText, seterrorText] = useState("");
    const [isUser, setisUser] = useState("false");
    const [load, isLoad] = useState(true)
    const [isLogin, setisLogin] = useState("false")


    const handleLogin = (() => {
        // console.log(uName);
        // console.log(uPassword);


        // console.log(userUrl);
        // console.log(isUser);
        // localStorage.setItem('uname', uName);
        // localStorage.setItem('upassword', uPassword);
        // const localUName = localStorage.getItem('uname');
        // const localUPassword = localStorage.getItem('upassword');
        // console.log(localUName);
        // console.log(localUPassword);
        // localStorage.clear();

        // if (localUName === uName && localUPassword === uPassword) {

        //     setTimeout(() => isLoad((pre) => {
        //         return false;
        //     }), 3000)
        //     sessionStorage.setItem('hasLogin', "true");
        //     setuserUrl("/" + uName)
        //     setisUser(true)
        // } else {
        //     seterrorText("Wrong Username or Password.");
        //     setTimeout(() => seterrorText((pre) => {
        //         return "";
        //     }), 3000)
        // }

        // firebase auth


        auth.signInWithEmailAndPassword(uName, uPassword)
            .then((userCredential) => {
                // Signed in 
                let user = userCredential.user.multiFactor.user.email;
                console.log(user.replace("@gmail.com", ""));
                user = user.replace("@gmail.com", "");
                setTimeout(() => isLoad((pre) => {
                    return false;
                }), 3000)
                setisUser("true")
                setuserUrl("/" + user)
                sessionStorage.setItem('hasLogin', "true");
                sessionStorage.setItem('UserName', user);

                // ...
            })
            .catch((error) => {
                console.log(error)
                seterrorText("!!! Error in Login.")
            });






    })

    // const handleShowUsername = (() => {
    //     console.log("uName");

    // })

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

                setisUser("true")

                setTimeout(() => isLoad((pre) => {
                    return false;
                }), 3000)


            })
            .catch((err) => {
                seterrorText("Please try other Email or Password")
                    // console.log(err);
            })


    })


    const datassi = sessionStorage.getItem('hasLogin');

    useEffect(() => {

        if (datassi != null)
            setisLogin(datassi)

    }, [datassi])


    if (isUser === "true") {
        return (


            load === true ? < ReactLoading type = { "spinningBubbles" }
            color = { "#1C1E53" }
            height = { '16vw' }
            width = { '20vh' }
            className = 'loader-on-home' /
            >
            :
            <Navigate to = { userUrl }/>

        )
    }

    return ( 
        <div>

        <Navbar iamLogin = { isLogin }/> 

        <div className = 'main-container-login' >
        <div className = 'login-main' >
        <div className = 'login-main-left' >

        <div className = 'login-heading' >
        Login </div>  
        <div className = 'login-email-input' >
        <div className = 'error-message-text' > { errorText } </div>

        <TextField style = {
            {
                width: '70%',
                height: '80px',
                margin: '10px 30px',
                fontSize: '42px'
            }
        }
        onChange = {
            ((e) => {
                setUName(e.target.value)
            })
        }


        label = "Email"
        variant = "standard" />


        </div> 
        <div className = 'login-password-input' >

        <TextField style = {
            {
                width: '70%',
                height: '80px',
                margin: '10px 30px',
                fontSize: '42px',
                lineHeight: '32px'
            }
        }
        onChange = {
            ((e) => {
                setUPassword(e.target.value)
            })
        }

        label = "Password"
        type = "password"
        variant = "standard" /> <div> </div >

        <Button style = {
            {
                width: '70%',
                height: '60px',
                margin: '10px 30px',
                fontSize: '24px',
                borderRadius: '41px',
                padding: '24px 12px',
                background: '#FCD980',
                color: 'black'

            }
        }

        onClick = {

            handleLogin

        }

        >
        Login </Button><div> </div>

        <Button style = {
            {


                margin: '10px 30px',
                fontSize: '1.2em',
                borderRadius: '21px',
                padding: '24px 12px',
                background: '#FCD980',
                color: 'black'

            }
        }
        onClick = { handleRegisterwithGoogle }
        className = 'register-button' > { "Signin with Google  " } <
        FaGoogle style = {
            {
                marginLeft: '20px'
            }
        }
        /> </Button> <div> </div> 


        </div> 



        </div> 
        <div className = 'login-main-right' >
        <img src = { loginasset }
        className = "login-image"
        alt = "login  pic" />



        </div>






        </div>



        </div>





        </div>
    )
}