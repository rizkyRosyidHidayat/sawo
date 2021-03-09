import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Sedekah Air Wonosobo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.banner}>
        <div className="text-center text-white w-2/3 mx-auto relative z-10 -mb-48">
          <h1 className="text-6xl font-bold">Sedekah Air Wonosobo</h1>
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

      <section style={{ backgroundColor: '#F5F7FC' }} className="pt-64 pb-24">
        <div className="container">
          <div className="shadow-2xl rounded-lg p-8 bg-white">
            <h3 className="text-center font-bold text-3xl">
              Jenis Kegiatan
            </h3>
            <div className="line-title-section"></div>
            <p className="mt-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
              dignissimos amet, tempore sequi doloremque vel nisi. Aliquid 
              similique fuga incidunt corrupti exercitationem!
            </p>
            <div className="grid grid-cols-3 gap-8 mt-32">
              <div className="text-center">
                <div className="rounded-full w-24 h-24 bg-blue-200 mx-auto"></div>
                <h4 className="font-bold text-xl my-6">Nama Tipe Kegiatan</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
                  dignissimos amet.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full w-24 h-24 bg-blue-200 mx-auto"></div>
                <h4 className="font-bold text-xl my-6">Nama Tipe Kegiatan</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cum quos dolorem voluptates et minus culpa ducimus corrupti, 
                  dignissimos amet.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full w-24 h-24 bg-blue-200 mx-auto"></div>
                <h4 className="font-bold text-xl my-6">Nama Tipe Kegiatan</h4>
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
    </>
  )
}
