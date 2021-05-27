import React, { useState } from "react";
import "./CurrencyBird.css";
import RegistrationForm from "./views/registrationFormView/RegristrationForm";
import InvitationView from "./views/invitationView/InvitationView";
import ManagementView from "./views/managementView/ManagementView";

export default function CurrencyBirdApp() {
  const [showComponent, setShowComponent] = useState("invitation");

  const updateComponent = (name) => {
    setShowComponent(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        {showComponent === "invitation" ? (
          <InvitationView updateComponent={updateComponent} />
        ) : showComponent === "form" ? (
          <RegistrationForm updateComponent={updateComponent} />
        ) : (
          <ManagementView updateComponent={updateComponent} />
        )}
      </header>
    </div>
  );
}
