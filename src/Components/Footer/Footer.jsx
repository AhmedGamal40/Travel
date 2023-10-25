import React, { useEffect, useRef } from 'react'
import './Footer.css'
import video2 from '../../Assets/video-2.mp4'
import {FiSend , FiChevronRight} from 'react-icons/fi'
import { SiYourtraveldottv } from 'react-icons/si';
import {FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram , AiOutlineLinkedin} from 'react-icons/ai'
import{RiTwitterXFill} from 'react-icons/ri'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

const Footer = () => {
  // send mass to email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8qxb75d', 'template_e48puij', form.current, 'lwlfZlWSlXcuBC0fv')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  useEffect(()=>{
    Aos.init({duration:2000})
  } , [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContact container">
        <div className="contectDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="inputDiv flex">
              <input data-aos="fade-up"  type="text" name="mss" placeholder='Massagee' />
              <input data-aos="fade-up"  type="text" name="email" placeholder='EnterEmail Address' />
              <button data-aos="fade-up" className='btn flex' type='submit'> 
                  SEND <FiSend className="icon"/>
              </button>
            </div>

          </form>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            <a href='#' className='logo flex' >
            <SiYourtraveldottv className='icon'/>
             Travel.
          </a>
            </div>

            <div data-aos="fade-up" className="footerParagraphe">
              Travel company, a compass to guide your wanderlust,A helping hand to craft itineraries that inspire,
              A bridge to connect you with cultures and vistas,A concierge to navigate the unknown with ease,
              A partner to create memories that will last a lifetime.
              Travel company, your trusted companion on every journey,Where dreams become reality, and adventures await.
            </div>

            <div data-aos="fade-up" className="footerSocial">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <RiTwitterXFill className='icon'/>
            <AiOutlineLinkedin className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
        {/* Group One */}
            <div data-aos="fade-up"
            data-aos-duration="3000"
            className="linkGroups">
              <span className="gloupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>

             {/* Group Two */}
             <div data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroups">
              <span className="gloupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Hostelworld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivage
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>

             {/* Group Three */}
             <div data-aos="fade-up" 
             data-aos-duration="5000"
             className="linkGroups">
              <span className="gloupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Cairo
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Oceanis
              </li>
            </div>

          </div>

          <div className="footerDiv">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>© 2023 Copyright: Ahmed Gamal</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer