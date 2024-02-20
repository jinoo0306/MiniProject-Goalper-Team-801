import React from "react";
import Lottie from "lottie-react";
import StudyAnimation from "../../assets/lotties/StudyAnimation.json";

function SignFormAnimation() {
  return (
    <Lottie
      animationData={StudyAnimation}
      loop
      autoplay
      style={{ width: "80%", height: "60%" }}
    />
  );
}

export default SignFormAnimation;
