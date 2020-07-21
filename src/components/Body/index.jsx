import React from "react";

const BODY_STATUS = {
  saludo: <p>Hey tanto tiempo</p>,
  comida: <p>Tengo Hambre</p>,
  aburrido: <p>Jugamos algo</p>,
};

const Body = ({ state }) => {
  return <div>{BODY_STATUS[state]}</div>;
};

export default Body;
