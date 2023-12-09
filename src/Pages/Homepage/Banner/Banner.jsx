import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import a from "../../../assets/home/01.jpg";
import b from "../../../assets/home/02.jpg";
import c from "../../../assets/home/03.png";
import d from "../../../assets/home/04.jpg";
import e from "../../../assets/home/05.png";
import f from "../../../assets/home/06.png";
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={a} />
                
            </div>
            <div>
                <img src={a} />
                
            </div>
            <div>
                <img src={b} />
                
            </div>
            <div>
                <img src={c} />
                
            </div>
            <div>
                <img src={d} />
                
            </div>
            <div>
                <img src={e} />
                
            </div>
            <div>
                <img src={f} />
                
            </div>
             
     </Carousel>
    );
};

export default Banner;