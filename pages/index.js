import { useEffect, useState } from "react";
import Head from 'next/head'
import Footer from '../component/footer'
import Header from '../component/header'
import Banner from '../component/Home/banner'
import Contact from '../component/Home/contact'
import Donation from '../component/Home/donation'
import EventType from '../component/Home/event_type'

export default function Home() {
  const [active, setActive] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  return (
    <>
      <Head>
        <title>Sedekah Air Wonosobo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header active={active}></Header>

      <Banner></Banner>

      <EventType></EventType>

      <Donation></Donation>

      <Contact></Contact>

      <Footer></Footer>
    </>
  )
}
