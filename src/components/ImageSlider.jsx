import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const ImageSlider = ({ imagesArray }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {imagesArray.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={image} alt="slider image" loading="lazy" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ImageSlider;
