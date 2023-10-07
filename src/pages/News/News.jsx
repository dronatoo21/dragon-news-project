import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/NavBar/NavBar";

const News = () => {

    const {id} = useParams(); 

    return (
        <div>
            <Header/>
            <NavBar/>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="col-span-3">
                   <h1>hahahha {id}</h1> 
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default News;