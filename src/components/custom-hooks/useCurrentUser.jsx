// IMPORTS -
import React from "react";
import axios from "axios";

export default function useCurrentUser(){
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};
