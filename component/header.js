import style from '../styles/Header.module.css'
import { useState } from "react";

function Header(props) {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)
  return (
    <header className={props.active?style.header+' '+style.active:style.header}>
      <div className="containerGlobal">
        <div className={props.active?style.contentHeader+' '+style.active:style.contentHeader}>
          <a href="#" className={style.brand}>
            <img src="/vercel_white.svg" alt="logo brand" style={{ height: props.active?'30px':'40px', transition: 'all 0.5s ease' }} />
          </a>
          <div className={style.menu+' '+style.showOnlyLarge}>
            <a href="#">Beranda</a>
            <a href="#">Kegiatan</a>
            <a href="#">Galeri</a>
            <a href="#">Donasi</a>
            <a href="#">Kontak</a>
          </div>
          <div className={style.menu+' '+style.hiddenOnlyLarge}>
              <img src="/icon/menu.svg" alt="icon menu" className={style.btnMenu} onClick={handleClick} />
          </div>
        </div>
        <div className={visible?style.hiddenMenu+' '+style.active:style.hiddenMenu}>
          <a href="#">Beranda</a>
          <a href="#">Kegiatan</a>
          <a href="#">Galeri</a>
          <a href="#">Donasi</a>
          <a href="#">Kontak</a>
        </div>
      </div>
    </header>
  )
}

export default Header