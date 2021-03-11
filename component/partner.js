import styles from '../styles/Partner.module.css'

function Partner() {
  return (
    <section className={styles.partner}>
      <div className="containerGlobal">
        {/* <h2 className={styles.title}>Pihak yang Mendukung</h2> */}
        <div className={styles.row}>
          <div className={styles.col}>
            <img src="/image/adidas.png" alt="logo" width="120px"/>
          </div>
          <div className={styles.col}>
            <img src="/image/nike.png" alt="logo" width="120px"/>
          </div>
          <div className={styles.col}>
            <img src="/image/adidas.png" alt="logo" width="120px"/>
          </div>
          <div className={styles.col}>
            <img src="/image/nike.png" alt="logo" width="120px"/>
          </div>
          <div className={styles.col}>
            <img src="/image/adidas.png" alt="logo" width="120px"/>
          </div>
          <div className={styles.col}>
            <img src="/image/nike.png" alt="logo" width="120px"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner