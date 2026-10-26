import { useState, useEffect } from "react";

const App = () => {
  const [backendData, setBackendData] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const users = Array.isArray(data) ? data : data.users || [];

        if (users.length > 0) {
          setBackendData(`Connected: ${users.length} users loaded`);
        } else {
          setBackendData(data.message || "Connected");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setBackendData("Connection failed");
      });
  }, []);

  return (
    <div className="origin-center mt-[50px]">
      <h1>React + Express Integration</h1>
      <p>
        Backend Status: <strong>{backendData}</strong>
      </p>
    </div>
  );
};

export default App;
