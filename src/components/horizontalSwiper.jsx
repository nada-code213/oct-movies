// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import MediaCard from "./mediaCard";

export default function HorizontalSwiper({ medias }) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper1"
      >
        {medias.map((e) => {
          return (
            <SwiperSlide className="swiper-media" key={e.id}>
              <MediaCard media={e} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
