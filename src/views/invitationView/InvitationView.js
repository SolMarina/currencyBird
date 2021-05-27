import React, { useState } from "react";
import "./invitationView.css";
export default function InvitationView(props) {
  const [datos, setDatos] = useState({
    email: "",
    name: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
  };

  let ramdomLink = Math.random().toString(36).substring(7);

  return (
    <div className="invitation">
      <form onSubmit={enviarDatos}>
        <div className="inputs">
          <div className="inputEmail">
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu email"
            ></input>
          </div>
          <div className="inputName">
            <input
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              placeholder="Nombre completo"
            ></input>
          </div>
        </div>
        <hr />
        <input id="submit" type="submit" value="COMPARTIR"></input>
        <br></br>
        <br></br>
        <p>{datos.email}</p>
        <p>{datos.name}</p>
        <a onClick={() => props.updateComponent("form")}>
          https://currencybird.cl/register/invite/{ramdomLink}
        </a>
      </form>
    </div>
  );
}
