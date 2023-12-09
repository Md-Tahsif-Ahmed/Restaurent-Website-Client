import { useState, useEffect } from "react";
const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try{
            fetch('menu.json')
            .then(res=>res.json())
            .then(data=>{
                setMenu(data);
                setLoading(false);
            })
        }
        catch (error) {
                console.error('Error fetching menu:', error);
            }
        

      
    }, [])
    return [menu, loading]
}
export default useMenu;