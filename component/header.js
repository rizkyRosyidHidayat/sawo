import style from '../styles/Header.module.css'
import cn from 'classnames'

function Header(props) {
  return (
    <header className={props.active?style.header+' '+style.active:style.header}>
      <div className="containerGlobal">
        <div className={props.active?style.contentHeader+' '+style.active:style.contentHeader}>
          <a href="#" className={style.brand}>
            <img src="/vercel_white.svg" alt="logo brand" style={{ height: props.active?'30px':'40px', transition: 'all 0.5s ease' }} />
          </a>
          <div className={style.menu}>
            <a href="#">Beranda</a>
            <a href="#">Kegiatan</a>
            <a href="#">Galeri</a>
            <a href="#">Donasi</a>
            <a href="#">Kontak</a>
            {/* <a href="javascript:void(0)">
              <img src="/icon/menu.svg" alt="icon menu"/>
            </a> */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header