import style from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className="bgWhite">
      <div className={style.containerFooter}>
        <p className={style.copyright}>Copyright &copy; {new Date().getFullYear()} Sedekah Air Wonosobo</p>
      </div>
    </footer>
  )
}

export default Footer