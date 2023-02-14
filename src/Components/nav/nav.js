import React from "react"
import './nav.css'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {GrUserSettings} from 'react-icons/gr'

import { useState } from "react"


const Nav = () => {
    const [activeNav,setActiveNav]= useState('#')
    return (
        <nav>
            
            <a href="#" onClick={() => setActiveNav ('#')} className={activeNav === '#'? 'active': ''}> <AiOutlineUser/></a>
            <a href="#signUp" onClick={() =>setActiveNav('#signUp')}  className={activeNav === '#signUp' ? 'active': ''}><AiOutlineUserAdd/></a>
            <a href="#experience"  onClick={() =>setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active': ''}><GrUserSettings/></a>

        </nav>

    )
}

export default Nav