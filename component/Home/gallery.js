import { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Thumbs, Autoplay, Lazy]);

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="pt-20 bg-white">
      <div className="container">
        <div className="mx-auto w-3/4">
          {/* <h3 className="text-center font-bold text-3xl">
            Galeri Foto
          </h3> */}
          <div></div>
          {/* Controlled Swiper -> store swiper instance */}
          <Swiper 
            slidesPerView={4}
            spaceBetween={32}
            onSwiper={setThumbsSwiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            watchSlidesVisibility
            watchSlidesProgress
            className="mb-8">
            <SwiperSlide className="cursor-pointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
            </SwiperSlide>
          </Swiper>
          {/* Main Swiper -> pass controlled swiper instance */}
          <Swiper lazy={true} thumbs={{ swiper: thumbsSwiper }}>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-1.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hidden"></div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-2.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hidden"></div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <img data-src="https://swiperjs.com/demos/images/nature-3.jpg" className="swiper-lazy" /> */}
              <img src="/image/photo_banner.png" alt="photo banner" width="100%" height="auto" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white hidden"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Gallery