import Qzone1 from "../../../assets/qZone1.png"
import Qzone2 from "../../../assets/qZone2.png"
import Qzone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <>
        <div className="p-4 mb-5">
            <h1 className="text-3xl text-center"> LOGIN WITH </h1>
            <button className="btn btn-primary my-3 w-full">login with G</button>
            <button className="btn btn-primary w-full">login with F</button>
        </div>
        <div className="p-4 mb-5">
            <h1 className="text-3xl mb-3 text-center"> Find us on </h1>
            <button className="btn w-full"><a href="#">Facebook</a></button>
            <button className="btn w-full"><a href="#">Twitter </a></button>
            <button className="btn w-full"><a href="#">Instagram</a></button>
        </div>
        <div className="p-4">
            <h1 className="text-3xl mb-3 text-center"> Q zone</h1>
            <div className="flex flex-col justify-center">
                <img src={Qzone1} alt="photo" />
                <img src={Qzone2} alt="photo" />
                <img src={Qzone3} alt="photo" />
            </div>
        </div>
        </>
    );
};

export default RightSideNav;