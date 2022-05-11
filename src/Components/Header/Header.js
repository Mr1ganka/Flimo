//import { spacing } from '@mui/system'
import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <span onClick={()=> window.scroll(0,0)} className='header'>Flimo</span>
  )
}

export default Header;