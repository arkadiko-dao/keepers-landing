import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import Faq from '../components/faq'
import Footer from '../components/footer'
import gradient from '../public/mesh-keepers-0.png'
import Triggers from '../components/triggers'
import GetStarted from '../components/get-started'


const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Decentralized smart contract automation for Stacks developers" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:site" content="@ArkadikoFinance" />
        <meta name="twitter:creator" content="@ArkadikoFinance" key="twhandle" />
        <meta name="twitter:title" content="Arkadiko Keepers - Decentralized smart contract automation for Stacks developers" />

        {/* Open Graph */}
        <meta property="og:image" content="https://www.arkadiko.finance/logo_full.png" key="ogimage" />
        <meta property="og:title" content="Arkadiko Keepers - Arkadiko Finance" />
        <meta property="og:site_name" content="Arkadiko Keepers" />
        <meta property="og:url" content="https://arkadiko.finance" />
        <meta property="og:description" content="Decentralized smart contract automation for Stacks developers." />
        <meta property="og:type" content="website" />

        <title>Arkadiko Keepers - Decentralized smart contract automation for Stacks developers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="font" />
      </Head>

      <div>
        <div className="fixed w-screen h-screen overflow-hidden" style={{zIndex: "-2"}}>
          <Image
            alt=""
            loader={myLoader}
            src={gradient}
            layout="fill"
            objectFit="cover"
            quality={100}
            unoptimized={true}
          />
        </div>
        <div className="fixed w-screen h-screen overflow-hidden" style={{zIndex: "-1"}}>
          <Image
            loader={myLoader}
            alt=""
            src="/network.svg"
            layout="fill"
            objectFit="cover"
            quality={100}
            unoptimized={true}
          />
        </div>


        <Header />

        <div style={{height: 'calc(100vh - 80px)'}}>
          <Hero />
        </div>
      </div>

      <main>
        <Triggers />
        <GetStarted />
        <Faq />
      </main>

      <Footer />
    </div>
  )
}
