import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import DesignCard from "./DesignCard";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const DesignSwiper = ({
    items,
    prevRef,
    nextRef,
    setCurrentPage,
    onCardClick
}) => {


    return (

        <div className="design-swiper-wrap fade-item">

            <Swiper

                modules={[Navigation]}

                spaceBetween={30}

                slidesPerView={4}
                slidesPerGroup={4}

                /* loop={true} */

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                onBeforeInit={(swiper) => {

                    swiper.params.navigation.prevEl =
                        prevRef.current;

                    swiper.params.navigation.nextEl =
                        nextRef.current;

                }}

                onSlideChange={(swiper)=>{

                    const group =
                        swiper.params.slidesPerGroup || 1;

                    setCurrentPage(
                        Math.floor(
                            swiper.activeIndex / group
                        ) + 1
                    );

                }}

                breakpoints={{

                    0:{
                        slidesPerView:1,
                        slidesPerGroup: 1,
                    },

                    768:{
                        slidesPerView:2,
                        slidesPerGroup: 2,
                    },

                    1024:{
                        slidesPerView:3,
                        slidesPerGroup: 3,
                    },

                    1440:{
                        slidesPerView:4,
                        slidesPerGroup: 4,
                    }

                }}

            >

                {

                    items.map(item=>(

                        <SwiperSlide
                            key={item.id}
                        >

                            <DesignCard
                                item={item}
                                onClick={onCardClick}
                            />

                        </SwiperSlide>

                    ))

                }

            </Swiper>

        </div>

    );

};

export default DesignSwiper;