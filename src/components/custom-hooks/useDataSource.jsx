// IMPORTS -
import React, { useEffect } from "react";

export default function useDataSource(getResourceFunc) {
  const [resource, setResource] = React.useState(null);

  useEffect(() => {
    (async () => {
      const response = await getResourceFunc();
      setResource(response);
    })();
  }, []);

  return resource;
}
