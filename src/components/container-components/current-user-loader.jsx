// IMPORTS -
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8000/current-user");
      setUser(response.data);
    })();
  }, []);

  console.log("User: ", user);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
}
