import React, { createContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeForm from "./EmployeeForm";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";

const App = () => {

    return (
            <nav className="navbar navbar-expand-lg fixed-top bg-body-secondary">
                <div className="container-fluid ">
                <Link className="nav-link navbar-brand" to="/">Employee Catalog</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/show">Show all employees</Link>
                        <Link className="nav-link" to="/form">New Employee</Link>
                    </div>
                </div>
                </div>
            </nav>
    );
}

export default App;
