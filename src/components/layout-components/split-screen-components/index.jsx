// IMPORTS -
import styled from "styled-components";

// PARTIALS -
const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export default function SplitScreen({
// left: Left,
// right: Right,
  children,
  leftWeight = 1,
  rightWeight = 1,
}) {
  const [Left, Right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{Left}</Pane>
      <Pane weight={rightWeight}>{Right}</Pane>
    </Container>
  );
}
