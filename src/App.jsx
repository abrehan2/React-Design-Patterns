// IMPORTS -
import SplitScreen from "./layout-components/split-screen-components"

// COMPONENTS -
const LeftHandComponent = () => {
  return <h1 style={{backgroundColor: "green"}}>Left!</h1>
}

const RightHandComponent = () => {
  return <h1 style={{backgroundColor: "red"}}>Right!</h1>
}

export default function App() {
  return <>

  
  {/* 
  1) 
  <SplitScreen
  left={LeftHandComponent}
  right={RightHandComponent}
  leftWeight={1}
  rightWeight={3}
  
  /> */}

{/* 2) */}
  <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftHandComponent />
    <RightHandComponent />
  </SplitScreen>

  </>
}