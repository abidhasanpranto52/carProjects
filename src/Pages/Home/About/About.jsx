/* eslint-disable react/no-unescaped-entities */
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="animate__animated animate__zoomIn hero rounded-lg min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img className="w-3/4 rounded-lg shadow-2xl" src={person} />
          <img
            className="w-1/2 absolute right-5 top-1/2 border-8 border-white  rounded-lg shadow-2xl"
            src={parts}
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="font-bold text-red-700 text-2xl">About Us</h3>
          <h1 className="lg:text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-slate-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-6 text-slate-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <Link to={'/about'}>
            <button className="btn btn-warning">Get More Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
