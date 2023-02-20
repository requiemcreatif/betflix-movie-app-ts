import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../styles/backBtn/backBtn.css";

const BackBtn: React.FC = () => {
  return (
    <div>
      <Link to="/home">
        <div className="back-btn">
          <IoIosArrowBack />
          Back
        </div>
      </Link>
    </div>
  );
};

export default BackBtn;
