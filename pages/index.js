import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <script type="text/javascript" src="data:text/javascript;base64,CiAgKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBlbGVtZW50VGFnLCB3aWRnZXROYW1lLCBzY3JpcHRVcmwpIHsKICAgIHdpbmRvd1snU2VvZWxsYUpTV2lkZ2V0J10gPSB3aWRnZXROYW1lOwogICAgd2luZG93W3dpZGdldE5hbWVdID0gd2luZG93W3dpZGdldE5hbWVdIHx8IGZ1bmN0aW9uICgpIHsKICAgICAgKHdpbmRvd1t3aWRnZXROYW1lXS5xID0gd2luZG93W3dpZGdldE5hbWVdLnEgfHwgW10pLnB1c2goYXJndW1lbnRzKTsKICAgIH07CiAgCiAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFRhZyk7CiAgICB2YXIgZmlyc3RTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoZWxlbWVudFRhZylbMF07CiAgICAKICAgIHNjcmlwdEVsZW1lbnQuaWQgPSB3aWRnZXROYW1lOwogICAgc2NyaXB0RWxlbWVudC5zcmMgPSBzY3JpcHRVcmw7CiAgICBzY3JpcHRFbGVtZW50LmFzeW5jID0gdHJ1ZTsKICAKICAgIC8vIFdhaXQgdW50aWwgdGhlIHNjcmlwdCBpcyBmdWxseSBsb2FkZWQgYmVmb3JlIGNhbGxpbmcgaW5pdAogICAgc2NyaXB0RWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHsKICAgICAgd2luZG93W3dpZGdldE5hbWVdKCdpbml0JywgJ2h0dHBzOi8vbmV4dC1ibG9ncy1vY2hyZS52ZXJjZWwuYXBwLTE3MzYzMzY4NTM1NzYnKTsKICAgIH07cXVlcnk7CiAgCiAgICBmaXJzdFNjcmlwdEVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2NyaXB0RWxlbWVudCwgZmlyc3RTY3JpcHRFbGVtZW50KTsKICB9KSh3aW5kb3csIGRvY3VtZW50LCAnc2NyaXB0JywgJ3Nlb2VsbGEnLCAnaHR0cHM6Ly9zZW9lbGxhLXN0YWdpbmcuczMuYW1hem9uYXdzLmNvbS9zY3JpcHRfdjEuanMnKTsKICA="></script>
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
