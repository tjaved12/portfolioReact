import React, { useContext } from "react";


function PersonalInfo() {

  return (
    <div className="card">
      <div>
        Name: {name}
      </div>
      <div>
        Status: {mood}
      </div>
      <div>
        Excitement Level: {excitementLevel}
      </div>
    </div>
  );
}

export default PersonalInfo;
