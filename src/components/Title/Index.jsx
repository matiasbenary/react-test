import React from "react";

const Title = ({ status, invisible, circuitoCorto }) => {
  if (invisible) {
    return null;
  }

  return status ? (
    <h1>
      Hola
      {/* && primera condicion verdadera */}
      {circuitoCorto && " Como estas?"}
      {/* || primera condicion false */}
      {circuitoCorto || " Que haces?"}
    </h1>
  ) : (
    <h1>Chau</h1>
  );
};

export default Title;
