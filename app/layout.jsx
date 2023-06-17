import Head from "next/head";
import Header from "./Header";

export default function RootLayout ({children}) {
    return(
    <div>
      <Head>
        <title>LMS Class Live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
            <style jsx>{`
        main {
          padding: 1rem 0.5rem;
          // flex: 1;
          // display: flex;
          // flex-direction: column;
          // justify-content: center;
          // align-items: center;
        }
        footer {
          width: 100%;
          height: 40px;
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