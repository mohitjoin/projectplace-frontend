import React, { useEffect, useState } from 'react'
import './findproject.css'
import Navbar from '../navbar/Navbar'
import Footer from './../home/Footer';
import ProjectsArea from './ProjectsArea';
import { FaSearch } from "react-icons/fa";
// import TextField from '@mui/material/TextField';
export default function FindProjects() {
    const [isLogin, setisLogin] = useState("false")
    const [searched, setsearched] = useState("false")
    const [searchedText, setsearchedText] = useState()

    const datassi = sessionStorage.getItem('hasLogin');

    useEffect(() => {

        if (datassi != null)
            setisLogin(datassi)

    }, [datassi])
    const handleSearchProjects = () => {
        // setTimeout(() => setsearched((pre) => {
        //     return "true";
        // }), 3000)
        setsearched("true");
    }

    return ( 
    
    <div className = 'find-project-main-container' >
        <Navbar iamLogin = { isLogin }/> 
        
        <div className = 'find-project-main' >

        <div className = 'main-heading-find-project' >
        Find projects which relates you best... </div>
        
        <div className = 'search-project-div' >
        <div> <
        FaSearch style = {
            {
                fontSize: '80px',
                padding: '4px',
                height: '60px',
                margin: 'auto',
                paddingTop: '18px'
            }
        }
        / >
        </div>
        <div className = 'input-to-search' >

        <input id = "input-to-search-input"
        onChange = {
            ((e) => {
                setsearchedText(() => {
                    setsearched("false");
                    return e.target.value
                })
            })
        }
        value = { searchedText }
        onKeyPress = {
            (e) => e.key === 'Enter' && handleSearchProjects()
        }
        placeholder = "Search with project name,technology etc." />
        </div >

        </div>

        {
            searched === "false" ? <
                div className = 'Searched-projects' >
                Type about project(Name, Tech used, Owener ) and hit enter to view projects 
                </div> : <ProjectsArea searchedTextIs={searchedText}/ >
        }


        </div>
        
        <Footer/> 
        </div>
    )
}