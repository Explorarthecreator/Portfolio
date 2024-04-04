import {FaWpexplorer, FaHamburger} from 'react-icons/fa'

function NavBar() {
  return (
    <div className=" w-11/12 md:w-4/5 lg:w-3/4 shadow-xl m-auto p-3 md:p-5 bg-white rounded-xl flex justify-between items-center">
        <div className=' flex items-center gap-2'>
            <span className=' md:hidden'>
                <FaWpexplorer size={35}/>
            </span>
            <span className='hidden md:block lg:hidden'>
                <FaWpexplorer size={40}/>
            </span>
            <span className='hidden lg:block'>
                <FaWpexplorer size={60}/>
            </span>
            <h1 className=' font-alex text-4xl lg:text-7xl'>
                Explorar
            </h1>
        </div>
        <div className='lg:hidden'>
            <FaHamburger size={35}/>
        </div>

        <div className='hidden lg:flex gap-4 '>
            <a href="#header" className=' p-3 hover:shadow-xl font-mooli text-xl hover:text-2xl hover:font-medium' >
                Projects
            </a>
            <a href="#skills" className=' p-3 hover:shadow-xl font-mooli text-xl hover:text-2xl hover:font-medium'>
                Contact Me
            </a>
            <a href="#hue" className=' p-3 hover:shadow-xl font-mooli text-xl hover:text-2xl hover:font-medium'>
                About
            </a>
            {/* <a href="#he" className=' p-3 hover:shadow-xl font-mooli text-xl hover:text-2xl hover:font-medium'>
                Skills
            </a> */}
        </div>
    </div>
  )
}

export default NavBar