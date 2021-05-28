import React, { useState } from "react";
import "./CurrencyBird.css";
import RegistrationForm from "./views/registrationFormView/RegristrationForm";
import InvitationView from "./views/invitationView/InvitationView";
import ManagementView from "./views/managementView/ManagementView";

export default function CurrencyBirdApp() {
  const [showComponent, setShowComponent] = useState("invitation");
  const [list, setList] = useState("");

console.log(list)

  const updateState = (d) => {
    setList(list => [...list, d]);
  };
  

  const updateComponent = (item) => {
    setShowComponent(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showComponent === "invitation" ? (
          <InvitationView updateComponent={updateComponent} updateList={updateState}  />
        ) : showComponent === "form" ? (
          <RegistrationForm updateComponent={updateComponent} updateList={updateState}  />
        ) : (
          <ManagementView list={list}
          
         
          
          /> 
        )}
        
      </header>
    </div>
  );
}
