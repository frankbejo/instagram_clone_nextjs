import styles from '../../styles/Home.module.css'

const game = []
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
                        return <li key={post._id}>
                            {
                                users.filter(user => post.post_owner_id === user._id
                                ).map(item => {
                                    return item._id
                                })
                            }
                            {post.post_owner_name}
                            </li>
                    }):
                    null
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default Newsfeed