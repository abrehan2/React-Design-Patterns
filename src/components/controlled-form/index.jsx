// IMPORTS -
import React from "react";

export default function ControlledForm() {
  const [nameInputError, setNameInputError] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [hairColor, serHairColor] = React.useState("");

  React.useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more characters");
    } else setNameInputError("");
  }, [name]);

  console.log(nameInputError);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Hair color"
        type="text"
        name="hairColor"
        value={hairColor}
        onChange={(e) => serHairColor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
