// IMPORTS -
import styled from "styled-components";

// PARTIALS -
const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: 1;
`;

export default function SplitScreen({ left: Left, right: Right }) {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>

      <Pane>
        <Right />
      </Pane>
    </Container>
  );
}
