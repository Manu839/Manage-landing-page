import { useState } from 'react';
import companyLogo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';

function OpenedNav() {
    return (
        <div className='nav--opened-menu z-50 top-24 absolute text-center w-10/12 px-5 shadow-2xl sm:hidden'>
            <ul className='text-center grid place-items-center font-bold text-xl'>
                <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit mt-8 my-2.5'><a href='/'>Pricing</a></li>
                <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='/'>Product</a></li>
                <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='/'>About us</a></li>
                <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='/'>Careers</a></li>
                <li className='uppercase cursor-pointer ease-in duration-300 border-b-2 border-transparent border-solid hover:border-black w-fit my-2.5'><a href='/'>Community</a></li>
            </ul>
            
        </div>
    )
}

const Navbar = () => {
  const [navBarStatus, setNavBarStatus] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
  
      <div className='flex items-center justify-between'>
    
        <div className='pt-2'>
          <img src={companyLogo} alt='' />
        </div>
        <div className='hidden space-x-6 md:flex'>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
   
        <a
          href='/'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Get Started
        </a>
        <div className='w-full px-7 py-10 flex justify-between items-center sm:hidden  sm:px-12 2xl:px-20'>
                { navBarStatus ? <img className='w-8 sm:hidden mx-20' src={hamburger} alt='hamburger icon' onClick={() => setNavBarStatus(false)}/> : <img className='w-8 sm:hidden mx-20' src={close} alt='close icon' onClick={() => setNavBarStatus(true)}/> }
            </div>

            {navBarStatus===false && <OpenedNav />  }
            </div>
    </nav>
  );
};

export default Navbar;