import Head from 'next/head'
import Footer from '../component/footer'
import Banner from '../component/Home/banner'
import Contact from '../component/Home/contact'
import Donation from '../component/Home/donation'
import EventType from '../component/Home/event_type'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sedekah Air Wonosobo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner></Banner>

      <EventType></EventType>

      <Donation></Donation>

      <Contact></Contact>

      <Footer></Footer>
    </>
  )
}
