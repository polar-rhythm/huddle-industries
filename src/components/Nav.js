import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
import logo from '../images/logo.svg'
import introImg from '../images/illustration-flowing-conversation.svg'

const Nav = () => {

    // const navLinkStyles = ({ isActive }) => {
    //     return{
    //         fontWeight :  isActive ? 'bold' : 'normal',
    //         textDecoration: isActive ? 'underline blue 2px' : 'none',
    //     }
    // }

    return (
        <div>
            <main className='nav'>
                <div className='logo'>
                    <h1>
                        <img src= {logo} alt="" />
                    </h1>
                </div>
                <div className='links'>
                    <NavLink to='/'>home</NavLink>
                    <NavLink   to='/'>product</NavLink>
                    <NavLink  to='/Team' >team</NavLink>
                    <NavLink to='/'>About</NavLink>
                </div>
                <div className='cart'>
                    <button>Free trial</button>
                </div>
            </main>
            <div className='getStarted'>
                <div className='text'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati officia sunt, consequatur et dolore repellendus a ullam. Cupiditate obcaecati magni enim sed dolorum maiores iste dolore praesentium numquam, repudiandae explicabo?
                    </p>
                    <button>Get Started</button>
                </div>
                <div className='pic'>
                    <img src= {introImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Nav;