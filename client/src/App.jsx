import { useState, useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        email: "tony@stark.com",
        password: "password123",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <p>coucou</p>
    </>
  );
}

export default App;
