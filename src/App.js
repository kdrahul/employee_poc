import React, { createContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeForm from "./EmployeeForm";
import { DataContext } from "./Context";

const App = () => {

    

    return (
        <DataContext.Provider value={[]}>
            <div>
                <h1>Employee Details</h1>
                <EmployeeForm />
            </div>
        </DataContext.Provider>
    );
}

export default App;
