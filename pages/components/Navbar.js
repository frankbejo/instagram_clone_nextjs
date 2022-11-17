import textLogo from '../../public/textlogo.png'
import Link from 'next/link'
import Image from 'next/image'
import {GrHomeRounded, GrSearch} from 'react-icons/gr'
import {MdOutlineExplore} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'

function Navbar(){
    return (
        <nav className='flex flex-col gap-10 sticky p-1 top-0 h-screen z-50 max-xl:w-auto  ' >
            <Link href="/" className='brand_logo_container flex items-center h-12'>
                <FiInstagram className='w-6 h-6 xl:hidden'/>
                <div className="brand_logo max-xl:hidden relative w-32 h-12 -ml-1">
                    <Image src={textLogo} alt="" layout='fill' objectFit='contain'/>
                </div>
            </Link>
            <div className="navlinks">
                <Link href="/"><GrHomeRounded className='home_icon w-6 h-6'/><span className='max-xl:hidden'>Home</span></Link>
                <Link href="/"><GrSearch className='w-6 h-6'/><span className='max-xl:hidden'>Search</span></Link>
                <Link href="/explore"><MdOutlineExplore className='w-6 h-6'/><span className='max-xl:hidden'>Explore </span></Link>
                <Link href="/"><RiMessengerLine className='w-6 h-6'/><span className='max-xl:hidden'>Messages</span></Link>
                <Link href="/"><AiOutlineHeart className='w-6 h-6'/><span className='max-xl:hidden'>Notifications</span></Link>
                <Link href="/"><BiMessageSquareAdd className='w-6 h-6'/><span className='max-xl:hidden'>Create</span></Link>
                <Link href="/"><span className='max-xl:hidden'>Profile</span></Link>
            </div>
            
        </nav>
    )
}




export default Navbar