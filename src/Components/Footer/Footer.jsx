import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";
    return (
        <>
            <footer className={isHomePage ? 'homePage_footer otherPage_footer' : 'otherPage_footer'}>
                <div className="container">
                    <h4>LUXURY RENTALS</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae sunt repudiandae mollitia, illum illo perferendis obcaecati maiores distinctio quo.</p>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/termsandconditions"}>Terms And Condition</Link>
                        </li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <div className="container">
                    <h4>Connect with us</h4>
                    <p>+92 3248817986</p>
                    <p>ahmedraza.jpg@gmail.com</p>
                    <p>All Rights Reserved By Ahmed Raza</p>
                </div>
            </footer>
        </>
    )
}

export default Footer