import { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import styles from '../../styles/Gallery.module.css'

SwiperCore.use([Thumbs, Autoplay, Lazy]);

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className={styles.gallery}>
      <div className="containerGlobal">
        <div className={styles.row}>
          {/* <h3 className="text-center font-bold text-3xl">
            Galeri Foto
          </h3> */}
          <div></div>
          {/* Controlled Swiper -> store swiper instance */}
          <Swiper 
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            spaceBetween={32}
            onSwiper={setThumbsSwiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            watchSlidesVisibility
            watchSlidesProgress
            className="mb8">
            <SwiperSlide className="cursorPointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursorPointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursorPointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursorPointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
          </Swiper>
          {/* Main Swiper -> pass controlled swiper instance */}
          <Swiper lazy={true} thumbs={{ swiper: thumbsSwiper }}>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hiddenGlobal"></div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-2.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hiddenGlobal"></div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-3.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hiddenGlobal"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Gallery