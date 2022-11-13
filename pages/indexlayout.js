import styles from '../styles/Home.module.css'

const IndexLayout = ({children}) => {
    return( <main className={styles.home_container}>
            {children}
        </main>
    )
}

export default IndexLayout