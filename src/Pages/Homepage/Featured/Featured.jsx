import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import f from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
    return (
         <section className="featured bg-fixed text-white pt-8 my-20">
            <SectionTittle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTittle>
            <div className="flex items-center justify-center px-32 pb-20 pt-12">
                <div className="">
                    <img src={f} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maxime, 
                        animi modi quidem commodi minus consequuntur est beatae deleniti,
                         sapiente accusantium repudiandae maiores harum nihil provident assumenda quis magnam voluptate!</p>
                         <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
         </section>
    );
};

export default Featured;