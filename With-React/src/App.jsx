import { useState, useEffect } from "reat";

const App = () => {
  const [backendData, setBackendData] = useState("");

  useEffect(() => {
    //Fetch from the Express local server port
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setBackendData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
};

return (
  <div className="origin-center mt-[50px]">
    <h1>React + Express Integration</h1>
    <p>
      Backend Status: <strong>{backendData || "Loading.."}</strong>
    </p>
  </div>
);

export default App;
