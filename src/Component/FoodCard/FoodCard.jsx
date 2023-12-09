const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt={name} /></figure>
        <div className="card-body flex justify-center items-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to card</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;