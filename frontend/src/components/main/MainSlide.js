// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../scss/main/mainSlide.css'

function MainSlide(props) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{
      //   delay: 3000,             // 3초마다 슬라이드 전환
      //   disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 계속
      // }}
      loop={true}                // 슬라이드를 무한 반복
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div>히노키 앤 시더우드</div>
        <img src={`/imgs/main/main_slide1.avif`} alt="Slide 1"/>
      </SwiperSlide>
      <SwiperSlide>
        <div>행복한 홀리데이를 위해</div>
        <img src={`/imgs/main/main_slide2.jpg`} alt="Slide 2"/>
        </SwiperSlide>
      <SwiperSlide>
        <div>베스트셀러</div>
        <img src={`/imgs/main/main_slide3.jpg`} alt="Slide 3"/>
        </SwiperSlide>
    </Swiper>
  );
}

export default MainSlide;