import { Link } from "react-router-dom";

const NewsCard = ({aNews}) => {

    const {title, image_url, details, _id} = aNews;

    return (
        <div className="card bg-base-100 shadow-xl mb-5">
          <figure><img src={image_url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
          </div>
            {
                details.length > 200 ? <p className="px-7">{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600">Read more...</Link></p> : <p className="px-7">{details}</p>
            }
        </div>
    );
};

export default NewsCard;