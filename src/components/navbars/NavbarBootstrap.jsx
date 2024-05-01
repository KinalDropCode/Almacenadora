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

export const NavbarBootstrap = () => {
    const navigate = useNavigate()

    const handleNavigateToTasksPage = () => {
        navigate('/task')
    }

    return (
        <nav class="navbar bg-dark navbar-expand-lg ">
         {/* <nav class="navbar bg-dark  navbar-expand-lg bg-body-tertiary"> */}
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="Task Manager" width="30" height="24"/>
                </a>

                <a class="navbar-brand text-light" href="task">Task Manager</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="http://localhost:5173/task">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                GitHub
                            </a>
                            <ul class="dropdown-menu" data-bs-theme="dark">
                                <li><a class="dropdown-item" href="https://github.com/KinalDropCode/Almacenadora-back" target="_blank">Backend</a></li>
                                <li><a class="dropdown-item" href="https://github.com/KinalDropCode/Almacenadora" target="_blank">Frontend</a></li>
                                <li><hr class="dropdown-divider "/></li>
                                <li><a class="dropdown-item" href="https://github.com/KinalDropCode" target="_blank">&copy; Kinal Drop Code</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white-50" aria-disabled="true">Premium +</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
