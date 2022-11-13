import styles from '../../styles/Home.module.css'
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
        <nav className={styles.navbar}>
            <Link href="/" className={styles.brand_logo}>
                <FiInstagram />
                <Image src={textLogo} alt=""/>
            </Link>
            <div className={styles.navlinks}>
                <Link href="/"><GrHomeRounded /><span>Home</span></Link>
                <Link href="/"><GrSearch /><span>Search</span></Link>
                <Link href="/explore"><MdOutlineExplore /><span>Explore </span></Link>
                <Link href="/"><RiMessengerLine /><span>Messages</span></Link>
                <Link href="/"><AiOutlineHeart /><span>Notifications</span></Link>
                <Link href="/"><BiMessageSquareAdd /><span>Create</span></Link>
                <Link href="/"><span>Profile</span></Link>
            </div>
            
        </nav>
    )
}



export default Navbar