import React from "react";
import Lottie from "lottie-react";
import StudyAnimation from "../../assets/lotties/StudyAnimation.json";

function SignFormAnimation() {
  return (
    <Lottie
      animationData={StudyAnimation}
      loop
      autoplay
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export default SignFormAnimation;
