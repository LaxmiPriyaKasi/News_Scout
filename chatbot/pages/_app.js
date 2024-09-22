import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
