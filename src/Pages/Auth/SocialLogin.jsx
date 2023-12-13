import { FaGoogle} from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const handleGoogle = ()=>{
        signInWithGoogle()
        .then(res=>{console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/user', userInfo)
            .then(res=>{
                console.log(res.data)
                navigate('/');
            })
        
        })
    }
    return (
        <div className="text-center mb-4">
            <div className="divider"></div>
            <button onClick={handleGoogle} className="btn btn-outline "> 
                <FaGoogle></FaGoogle>Google
            </button>
        </div>
    );
};

export default SocialLogin;