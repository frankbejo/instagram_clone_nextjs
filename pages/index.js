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
  }
}

export default function Home({posts, users}) {
  return (
    <div className='w-full p-5'>
      <section className="home flex justify-center w-full gap-8">
        <Newsfeed posts={posts} users={users}/>
        <Account users={users}/>
      </section>
      </div>
  )
}
