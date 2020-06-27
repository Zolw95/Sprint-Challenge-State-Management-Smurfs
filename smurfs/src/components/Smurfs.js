import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/smurfActions";

const Smurfs = ({ smurf: { smurfs, loading }, getSmurfs }) => {
  useEffect(() => {
    getSmurfs();
  }, []);
  console.log("SmurfActions", smurfs);
  return (
    <div>
      {loading || smurfs === null ? (
        <p>Loading Smurfs...</p>
      ) : (
        smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  smurf: state.smurf,
});

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
