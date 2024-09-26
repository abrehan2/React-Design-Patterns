// IMPORTS -
import React, { useEffect, useState } from "react";

// It wont know where exactly the data is coming from ~
export default function DataSourceLoader({ getDataFunc = () => {}, resourceName, children }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
     const data = await getDataFunc();
     setState(data);
    })();
  }, [getDataFunc]);


  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
}
