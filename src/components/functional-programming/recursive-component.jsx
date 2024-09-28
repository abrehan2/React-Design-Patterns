const isObject = (x) => typeof x === "object" && x !== "null";

export default function RecursiveComponent({ data }) {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data); // returns an array of key-value pair from the object

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}
