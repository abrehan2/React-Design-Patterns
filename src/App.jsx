// IMPORTS -
import { people, products } from "./layout-components/list-and-list-items/data";
import LargePersonListItem from "./layout-components/list-and-list-items/people/large-person-list-item";
import SmallPersonListItem from "./layout-components/list-and-list-items/people/small-person-list-item";
import LargeProductListItem from "./layout-components/list-and-list-items/product/large-product-list-item";
import SmallProductListItem from "./layout-components/list-and-list-items/product/small-product-list-item";
import RegularList from "./layout-components/list-and-list-items/regular-list";
import Modal from "./layout-components/Modal";
// import SplitScreen from "./layout-components/split-screen-components";

// COMPONENTS -
const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "red" }}>Right!</h1>;
};

export default function App() {
  return (
    <>
      {/* -------------------------------- SPLIT - SCREEN -------------------------------- */}
      {/* 
  1) 
  <SplitScreen
  left={LeftHandComponent}
  right={RightHandComponent}
  leftWeight={1}
  rightWeight={3}
  
  /> */}
      {/* 2) */}
      {/* <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftHandComponent />
    <RightHandComponent />
  </SplitScreen> */}
      {/* -------------------------------- LIST AND LIST ITEMS -------------------------------- */}
      {/* <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductListItem}
      />
      <RegularList
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      /> */}
      {/* -------------------------------- MODAL COMPONENT -------------------------------- */}
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  );
}
