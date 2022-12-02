import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../logo.png"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="bg-gray-300 shadow-md ">
        <div className='flex justify-center '>
          <img className='h-20 w-16 m-1' src={logo} alt="logo"/>
        </div>
        <div className="flex justify-center ">
          <h1 className="flex title-font font-medium  text-gray-900 mb-4 md:mb-0" href='/'>
            <span className=" text-xl">Lates Live News</span>
          </h1>
        </div>
        <div  className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link flex justify-center flex-wrap mt-3 pb-3 "}>
          {/* <div className='nav-list flex justify-center flex-wrap mt-3 pb-3'> */}
            <Link className=' hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5' to="/" >Home</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/business'>Business</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/entertainment'>Entertainment</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/general'>General</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/health'>Health</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/science'>Science</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/sports'>Sports</Link>

            <Link className=" hover:bg-red-600 hover:text-white hover:justify-center font-medium p-1 rounded-lg flex mr-5 " to='/technology'>Technology</Link>
          {/* </div> */}

        
        </div>
        <div className='manu absolute right-5 top-7'>
            <span className='font-bold text-lg' onClick={() => setShowMediaIcons(!showMediaIcons)} >
              <GiHamburgerMenu/>
              </span>
          </div>
      </nav>
                  {/* <div className='flex'>
                            <span className="mr-2 p-1 ">Country</span>

                            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 font-medium">
                                <option href="/in"> United Arab</option>
                                <option>Bulgaria</option>
                                <option>Brazil</option>
                                <option>Canada</option>
                                <option>Switzerland</option>
                                <option>China</option>
                                <option>Colombia</option>
                                <option>Germany</option>
                                <option>Egypt</option>
                                <option>France</option>
                                <option>United Kingdom</option>
                                <option>Greece</option>
                                <option>Hong Kong</option>
                                <option>Hungary</option>
                                <option>Indonesia</option>
                                <option>Ireland</option>
                                <option>Israel</option>
                                <option>Italy</option>
                                <option>Japan</option>
                                <option>Korea</option>
                                <option>Morocco</option>
                                <option>Mexico</option>
                                <option>Malaysia</option>
                                <option>Nigeria</option>
                                <option>Netherlands</option>
                                <option>Norway</option>
                                <option>New Zealand</option>
                                <option>Portugal</option>
                                <option>Poland</option>
                                <option>Philippines</option>
                                <option>Romania</option>
                                <option>Russian</option>
                                <option>Saudi Arabia</option>
                                <option>Sweden</option>
                                <option>Singapore</option>
                                <option>Slovenia</option>
                                <option>Slovakia</option>
                                <option>Thailand</option>
                                <option>Turkey</option>
                                <option>Taiwan</option>
                                <option>United States</option>
                                <option>Venezuela</option>
                                <option>South Africa</option>
                            </select>
                            <span className=" mt-3 -ml-8 h-full w-10 text-center text-gray-600 pointer-events-none">
                                <svg fill="none" stroke="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
 */}
    </div>
    
  )
}

export default Navbar;


