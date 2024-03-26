import React from 'react'
import { Link } from "react-router-dom";
import { IoMdHome  } from "react-icons/io";
import { BsBookmarkHeartFill  } from "react-icons/bs";
import { MdOutlineTravelExplore  } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";


const Sidebar = () => {
  const authUser = false;
  
  return (
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r border-l-0 border-t-0 border-b-0 bg-glass rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-50/20 hover:bg-gray-100/10 duration-300
    '>
      <nav className='h-full flex flex-col gap-3'>
        <Link to='/' className='flex justify-center'>
            <img className='h-8' src='/github.svg' alt='Github Logo' />
        </Link>

        <Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-red-800/30'
				>
					<IoMdHome size={27} />
				</Link>

        {authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-red-800/30'
					>
						<BsBookmarkHeartFill  size={22} />
					</Link>
				)}

				{authUser && (
					<Link
						to='/explore'
						className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-red-800/30'
					>
						<MdOutlineTravelExplore  size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-red-800/30'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-red-800/30'
					>
						<MdEditDocument size={25} />
					</Link>
				)}
        {authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}
      </nav>
    </aside>
  )
}

export default Sidebar