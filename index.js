import React from "react";
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import EmployeeForm from "./src/EmployeeForm";
import { DataContext } from "./src/Context";
import EntryPage from "./src/EntryPage";
import DisplayPage from "./src/DisplayPage";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/form" element={<EntryPage />} />
                <Route path="/show" element={<DisplayPage />} />
            </Routes>
        <DataContext.Provider value={[]}>
            <App />
        </DataContext.Provider>
    </BrowserRouter>
);
