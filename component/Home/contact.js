import style from '../../styles/Contact.module.css'

function Contact() {
  return(
    <section id="kontak" className={style.contact}>
      <div className="containerGlobal">
        <div className={style.row}>
          <div className={style.detail}>
            <div className={style.item}>
              <div className={style.avatar}>
                s
              </div>
              <div>
                <h4 className={style.title}>Judul</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cum quos dolorem
                </p>
              </div>
            </div>
          </div>
          <div className={style.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9563928608527!2d109.90090411443015!3d-7.358785174448189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa0ff266df64d%3A0xbb86598aeb9508b!2sAlun-Alun%20Wonosobo!5e0!3m2!1sen!2sid!4v1615301204474!5m2!1sen!2sid" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact