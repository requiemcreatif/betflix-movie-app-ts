import betflix from "../../images/BETFLIX.svg";
import { Link } from "react-router-dom";
import "../../styles/hero/hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="hero-container">
          <img src={betflix} alt="logo Betflix" />
          <h1>The ultimate movie-watching experience.</h1>
          <h3>
            Welcome to our exciting new movie collection application! We are thrilled to provide you
            with a unique and user-friendly experience that will take your movie-watching to the
            next level.
          </h3>
          <Link to="/home">
            <button> GET STARTED</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
