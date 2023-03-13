import React, { useState } from "react";

function Logg() {
  let isLoggedIn = useState(true);

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>
        This is a Demo showing several ways to implement Conditional Rendering
        in React.
      </h1>
      {renderAuthButton()}
      <h3>Hello World</h3>
    </div>
  );
}

export default Logg;
