import React, { useState } from 'react'
import {Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function Navbar(props) {

    const user = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png";
    const logo = "https://cdn.worldvectorlogo.com/logos/netflix-3.svg";
    const [nav, setNav] = useState(false)



    const Hidenav = () =>{
      if(!nav){
        setNav(true)
      }
      else{
        setNav(false)
      }
    }
  return (  

    <div className='clear'>
        <nav className='w-11/12 gap-6 m-auto flex justify-between items-center py-5'>
            <div className='flex justify-center items-center text-white'>
              
                <Link to='/' className="logo">
                    <img className='text-3xl w-32' src={logo} alt="Logo" />
                </Link>
            </div>

            <button className={`md:hidden max-sm:${"fixed right-3 z-40"}  text-white focus:outline-none`} onClick={Hidenav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8" /* Adjust size as needed */
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" /* Ensures it uses the current text color */
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div
  className={`flex gap-3 justify-between w-full items-center text-white 
              ${nav ? 'max-sm:block z-30 fixed bg-gray-300/50 backdrop-blur-lg h-[100vh] w-1/2 right-0 top-0 space-y-4 px-2 text-black py-28' : 'max-sm:hidden'}`}>
  
  {/* Navigation Links */}
  <div className={`flex gap-3 ${nav ? 'max-sm:block text-black w-full' : ''}`}>
    <Link
      className="max-sm:block max-sm:mb-4 max-sm:p-4 max-sm:bg-gray-200 rounded-md"
      to="/movie"
    >
      Movie
    </Link>
    <Link
      className="max-sm:block max-sm:mb-4 max-sm:p-4 max-sm:bg-gray-200 rounded-md"
      to="/movie/tv-series"
    >
      TV Series
    </Link>
    <Link
      className="max-sm:block max-sm:mb-4 max-sm:p-4 max-sm:bg-gray-200 rounded-md"
      to="/movie/kids"
    >
      Kids
    </Link>
    <Link
      className="max-sm:block max-sm:mb-4 max-sm:p-4 max-sm:bg-gray-200 rounded-md"
      to="/search"
    >
      Search
    </Link>
  </div>

  {/* Avatar */}
  <div
    className={`w-12 h-12 flex justify-center items-center bg-gray-50/30 backdrop-blur-md rounded-full 
                ${nav ? 'max-sm:absolute bottom-4 right-4' : ''}`}
  >
    <img src="user.png" className="w-10 cursor-pointer" alt="avatar" />
  </div>
</div>

      </nav>

      <main>
        <Outlet/>
        {/* <Footer/> */}
      </main>
      
    </div>
  )
}

export default Navbar