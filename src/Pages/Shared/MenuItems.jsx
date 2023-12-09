 

const MenuItems = ({ item }) => {
    const { image, price, name, recipe } = item;

    return (
      <div className="">
          <div className="menu-item flex space-x-4">
            <div className="item-image">
                <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt={name} />
            </div>
            <div className="item-details">
                <h1 className="uppercase">{name}-------------</h1>
                <p className="recipe">{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
       
      </div>
        
    );
};

export default MenuItems;
