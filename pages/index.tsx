import Head from 'next/head';
// @ts-ignore
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mint.It | Mint It!</title>
  
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://mintprint.io">Mint<b>.</b>it!</a>
        </h1>

        <p className={styles.description}>
          Mint and Print NFT's on the Expanse Blockchain!
        </p>

        <div className={styles.grid}>
          <Link href="/mint">
                <a className={styles.card}>
                  <h3>Mint &rarr;</h3>
                  <p>Don't have a token, mint one now.</p>
                </a>
          </Link>

          <Link href="/print">
              <a className={styles.card}>
                <h3>Print &rarr;</h3>
                <p>Mint your token (NFT)!</p>
              </a>
          </Link>

          <Link href="/how">
            <a className={styles.card}>
              <h3>How it works? &rarr;</h3>
              <p>Learn how the process works!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://valist.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/valist.png" alt="Valist Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
