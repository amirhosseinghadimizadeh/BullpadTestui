import React, { useState } from "react";
import {
  CircleBox,
  SemiCircle,
  SemiCircleTwo,
  IdoImg,
  ProgressRocket,
  ProgressWrapper,
  RocketBox,
  GradientBackground,
  TransparentBackground,
} from "./progress.style";
import rocketImg from "../../../img/progress-rocket.svg";

const MobileProgressBar = ({
  image,
  percentage,
  display,
  darkMode,
  poolsPage,
}) => {
  return (
    <ProgressWrapper className={`md:${display}`}>
      <RocketBox percent={percentage}>
        <ProgressRocket src={rocketImg} />
      </RocketBox>

      <CircleBox>
        <TransparentBackground darkMode={darkMode} poolsPage={poolsPage} />
        <GradientBackground />
        <IdoImg src={image} />
        <SemiCircle
          percent={percentage}
          darkMode={darkMode}
          poolsPage={poolsPage}
        />
        <SemiCircleTwo
          percent={percentage}
          darkMode={darkMode}
          poolsPage={poolsPage}
        />
      </CircleBox>
    </ProgressWrapper>
  );
};

export default MobileProgressBar;
