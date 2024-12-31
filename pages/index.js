import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <Script
          type="text/javascript"
          src="data:text/javascript;base64,CihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgZWxlbWVudFRhZywgd2lkZ2V0TmFtZSwgc2NyaXB0VXJsKSB7CiAgd2luZG93WydTZW9lbGxhSlNXaWRnZXQnXSA9IHdpZGdldE5hbWU7CiAgd2luZG93W3dpZGdldE5hbWVdID0gd2luZG93W3dpZGdldE5hbWVdIHx8IGZ1bmN0aW9uICgpIHsKICAgICh3aW5kb3dbd2lkZ2V0TmFtZV0ucSA9IHdpbmRvd1t3aWRnZXROYW1lXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cyk7CiAgfTsKCiAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUYWcpOwogIHZhciBmaXJzdFNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShlbGVtZW50VGFnKVswXTsKICAKICBzY3JpcHRFbGVtZW50LmlkID0gd2lkZ2V0TmFtZTsKICBzY3JpcHRFbGVtZW50LnNyYyA9IHNjcmlwdFVybDsKICBzY3JpcHRFbGVtZW50LmFzeW5jID0gdHJ1ZTsKCiAgLy8gV2FpdCB1bnRpbCB0aGUgc2NyaXB0IGlzIGZ1bGx5IGxvYWRlZCBiZWZvcmUgY2FsbGluZyBpbml0CiAgc2NyaXB0RWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHsKICAgIHdpbmRvd1t3aWRnZXROYW1lXSgnaW5pdCcsICdodHRwczovL25leHQtYmxvZ3Mtb2NocmUudmVyY2VsLmFwcC0xNzM1NjM5MDI4NzcyJyk7CiAgfTtxdWVyeTsKCiAgZmlyc3RTY3JpcHRFbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdEVsZW1lbnQsIGZpcnN0U2NyaXB0RWxlbWVudCk7Cn0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnc2VvZWxsYScsICdodHRwczovL3Nlb2VsbGEtc3RhZ2luZy5zMy5hbWF6b25hd3MuY29tL3NjcmlwdF92MS5qcycpOwo="
        ></Script>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
