/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/TaskLogo.svg";

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img
        className="nav-logo"
        width="100%"
        height="100%"
        src={logo}
        alt="Logo.svg"
      />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigateToTasksPage = () => {
    navigate('/task')
  }

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onClickHandler={handleNavigateToTasksPage} />
        <div>
            <NavButton text="My Account"/>
        </div>
      </div>
    </div>
  );
};
