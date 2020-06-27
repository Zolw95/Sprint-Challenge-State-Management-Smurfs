import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSmurf } from "../actions/smurfActions";

const EditSmurf = ({ current, updateSmurf }) => {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (current) {
      setName(current.name);
      setHeight(current.height);
      setAge(current.age);
    }
  }, [current]);

  const onEdit = () => {
    const updSmurf = {
      id: current.id,
      name,
      height,
      age,
    };
    updateSmurf(updSmurf);

    // Clear fields
    setName("");
    setHeight("");
    setAge("");
  };
  return (
    <div>
      <h4>UPDATE Smurf</h4>
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
        <a href="#!" onClick={onEdit}>
          Update
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.smurf.current,
});

export default connect(mapStateToProps, { updateSmurf })(EditSmurf);
