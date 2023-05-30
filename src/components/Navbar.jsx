import React from 'react'
import Menu from '../assets/hamburger_menu.png'
import '../styles/navbar/navbar.css'

const name = `<RosenGeorgiev className="dev" />`;

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <a href='/'>
                    <div className='logo'>{name}</div>
                </a>
                <img src={Menu} className='hamburger-menu' />
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href="/aboutme">About me</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar