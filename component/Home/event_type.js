import styles from '../../styles/Event.module.css'

function EventType() {
  return (
    <section style={{ backgroundColor: '#F5F7FC' }} className={styles.eventType}>
      <div className="containerGlobal">
        <div className={styles.card}>
          <h3 className="text-section">
            Jenis Kegiatan
          </h3>
          <div className="line-title-section"></div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
            dignissimos amet, tempore sequi doloremque vel nisi. Aliquid 
            similique fuga incidunt corrupti exercitationem!
          </p>
          <div className={styles.row}>
            <div className="textCenter">
              <div className={styles.avatar}></div>
              <h4 className={styles.name}>Nama Tipe Kegiatan</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
                dignissimos amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventType