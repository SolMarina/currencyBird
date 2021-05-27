import React, { useState } from "react";
import "./RegistrationForm.css";
export default function RegistrationForm(props) {
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registrationForm">
      <form onSubmit={sendData}>
        <h3>Formulario de Registro</h3>
        <div>
          <input
            onChange={handleInputChange}
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
          ></input>
        </div>
        <div>
          <input
            onChange={handleInputChange}
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
          ></input>
        </div>
        <div>
          <input
            type="text"
            id="direction"
            name="direction"
            placeholder="Dirección"
          ></input>
        </div>
        <div>
          <select name="sex" required>
            <option value="">Sexo</option>
            <option>Femenino</option>
            <option>Maculino</option>
            <option>Otro</option>
          </select>
        </div>
        <input
          id="submit"
          type="submit"
          value="REGISTRARSE"
          onClick={props.updateComponent}
        ></input>
        <p>{data.email}</p>
        <p>{data.name}</p>
      </form>
    </div>
  );
}
