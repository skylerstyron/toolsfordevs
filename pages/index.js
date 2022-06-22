import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools For Devs</title>
        <meta name="description" content="All the tools you need in one place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <code className={styles.code}>toolsfordevs</code>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Coming Soon &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          <p className={styles.description}>
            Powered by{' '}
            <code className={styles.code}>brain wrinkles</code>
          </p>
      </footer>
    </div>
  )
}
