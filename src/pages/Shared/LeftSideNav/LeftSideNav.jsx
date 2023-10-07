import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);

    return (
        <div className="text-center space-y-6">
           <h1 className="text-3xl text-center mb-3">All categories</h1> 
           {
            categories.map(category => <NavLink to={`/category/${category.id}`} className="block text-lg" key={category.id}>{category.name}</NavLink>)
           }
        </div>
    );
};

export default LeftSideNav;