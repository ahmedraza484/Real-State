import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiInstagramLine,RiLinkedinBoxLine} from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
          <div className="container_1">
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
              <Link to={""} ><RiFacebookBoxLine /></Link>
              <Link to={""} ><RiInstagramLine /></Link>
              <Link to={""} ><RiLinkedinBoxLine /></Link>
            </ul>
          </div>

          <div className="container_2">
            <h3>We'd love to hear from you</h3>
            <form>
              <div>
                <input type="text" placeholder="Your Name" required/>
                <input type="email" placeholder="Email" required/>
              </div>
              <textarea rows="4" placeholder="Your Message..." required/>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;