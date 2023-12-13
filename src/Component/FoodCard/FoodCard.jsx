import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAuth from "../../Hook/useAuth";
import Swal from 'sweetalert2'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";


const FoodCard = ({item}) => {
    const {_id, name, image, price, recipe} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddCart = food => {
        
        if(user && user.email){
          console.log(food, user.email);
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          axiosSecure.post('/cart', cartItem)
          .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                title: "Added",
                text: ` ${name} Added Succesfully`,
                icon: "success"
              });
              // refetch
              refetch();
            }
          })

        }
        else{
            Swal.fire({
                title: "you are not Logged In",
                text: "Please login to add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes login"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}alt={name} /></figure>
        <div className="card-body flex justify-center items-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button onClick={()=>handleAddCart(item)} className="btn btn-primary">Add to card</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;