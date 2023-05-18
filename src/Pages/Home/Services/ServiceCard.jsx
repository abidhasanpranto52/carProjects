import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;

  return (
    <div className="card  card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end items-center">
          <p className="text-red-500 font-bold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <button style={{target : "_blank"}} className="btn btn-sm btn-circle btn-outline">
            <AiOutlineArrowRight />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
