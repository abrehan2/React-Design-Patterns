// IMPORTS -
import SplitScreen from "./layout-components/split-screen-components"

// COMPONENTS -
const LeftHandComponent = () => {
  return <h1>Left!</h1>
}

const RightHandComponent = () => {
  return <h1>Right!</h1>
}

export default function App() {
  return <SplitScreen
  left={LeftHandComponent}
  right={RightHandComponent}
  
  />
}