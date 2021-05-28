import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm({ updateComponent,   updateList }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (inputValue) {
     updateList(inputValue);
      setInputValue("");
    }
  };
 
const handleInputChange = (e) => {
  console.log("holaaaaaa")
    setInputValue(e.target.value);
    updateList(e.target.value);
  
}


 

  return (
    <div className="registrationForm">
      <form onSubmit={handleSubmit}>
        <h3>Formulario de Registro</h3>

          <input
          onChange={handleInputChange}
          type="text"
          id="name"
          name="name"
          value={inputValue}
          placeholder="Nombre completo"
          ></input>

      
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
          ></input>


          <input
            type="text"
            id="direction"
            name="direction"
            placeholder="Dirección"
          ></input>

 
          <select name="sex" required>
            <option value="">Sexo</option>
            <option>Femenino</option>
            <option>Maculino</option>
            <option>Otro</option>
          </select>
  
        <input
          id="submit"
          type="submit"
          value="REGISTRARSE"
          onClick={() => updateComponent()}
        ></input>
      </form>
    </div>
  );
}
