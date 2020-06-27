import React from "react";
import { connect } from "react-redux";
import { deleteSmurfs } from "../actions/smurfActions";

const Smurf = ({ smurf, deleteSmurfs }) => {
  const onDelete = () => {
    deleteSmurfs(smurf.id);
    console.log("Smurf Id from Smurf Comp", smurf.id);
  };

  return (
    <div>
      <div>Name: {smurf.name}</div>
      <div>Height: {smurf.height}</div>
      <div>Age: {smurf.age}</div>
      <div>
        <a href="#!" onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

export default connect(null, { deleteSmurfs })(Smurf);
