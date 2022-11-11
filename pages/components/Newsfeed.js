import styles from '../../styles/Home.module.css'
import Post from './Post'

function Newsfeed({posts, users}){
    
    return(
        <div className={styles.newsfeed}>
            <div className={styles.user_stories}>
                stories
            </div>
            <div className={styles.feed}>
                <ul>
                    {
                    posts ? posts.map(post => {
                        return <Post post={post} users={users}/>
                    }):
                    null
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Newsfeed