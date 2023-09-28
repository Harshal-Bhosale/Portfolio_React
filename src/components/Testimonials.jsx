import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

import AV1 from '../assets/img/testimonial1.png'
import AV2 from '../assets/img/testimonial2.png'
import AV3 from '../assets/img/testimonial3.png'

const data = [
    {
        img: AV1,
        name: 'Narendra Mode',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi.'
    },
    {
        img: AV2,
        name: 'Donald Trump',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi.'
    },
    {
        img: AV3,
        name: 'Xi Hing Ping',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi.'
    },
    {
        img: AV2,
        name: 'Vladimir Putin',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi. Voluptates, asperiores veritatis quidem vitae officia quia enim labore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deserunt quasi.'
    }
]



const Testimonials = () => {
    return (
        <>
            <section className="testimonial section">
                <span className="section_subtitle">My Clients Say</span>
                <h2 className="section_title">Testimonials</h2>

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Autoplay]}
                    className="mySwiper"
                    loop={true}
                    reverseDirection={false}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <div className="testimonial_container container swiper ">
                        <div className="swiper-wrapper">
                            {
                                data.map(({ img, name, review }, index) => {
                                    return (
                                        <SwiperSlide key={index} className="testimonial_card swiper-slide">
                                            <div><img src={img} alt="testimonial-author-img" className="testimonial_img" /></div>
                                            <h3 className="testimonial_name">{name}</h3>
                                            <p className="testimonial_decription">{review}</p>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Swiper>
            </section >
        </>
    );
}

export default Testimonials
