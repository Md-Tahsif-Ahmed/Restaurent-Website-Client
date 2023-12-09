import SectionTittle from "../../../Component/SectionTittle/SectionTittle";
import MenuItems from "../../Shared/MenuItems";
import useMenu from "../../../Hook/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-10">
            <SectionTittle heading={"From our Menu"} subHeading={"Popular Items"}></SectionTittle>
            
        </section>
    );
};

export default PopularMenu;
