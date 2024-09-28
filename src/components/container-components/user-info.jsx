// IMPORTS -
import useCurrentUser from "../custom-hooks/useCurrentUser";
import useDataSource from "../custom-hooks/useDataSource";
import useResource from "../custom-hooks/useResource";
import axios from "axios";

const serverResource = (resourceUrl) => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

export default function UserInfo() {
  // console.log(food)
  // const user = useCurrentUser();
  // const user = useResource("http://localhost:8000/current-user")

  // const getResource = async () => {
  //   const response = await axios.get("http://localhost:8000/current-user");
  //   return response.data;
  // };

  const user = useDataSource(
    serverResource("http://localhost:8000/current-user")
  );

  const { name, age, hairColor, hobbies } = user ?? {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}
