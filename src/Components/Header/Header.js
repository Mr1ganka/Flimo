//import { spacing } from '@mui/system'
//import { ArrowDropDown, NotificationImportantOutlined, Search, SettingsApplicationsTwoTone } from "@material-ui/icons"

import "bootstrap/dist/css/bootstrap.min.css"
import React,{useState} from 'react'
import {Button} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import "./header.css"
import { Link, useNavigate } from "react-router-dom"


const Header = () => {

  const navigate=useNavigate()
  const [error, setError] = useState("")
  const logout = useAuth()
  const currentUser =useAuth

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return ( 
    <div className="header">
    
    <div className="left">
    <span onClick={()=> window.scroll(0,0)} className='not'>Flimo</span>
          </div>
              

    <div className="right">
      <strong>{currentUser.email}   </strong>
        <Button onClick={handleLogout} className='w-100' type="logout">Logout</Button>
        </div>


    </div>
  )
}

export default Header;