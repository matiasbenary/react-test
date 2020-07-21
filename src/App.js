import React from "react";
import "./App.css";
import Title from "./components/Title/Index";
import Body from "./components/Body";

function App() {
  const lista = [<li>Pan</li>, <li>Leche</li>, <li>Queso</li>, <li>Te</li>];
  const listaAPI = ["Pan", "Leche", "Queso", "Te"];
  return (
    <div>
      <Title status={true} invisible={false} circuitoCorto={false} />
      <Body state="aburrido" />
      <ul>{lista}</ul>
      <ol>{lista}</ol>
      <ul>
        {listaAPI.map((item, index) => {
          return <li key={index + "item"}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
