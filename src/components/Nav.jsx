import React from "react";
import "./Nav.css";

function Nav({ setShowModal, showModal, setIsSignUp }) {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  const authToken = false; //Trạng thái đã đăng nhập
  return (
    <nav>
      <div className="logo-container">
        {/* <img className="logo" src="/images/HannieDatingLogo.png" /> */}
      </div>
      {!authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
}

export default Nav;
