import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.description}>
          <div className={styles.grid}>
          <div>
              <a className={styles.card} href='/index.tsx'>Home</a>
            </div>
            <div>
              <a className={styles.card} href='/about'>About</a>
            </div>
            <div>
              <a className={styles.card} href='/projects'>Projects</a>
            </div>
            <div>
              <a className={styles.card} href='/contact'>Contact</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
