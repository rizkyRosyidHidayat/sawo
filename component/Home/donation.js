import styles from '../../styles/Donation.module.css'

function Donation() {
  const donatur = [
    { name: 'Hamba Allah', value: 500000 }
  ]
  return (
    <div className="relative">
      <div className={styles.bgDonation}></div>
      <section className={`${styles.banner} text-white h-screen flex items-center`}>
        <div className="container">
          <h3 className="text-center font-bold text-3xl">
            Total Donasi
          </h3>
          <div className="line-title-section-white"></div>
          <div className="text-center mb-6">
            <h1 className="lg:text-8xl md:text-7xl font-bold my-12">Rp. 100.000.000 ,00</h1>
            <div className="font-bold">DONATUR TERBARU</div>
          </div>
          <div className="lg:w-1/2 md:w-full mx-auto">
            <div className="flex items-center p-3 rounded text-gray-800 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600 text-white font-bold mr-4">S</div>
              <span className="mr-auto">ss</span>
              <div className="font-bold">Rp. 500.000</div>
            </div>
            <div className="flex items-center p-3 rounded text-gray-800" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600 text-white font-bold mr-4">S</div>
              <span className="mr-auto">ss</span>
              <div className="font-bold">Rp. 500.000</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation