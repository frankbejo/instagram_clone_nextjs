import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Account({users}){
    return(
        <div className={styles.account}>
            <div className={styles.account_switch}>
                <Link href="/profile">
                    <img src={users[0].image} alt="" />
                    <div className={styles.account_user}>
                        <span>{users[0].userName}</span>
                        <span>{`${users[0].firstName} ${users[0].lastName}`}</span>
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