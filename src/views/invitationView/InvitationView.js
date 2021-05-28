import React, { useState } from "react";
import "./invitationView.css";

export default function InvitationView({ updateComponent,   updateList }) {
  const [show, setShow] = useState(true);
  const [data, setData] = useState("");
  
  const handleInputChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
     updateList(data);
      setData("");
    }
  };

  let ramdomLink = Math.random().toString(36).substring(7);

  return (
    <div className="invitation">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="inputEmail">
            <input
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
              value={data}
              placeholder="Nombre completo"
            ></input>
          </div>
        </div>
        <input
          id="submit"
          type="submit"
          value="COMPARTIR"
          onClick={() => {
            setShow(!show);
          }}
          {...(show ? "Div 2" : "Div 1")}
        ></input>
        <p>{data}</p>
        <br></br>
        <br></br>
        {show ? (
          <a className="link" onClick={() => updateComponent("form")}>
            https://currencybird.cl/register/invite/{ramdomLink}
          </a>
        ) : (
          <a className="link1" onClick={() => updateComponent("form")}>
            https://currencybird.cl/register/invite/{ramdomLink}
          </a>
        )}
      </form>
    </div>
  );
}
