import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurfs, updateSmurf } from "../actions/smurfActions";

const AddSmurf = ({ addSmurfs }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || height === "" || age === "") {
      alert("Please Make Sure All Fields Are Filled In");
    } else {
      const newSmurf = {
        name,
        height,
        age,
        id: Date.now(),
      };
      addSmurfs(newSmurf);

      // Reset All Fields after Submit
      setAge("");
      setName("");
      setHeight("");
    }
  };

  return (
    <div>
      <h4>Add Smurf To Village</h4>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name" placeholder="Smurf Name">
          Smurf Name
        </label>
      </div>
      <div>
        <input
          type="text"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor="height">Smurf Height in Centimeters</label>
      </div>
      <div>
        <input
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="age">Smurf Age</label>
      </div>
      <div>
        <a href="#!" onClick={onSubmit}>
          Add Smurf
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addSmurfs })(AddSmurf);
