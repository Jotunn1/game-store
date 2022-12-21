import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ImageSlider = ({ imagesArray }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {imagesArray.map((image) => {
                return (
                    <SwiperSlide>
                        <img src={image} alt="" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ImageSlider;
