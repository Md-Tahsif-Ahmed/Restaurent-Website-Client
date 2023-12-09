import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hook/useMenu";
import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item)=>item.category === 'dessert');
    const soup = menu.filter((item)=>item.category === 'soup');
    const salad = menu.filter((item)=>item.category === 'salad');
    const pizza = menu.filter((item)=>item.category === 'pizza');
    const offered = menu.filter((item)=>item.category === 'offered');

    return (
        <div>
            <Cover img={img} title="Our Menu"></Cover>
            <SectionTittle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTittle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;