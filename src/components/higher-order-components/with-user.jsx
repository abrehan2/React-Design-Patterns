// IMPORTS -
import React, { useEffect } from "react";
import axios from "axios";

export default function WithUser(Component, userId) {
  return (props) => {
    const [user, setUser] = React.useState(null);
     console.log("PRPS: ", props)
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:8000/users/${userId}`
        );
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
}
