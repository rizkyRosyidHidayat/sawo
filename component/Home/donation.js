import styles from '../../styles/Donation.module.css'

function Donation() {
  const donatur = [
    { name: 'Hamba Allah', value: 500000 }
  ]
  return (
    <div className="relativeGlobal">
      <div className={styles.bgDonation}></div>
      <section className={`${styles.banner}`}>
        <div className="container">
          <h3 className="title-section">
            Total Donasi
          </h3>
          <div className="line-title-section-white"></div>
          <div className="textCenter mb6">
            <h1 className={styles.donation}>Rp. 100.000.000 ,00</h1>
            <b>DONATUR TERBARU</b>
          </div>
          <div className={styles.row}>
            <div className={styles.col} style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
              <div className={styles.avatar}>S</div>
              <span className="mrAuto">ss</span>
              <b>Rp. 500.000</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation