import React from 'react'
import "./Footer.css"
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='mainfooter'>
        <div className='footerheading'>
          Contact Information
        </div>
        <div className='topfooter1'>
            <span className='top'><MdLocationOn /> <h4 className='contactinfo'> 12-E3D, chennai-600119</h4></span>
            <span className='top'><FaPhoneAlt /> <h4 className='contactinfo'> 123-3422-1209</h4></span>
            <span className='top'><TbDeviceLandlinePhone /> <h4 className='contactinfo'> 992-546-7322</h4></span>
        </div>
        <div className="topfooter2">
            <span className='top'><IoIosPhonePortrait /> <h4 className='contactinfo'> +91 8009328101</h4></span>
            <span className='top'><IoLogoWhatsapp /> <h4 className='contactinfo'> +91 7984830632( only for whatapp)</h4></span>
            <span className='top'><IoMdMail /> <h4 className='contactinfo'> info@tourindia.com</h4></span>
        </div>
        <div className='middlefooter'></div>
        <div className='bottomfooter'>
            <span className='bottom'><TiSocialTwitter /></span>
            <span className='bottom'><TiSocialFacebook /></span>
            <span className='bottom'><TiSocialLinkedin /></span>
            <span className='bottom'><TiSocialYoutube /></span>   
        </div>
    </div>
  )
}

export default Footer;