import React from "react";

export default function UncontrolledOnboardingFlow({ children, onFinish }) {
  const [onboardingData, setOnboardingData] = React.useState({});
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const childLength = React.Children.toArray(children).length;
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = () => {
    if (currentIndex < childLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0 || currentIndex == childLength - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrev });
  }

  return currentChild;
}
