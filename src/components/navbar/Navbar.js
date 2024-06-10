import React from 'react'
import './Navbarstyles.css'
import { MdPhotoCamera } from "react-icons/md"
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [active, setActive] = useState(false)

    function handleMenu() {
        setActive(!active)
    }

function handleClose() {
    setActive(!active)
}

    return (
        <div className='navbar'>
            <div className="container">
                <div className={active ? 'logo slide-right' : 'logo'}>
                    <h3>Shoot.</h3>
                </div>
                <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                    
                    
                   
                    
                    
                    <li><a href=""><Link onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true} duration={500}>Power</Link></a></li>
                    <li><a href=""><Link onClick={handleClose} activeClass="active" to="focus" spy={true} smooth={true} duration={500}>Focus</Link></a></li>
                    <li><a href=""><Link onClick={handleClose} activeClass="active" to="sharpness" spy={true} smooth={true} duration={500}>Sharpness</Link></a></li>
                    <li><a href=""><Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={500}>Options</Link></a></li>
                    <li><a href=""><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

                    <div className="mobile-menu">
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaInstagram className='icon' />
                            <FaFacebook className='icon' />
                            <MdPhotoCamera className='icon' />
                        </div>
                    </div>
                </ul>

                <ul className="nav-menu hide">
                    <li><a href="">Shop</a></li>
                    <li><a href="">Account</a></li>
                </ul>
                <div className="hamburgher-menu" onClick={handleMenu}>
                    {active ? <FaTimes className='icon' /> : <FaBars className='icon' />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
