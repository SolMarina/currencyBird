import React from "react";
import "./ManagementView.css";
export default function ManagementView() {
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
            <td>Alicia Rubio Salinas</td>
            <td>8</td>
            <td>$ 40.000</td>
          </tr>
          <tr>
            <td>Pedro Jorquera Soto</td>
            <td>4</td>
            <td>$ 20.000</td>
          </tr>
          <tr>
            <td>Carmen Salazar Paez</td>
            <td>3</td>
            <td>$ 15.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
