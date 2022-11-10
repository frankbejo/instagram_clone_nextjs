import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import textLogo from '../../public/textlogo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.home}><Image src={textLogo} alt=""/></Link>
            {/* {
                data.map(item => {
                    console.log(item)
                })
            } */}
        </nav>
    )
}



export default Navbar