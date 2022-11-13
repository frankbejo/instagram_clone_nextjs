import '../styles/globals.css'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <main className={styles.main}>
    <Navbar {...pageProps}/>
    <Component {...pageProps} />
  </main>
}

export default MyApp
