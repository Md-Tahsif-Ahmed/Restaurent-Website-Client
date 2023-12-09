import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import s1 from "../../../assets/home/slide1.jpg";
import s2 from "../../../assets/home/slide2.jpg";
import s3 from "../../../assets/home/slide3.jpg";
import s4 from "../../../assets/home/slide4.jpg";
import s5 from "../../../assets/home/slide5.jpg";
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';
 
const Category = () => {
    return (
        <div className="">
             <SectionTittle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}>

             </SectionTittle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={s1} alt="" />
                <h3 className='text-center uppercase text-4xl text-white -mt-20'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide><img src={s2} alt="" />
                <h3 className='text-center uppercase text-4xl text-white -mt-20'>PIZZA</h3>
                </SwiperSlide>
                <SwiperSlide><img src={s3} alt="" />
                <h3 className='text-center uppercase text-4xl text-white -mt-20'>SOUPS</h3>
                </SwiperSlide>
                <SwiperSlide><img src={s4} alt="" />
                <h3 className='text-center uppercase text-4xl text-white -mt-20'>DESSERTS</h3>
                </SwiperSlide>
                <SwiperSlide><img src={s5} alt="" />
                <h3 className='text-center uppercase text-4xl text-white -mt-20'>SALADS</h3>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Category;
