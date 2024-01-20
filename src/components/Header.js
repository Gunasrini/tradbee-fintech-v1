import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'

export default function Header() {
    return (
        <header className='header'>
            <div className='container-fluid'>
                <a to="/" className='site-logo'><img src={logo} /></a>
            </div>
        </header>
    )
}
