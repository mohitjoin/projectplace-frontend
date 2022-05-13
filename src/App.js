import React, { useState, useEffect } from 'react'
import './App.css';
import ReactLoading from 'react-loading';
import Home from './components/home/Home';
import Pricing from './components/pricing/Pricing'
import User from './components/user/User'
import Register from './components/register/Register';
import FindProjects from './components/findprojects/FindProjects';
import Login from './components/login/Login';
import Project from './components/project/Project';
import Addprojects from './components/addprojects/Addprojects';
// import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [load, isLoad] = useState(true)


    // const datass = sessionStorage.getItem('hasLogin');

    // setisLogin((pre) => {
    //     return pre = datass;
    // });
    // console.log(datass);
    useEffect(() => {
        setTimeout(() => isLoad((pre) => {
            return false;
        }), 3000)
    }, [])



    return ( <div > {
            load && <ReactLoading type = { "spinningBubbles" }
            color = { "#1C1E53" }
            height = { '16vw' }
            width = { '20vh' }
            className = 'loader-on-home' />
        }

        {
            !load && <>

                < Routes > 
                    <Route path = '/' element = { < Home />}/>
                    <Route path = '/pricing' element = { < Pricing / > } />
                    <Route path = '/addproject' element = { < Addprojects / > } />
                    <Route path = '/findprojects' element = { < FindProjects / > }/>
                    <Route path = '/:username' element = { < User/> } />
                    <Route path = '/register' element = { <Register/> }/>
                    <Route path = '/project/:id' element = { <Project/>}/> 
                    <Route path = '/login' element = { < Login / > }/>
                 </Routes>



            </>
        }





        </div>
    );
}

export default App;