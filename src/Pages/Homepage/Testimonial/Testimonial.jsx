import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

 

const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('reviews.json');
                const data = await response.json();
                setReview(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <SectionTittle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTittle>
            <Swiper
                navigation={true}
                className="mySwiper"
            >
                {review.map((r) => (
                    <SwiperSlide key={r._id}>
                        <div className="flex flex-col items-center my-10 mx-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={r.rating} // Corrected value
                                readOnly
                            />
                            <p>{r.details}</p>
                            <h1 className="text-2xl text-orange-400">{r.name}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonial;
