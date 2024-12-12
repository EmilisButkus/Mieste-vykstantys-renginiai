import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Logout = ({ setUserdata }) => {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    setTimeout(() => {
      setUserdata({});
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    handleLogout();
    
  }, []);

  return (
    <section className="page-section" id="logout">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Atsijungiama...
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
      </div>
    </section>
  );
};

Logout.propTypes = {
  setUserdata: PropTypes.func,
};

export default Logout;