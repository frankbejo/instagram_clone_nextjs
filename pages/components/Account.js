import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Account({user}){
    return(
        <div className={styles.account}>
            <div className={styles.account_switch}>
                <Link href="/profile">
                    <img src={user.image} alt="" />
                    <div className={styles.account_user}>
                        <span>{user.userName}</span>
                        <span>{`${user.firstName} ${user.lastName}`}</span>
                    </div>
                </Link>
                <span>Switch</span>
            </div>
            <div className={styles.follow_suggestions}>
                <div className={styles.header}>
                    <span>Suggestions For You</span>
                    <span>See All</span>
                </div>
            </div>
        </div>
    )
}

export default Account