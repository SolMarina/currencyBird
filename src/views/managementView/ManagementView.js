import React from "react";
import "./ManagementView.css";
export default function ManagementView({list}) {

  
  return (
    <div className="management">
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-primary">
          <tr>
            <th scope="col">Nombre completo</th>
            <th scope="col">Invitaciones</th>
            <th scope="col">Total Recibido $</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{list[0]}</td>
            <td>8</td>
            <td>$ 40.000</td>
          </tr>
          <tr>
            <td>{list[1]}</td>
            <td>4</td>
            <td>$ 20.000</td>
          </tr>
          <tr>
            <td>Pedro Jose Rojas</td>
            <td>3</td>
            <td>$ 15.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
