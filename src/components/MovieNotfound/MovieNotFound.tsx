import BackBtn from "../backButton/BackBtn";
import "../../styles/movieNotFound/movieNotFound.css";
const MovieNotFound = () => {
  return (
    <div className="not-found-wrapper">
      <BackBtn />
      <div className="not-found-container">
        <h1>404</h1>
        <h2>There is no movie here!!</h2>
      </div>
    </div>
  );
};

export default MovieNotFound;
