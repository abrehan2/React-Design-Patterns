// IMPORTS -
import {
  people,
  products,
} from "./components/layout-components/list-and-list-items/data";
import LargePersonListItem from "./components/layout-components/list-and-list-items/people/large-person-list-item";
import SmallPersonListItem from "./components/layout-components/list-and-list-items/people/small-person-list-item";
import LargeProductListItem from "./components/layout-components/list-and-list-items/product/large-product-list-item";
import SmallProductListItem from "./components/layout-components/list-and-list-items/product/small-product-list-item";
import RegularList from "./components/layout-components/list-and-list-items/regular-list";
import Modal from "./components/layout-components/Modal";
import SplitScreen from "./components/layout-components/split-screen-components";
import CurrentUserLoader from "./components/container-components/current-user-loader";
import UserInfo from "./components/container-components/user-info";
import ResourceLoader from "./components/container-components/resource-loader";
import ProductInfo from "./components/container-components/product-info";

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
      {/* <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal> */}
      {/* -------------------------------- CONTAINER COMPONENT -------------------------------- */}
      {/*
      1)
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* 2) */}
      <ResourceLoader
        resourceUrl={"http://localhost:8000/users/1"}
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl={"http://localhost:8000/products/1"}
        resourceName={"product"}
      >
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}
