import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h2>Hook Using Objects</h2>
      <form>
        First Name:{" "}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <br />
        Last Name:
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <p>
          Your first name is -{" "}
          <span className="input-text">{name.firstName}</span>
        </p>
        <p>
          Your last name is -{" "}
          <span className="input-text">{name.lastName}</span>
        </p>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
}

export default HookCounterThree;
