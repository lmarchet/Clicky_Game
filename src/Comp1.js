import React from "react";

const Comp1 = props =>
  // onClick in the div, so onClick() will work any where in the div, image, name, etc
  <div onClick={props.click}>
    {/* <img src={props.title} /> */}
    <img alt={props.title.id} src={props.title.image} />
    <p> {props.title.name} </p>
  </div>

export default Comp1;
