// IMPORTS -
import React from "react";
import {
  people,
  products,
} from "./components/layout-components/list-and-list-items/data";
import LargePersonListItem from "./components/layout-components/list-and-list-items/people/large-person-list-item";
import SmallPersonListItem from "./components/layout-components/list-and-list-items/people/small-person-list-item";
import LargeProductListItem from "./components/layout-components/list-and-list-items/product/large-product-list-item";
import SmallProductListItem from "./components/layout-components/list-and-list-items/product/small-product-list-item";
import RegularList from "./components/layout-components/list-and-list-items/regular-list";
import UncontrolledModal from "./components/layout-components/uncontrolled-modal";
import SplitScreen from "./components/layout-components/split-screen-components";
import CurrentUserLoader from "./components/container-components/current-user-loader";
import UserInfo from "./components/container-components/user-info";
import ResourceLoader from "./components/container-components/resource-loader";
import ProductInfo from "./components/container-components/product-info";
import DataSourceLoader from "./components/container-components/data-source-loader";
import axios from "axios";
import UncontrolledForm from "./components/uncontrolled-form";
import ControlledForm from "./components/controlled-form";
import ControlledModal from "./components/controlled-modal";
import UncontrolledOnboardingFlow from "./components/uncontrolled-onboarding-flow";
import ControlledOnboardingFlow from "./components/controlled-onboarding-flow";
import PrintProps from "./components/higher-order-components/print-props";
import WithUser from "./components/higher-order-components/with-user";
import UserInfoForm from "./components/higher-order-components/user-info-form";
import RecursiveComponent from "./components/functional-programming/recursive-component";
import { nestedObj } from "./components/functional-programming/data";
import { DangerButton } from "./components/functional-programming/composite-component";
import { SuccessButton } from "./components/functional-programming/partial-apply-component";

// COMPONENTS -
// const LeftHandComponent = () => {
//   return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
// };

// const RightHandComponent = () => {
//   return <h1 style={{ backgroundColor: "red" }}>Right!</h1>;
// };

// const getServerData = (url) => async () => {
//   const response = await axios.get(url);
//   return response.data;
// };

const StepOne = ({ goToNext, goToPrev }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
    <button onClick={goToPrev}>Previous</button>
  </>
);
const StepTwo = ({ goToNext, goToPrev }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
    <button onClick={goToPrev}>Previous</button>
  </>
);
const StepThree = ({ goToNext, goToPrev }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
    <button onClick={goToPrev}>Previous</button>
  </>
);

export default function App() {
  const [shouldShow, setShouldShow] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  let childLength = [StepOne, StepTwo, StepThree].length;

  // HIGHER - ORDER COMPONENT -
  // const UserInfoWrapped = PrintProps({
  //   Component: UserInfo
  // });

  // const UserInfoLoader = WithUser(UserInfo, "1");

  // HANDLERS -
  // const goToNext = () => {
  //   if (currentIndex < childLength - 1) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  // const goToPrev = () => {
  //   if (currentIndex > 0 || currentIndex == childLength - 1) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

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
      1) Only loads user -
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader> */}

      {/* 
      2) Dynamic resource API loader -
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
      </ResourceLoader> */}

      {/* 
      3) Data source -
      <DataSourceLoader
        getDataFunc={getServerData("http://localhost:8000/current-user")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSourceLoader> */}
      {/* -------------------------------- UNCONTROLLED COMPONENT -------------------------------- */}
      {/* <UncontrolledForm /> */}
      {/* -------------------------------- CONTROLLED COMPONENT -------------------------------- */}
      {/* <ControlledForm /> */}
      {/* -------------------------------- CONTROLLED MODAL -------------------------------- */}
      {/* <ControlledModal 
       shouldShow={shouldShow}
       onClose={() => setShouldShow(false)}
       >
        <h1>Hello!</h1>
       </ControlledModal>
       <button onClick={() => setShouldShow(!shouldShow)}>Show Modal</button> */}
      {/* -------------------------------- UNCONTROLLED ONBOARDING FLOW -------------------------------- */}
      {/* <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow> */}
      {/* -------------------------------- CONTROLLED ONBOARDING FLOW -------------------------------- */}

      {/* <ControlledOnboardingFlow currentIndex={currentIndex} onNext={goToNext} onPrev={goToPrev}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow> */}
      {/* -------------------------------- HIGHER - ORDER COMPONENTS -------------------------------- */}
      {/* 1) <UserInfoWrapped name={"Rehan"} age={22} hairColor={"Brown"} hobbies={["Sleeping", "Coding"]}/> */}
      {/* <UserInfoLoader food={"Pizza"}/> */}
      {/* <UserInfoForm /> */}
      {/* -------------------------------- CUSTOM HOOKS -------------------------------- */}
      {/* <UserInfo /> */}
      {/* -------------------------------- FUNCTIONAL PROGRAMMING -------------------------------- */}
      {/* <RecursiveComponent data={nestedObj} /> */}
      <DangerButton disabled={true}/>
      <SuccessButton text={"Success"} />
    </>
  );
}
