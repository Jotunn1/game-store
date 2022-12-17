import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
            {/* TODO figure out why loop doesnt work properly with swiper */}
            {/* {imagesArray.map(image => {
                <SwiperSlide>
                    <img src={image} alt="" />
                </SwiperSlide>
            })} */}
            <SwiperSlide>
                <img src={imagesArray[0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={imagesArray[1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={imagesArray[2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={imagesArray[3]} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default ImageSlider