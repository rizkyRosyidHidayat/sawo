import styles from '../../styles/Banner.module.css'

function Banner() {
  return (
    <>
      <div className={styles.bgBanner}></div>
      <section className={styles.banner}>
        <div className={styles.descBanner}>
          <h1 className="sm:text-6xl text-5xl font-bold">Sedekah Air Wonosobo</h1>
          <p className="my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
            dignissimos amet, tempore sequi doloremque vel nisi. Aliquid 
            similique fuga incidunt corrupti exercitationem!
          </p>
          <button className="button mb-12">
            Lihat Selengkapnya
          </button>
          <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
        </div>
      </section>
    </>
  )
}

export default Banner