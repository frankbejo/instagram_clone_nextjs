import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Newsfeed from './components/Newsfeed'
import Account from './components/Account'

export async function getServerSideProps() {
  const resposts = await fetch("https://instagram-clone-nextjs-tau.vercel.app/api/posts")
  const resusers = await fetch("https://instagram-clone-nextjs-tau.vercel.app/api/users")
  const posts = await resposts.json()
  const users = await resusers.json()
  return { props: { 
      posts: posts,
      users: users}
  }}


export default function Home({posts, users}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home_container}>
        <Newsfeed posts={posts} users={users}/>
        <Account users={users}/>
      </div>
    </div>
  )
}
