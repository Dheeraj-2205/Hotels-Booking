import '@/styles/globals.css'

import NextTopLoader from "nextjs-toploader";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css"
export default function App({ Component, pageProps }) {

  return (
    <>
      <NextTopLoader color='red'/>
      <Component {...pageProps} />
    </>
  )
}
