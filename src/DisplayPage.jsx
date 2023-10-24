import React, { useContext, useEffect } from "react";
import { DataContext } from "./Context";

const DisplayPage = () => {

    const ctx = useContext(DataContext);

    useEffect(() => {}, [ctx]);

    return (
        <div className="pt-3 mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {ctx.map((item) => {
                        console.log(item);
                        return (
                            <tr key={item.email}>
                                <td>{item.firstName}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.dob}</td>
                                <td>{item.gender}</td>
                                <td>{item.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayPage;
