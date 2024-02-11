import Card from "./components/Card";
import { useState } from "react";
function App() {
  const [city, setCity] = useState("");
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl">Hello World</h1>
      <input  value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City name ..." className="input input-bordered input-info w-full max-w-xs" />
      
      <Card location={city} />
      
    </div>
  );
}

export default App;
