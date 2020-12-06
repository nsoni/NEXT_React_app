import React from 'react'
import Head from 'next/head'
import "../styles/index.css"

//Do authantication, Redux store, external script, before loading action or any global configration here
function App({ Component, pageProps }){
  return (
    <div>
      <Head>
        <title>Upload Image Application</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
