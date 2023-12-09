import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="my-16">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-6 ">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <Link to='/order'><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
