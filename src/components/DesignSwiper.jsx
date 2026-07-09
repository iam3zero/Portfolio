import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

import DesignCard from "./DesignCard";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const DesignSwiper = ({ items }) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (

        <div className="design-swiper-wrap">

            <div className="design-navigation">

                <button
                    className="design-arrow prev"
                    ref={prevRef}
                >
                    <FiArrowLeft />
                </button>

                <button
                    className="design-arrow next"
                    ref={nextRef}
                >
                    <FiArrowRight />
                </button>

            </div>

            <Swiper

                modules={[Navigation]}

                spaceBetween={30}

                slidesPerView={4}

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

                breakpoints={{

                    0:{
                        slidesPerView:1,
                    },

                    480:{slidesPerView:2},

                    768:{
                        slidesPerView:2,
                    },

                    1024:{
                        slidesPerView:3,
                    },

                    1440:{
                        slidesPerView:4,
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
                            />

                        </SwiperSlide>

                    ))

                }

            </Swiper>

        </div>

    );

};

export default DesignSwiper;