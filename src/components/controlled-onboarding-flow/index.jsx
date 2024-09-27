// IMPORTS -
import React from "react";

export default function ControlledOnboardingFlow({
  children,
  currentIndex,
  onNext,
  onPrev,
}) {
  const goToNext = () => onNext();
  const goToPrev = () => onPrev();

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext, goToPrev });
  }

  return currentChild;
}
