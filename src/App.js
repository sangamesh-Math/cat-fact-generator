
import './App.css';

import Axios from "axios";
import {useState, useEffect} from 'react';
// fetch("https://catfact.ninja/fact").then((resp) => resp.json()).then((data) => {
//   console.log(data);
// }); 

function App() {
const [catFact, setCatFact] = useState("");
useEffect(() => {
  Axios.get("https://catfact.ninja/fact").then((resp) => {
    setCatFact(resp.data.fact);
  });
}, []);
const getCatFact = () => {
  Axios.get("https://catfact.ninja/fact").then((resp) => {
    setCatFact(resp.data.fact);
});
};

  return (
    <div className="App">
      <button onClick = {getCatFact}>Generate cat fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
