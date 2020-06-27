import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions/smurfActions";

const Smurf = ({ smurf }) => {
  return (
    <div>
      Name: {smurf.name}
      <div>
        Height: {smurf.height}
        <div>Age: {smurf.age}</div>
        <div>
          <a href="#!">Delete</a>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(Smurf);
