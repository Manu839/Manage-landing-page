
import companyLogoWhite from '../assets/images/logo.svg';
import facebookLogo from '../assets/images/icon-facebook.svg';
import youtubeLogo from '../assets/images/icon-youtube.svg';
import twitterLogo from '../assets/images/icon-twitter.svg';
import pinterestLogo from '../assets/images/icon-pinterest.svg';
import instagramLogo from '../assets/images/icon-instagram.svg';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const emailValidation = () => {
        const emailtest = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (emailtest.test(email)) {
          setMessage("");
        } else if (!emailtest.test(email) && email !== "") {
          setMessage("Please insert a valid mail");
        } else {
          setMessage("");
        }
      };
      const handleOnChange = (e) => {
          setEmail(e.target.value);
        };
  
  return (
    <div className='bg-veryDarkBlue'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          <div>
            <img src={companyLogoWhite} className='h-8' alt='' />
          </div>
          <div className='flex justify-center space-x-4'>

            <a href='/'>
              <img src={facebookLogo} className='h-8' alt='' />
            </a>

            <a href='/'>
              <img src={youtubeLogo} className='h-8' alt='' />
            </a>
        
            <a href='/'>
              <img src={twitterLogo} className='h-8' alt='' />
            </a>
     
            <a href='/'>
              <img src={pinterestLogo} className='h-8' alt='' />
            </a>
 
            <a href='/'>
              <img src={instagramLogo} className='h-8' alt='' />
            </a>
          </div>
        </div>

        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='/' className='hover:text-brightRed'>
              Home
            </a>
            <a href='/' className='hover:text-brightRed'>
              Pricing
            </a>
            <a href='/' className='hover:text-brightRed'>
              Products
            </a>
            <a href='/' className='hover:text-brightRed'>
              About
            </a>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='/' className='hover:text-brightRed'>
              Careers
            </a>
            <a href='/' className='hover:text-brightRed'>
              Community
            </a>
            <a href='/' className='hover:text-brightRed'>
              Privacy Policy
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                value={email}
                onChange={handleOnChange}
                type=''
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Updated in your inbox'
              />
              <button onClick={emailValidation} className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
            <div className='text-red-400'>{message}</div>
          </form>
          <div className='hidden text-white md:block'>
            Copyright © 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;