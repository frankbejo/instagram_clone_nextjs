import styles from '../../styles/Home.module.css'
import textLogo from '../../public/textlogo.png'
import Link from 'next/link'
import Image from 'next/image'
import {GrHomeRounded, GrSearch} from 'react-icons/gr'
import {MdOutlineExplore} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.home}>
                <Image src={textLogo} alt=""/>
            </Link>
            <div className={styles.navlinks}>
                <Link href="/"><GrHomeRounded />Home</Link>
                <Link href="/"><GrSearch />Search</Link>
                <Link href="/explore"><MdOutlineExplore />Explore</Link>
                <Link href="/"><RiMessengerLine />Messages</Link>
                <Link href="/"><AiOutlineHeart />Notifications</Link>
                <Link href="/"><BiMessageSquareAdd />Create</Link>
                <Link href="/">Profile</Link>
            </div>
            
        </nav>
    )
}



export default Navbar