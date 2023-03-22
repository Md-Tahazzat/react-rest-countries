import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, flags, area } = props.country;
  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name : {name.common}</h3>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
    </div>
  );
};

export default Country;
