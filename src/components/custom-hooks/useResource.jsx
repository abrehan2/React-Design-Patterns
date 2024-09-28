// IMPORTS -
import React, { useEffect } from "react";
import axios from "axios";

export default function useResource(resourceUrl) {
  const [resource, setResource] = React.useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
}
