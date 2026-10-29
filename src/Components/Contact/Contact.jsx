import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
    return (
        <>
            <section id="contact">
                <h1>CONTACT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
                    similique voluptas!
                </p>
                <div className="container">
                    <img src="/about.jpg" alt="about" />
                    <div className="content">
                        <h3>Let's connect</h3>
                        <div>
                            <p>Phone</p>
                            <span>+92 3248817986</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>ahmedraza.jpg@gmail.com</span>
                        </div>
                        <div>
                            <p>Address</p>
                            <span>Quaidabad Landhi Karachi.</span>
                        </div>
                        <ul>
                            <Link to={""} >
                                <RiFacebookBoxLine />
                            </Link>
                            <Link to={""} >
                                <RiFacebookBoxLine />
                            </Link>
                            <Link to={""} >
                                <RiFacebookBoxLine />
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;