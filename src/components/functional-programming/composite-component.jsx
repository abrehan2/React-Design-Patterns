// Create new components that use the original component, but you cannot customize the props of the new component.

export default function Button({ size, color, text, ...props }) {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        fontSize: size === "large" ? "32px" : "16px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
}

export function DangerButton(props) {
  return <Button color={"red"} text={"Danger Button"} {...props} />;
}
