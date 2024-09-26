// IMPORTS -
import React from "react";

export default function UncontrolledForm() {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColorInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" type="text" name="name" ref={nameInput} />
      <input placeholder="Age" type="number" name="age" ref={ageInput} />
      <input
        placeholder="Hair color"
        type="text"
        name="hairColor"
        ref={hairColorInput}
      />
      <input type="submit" value={"Submit"} />
    </form>
  );
}
