import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("https://instagram-clone-nextjs-mauve.vercel.app/api/posts")
    const data = await res.json()
    return { props: { 
        data } 
    }}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        {/* {
          data ?
          data.map(item => {
            return <li key={item._id}>{`${item.post_owner_id}${item.post_owner_name}`}</li>
          })
          :
          null
        } */}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
