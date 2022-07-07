import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools For Devs</title>
        <meta name="description" content="All the tools you need in one place" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>" />
      </Head>

      <main className={styles.main}>
          <code className={styles.code}>toolsfordevs</code>

        <div className={styles.grid}>
          <a href="https://github.com/skylerstyron/toolsfordevs#readme" target="_blank" className={styles.card}>
            <h2>VIEW README &rarr;</h2>
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
