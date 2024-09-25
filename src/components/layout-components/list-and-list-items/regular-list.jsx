export default function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
 return (
    <>
    {items.map((item, i) => (
      <ItemComponent key={i} {...{ [resourceName]: item }} />
    ))}
  </>
 )
}

// {...{[resourceName]: item}} === person = {item}
