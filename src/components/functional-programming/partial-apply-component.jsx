// Allows to set a specific number of props without having to create a new component.

// IMPORTS -
import Button from "./composite-component";

export default function PartialApplyComponent(Component, partialProps) {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
}

export const SuccessButton = PartialApplyComponent(Button, {
  color: "green",
  size: "large",
  disabled: true,
});
