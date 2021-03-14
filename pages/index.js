import { useEffect, useState } from "react";
import Head from 'next/head'
import Footer from '../component/footer'
import Header from '../component/header'
import Banner from '../component/Home/banner'
import Contact from '../component/Home/contact'
import Donation from '../component/Home/donation'
import EventType from '../component/Home/event_type'
import Gallery from '../component/Home/gallery'

export default function Home() {
  const [active, setActive] = useState(false)

  const menuHeader = [
    {text: 'Beranda', id: 'beranda', active: true},
    {text: 'Kegiatan', id: 'kegiatan', active: false},
    {text: 'Galeri', id: 'galeri', active: false},
    {text: 'Donasi', id: 'donasi', active: false},
    {text: 'Kontak', id: 'kontak', active: false}
  ]
  const [menu, setMenu] = useState(menuHeader)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  
  const handleScroll = () => {
    // change menu header
    const elem = menuHeader.map(x => document.getElementById(x.id))
    const position = elem.map(x => x.getBoundingClientRect())
    position.map((x, i) => {
      if (x.top <= 0) {
        menuHeader.map((val, index) => {
          if (index === i ) {
            val.active = true
          } else {
            val.active = false
          }
        })
      }
    })
    setMenu(menuHeader)

    // change header
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

      <Header active={active} menu={menu}></Header>

      <Banner></Banner>

      <EventType></EventType>

      <Gallery></Gallery>

      <Donation></Donation>

      <Contact></Contact>

      <Footer></Footer>
    </>
  )
}
