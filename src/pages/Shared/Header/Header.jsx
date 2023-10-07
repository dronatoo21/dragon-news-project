import logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <>
        <div className='flex justify-center mt-5'>
            <img src={logo} alt="logo" />
        </div>
        <p className='text-center text-lg my-3'>Journalism Without Fear or Favour</p>
        <p className='text-xl text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </>
    );
};

export default Header;