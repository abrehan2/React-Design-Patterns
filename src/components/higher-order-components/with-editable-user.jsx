// IMPORTS -
import React, { useEffect } from "react";
import axios from "axios";

export default function WithEditableUser(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = React.useState(null);
    const [user, setUser] = React.useState({
      name: "",
      age: null,
      hairColor: "",
    });

    console.log("INITIAL STATE: ", user);
    console.log("ORIGINAL STATE: ", originalUser);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:8000/users/${userId}`
        );

        console.log("RESPONSE: ", response.data);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(
        `http://localhost:8000/users/${userId}`,
        { user }
      );
      setOriginalUser(response.data);
      setUser(response.data);
    };

    const onResetUser = () => {
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
}
