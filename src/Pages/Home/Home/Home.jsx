import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "animate.css";

const Home = () => {
  return (
    <div className="animate__animated animate__zoomIn">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
