import React from "react";
import { Link } from "react-router-dom";
import "../../styles/oneMovie/oneMovie.css";

interface MovieProps {
  id: number;
  keyId: string;
  name: string;
  description: string;
  genres: string[];
  rate: number;
  length: number;
  img: string;
}

const OneMovie: React.FC<MovieProps> = ({ id, keyId, name, img }) => {
  return (
    <article>
      <Link to={`/movie/${id}`} key={keyId}>
        <div className="card">
          <div className="card-header">
            <img src={img} alt={name} />
          </div>
          <div className="card-footer">
            <h2 className="card-title">{name}</h2>
            <button>Read more</button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default OneMovie;
