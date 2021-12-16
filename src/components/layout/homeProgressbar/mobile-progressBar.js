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
import { Waypoint } from "react-waypoint";

const MobileProgressBar = ({
  image,
  percentage,
  display,
  darkMode,
  poolsPage,
}) => {
  const [idoPercent, setIdoPercent] = useState(percentage);

  return (
    <ProgressWrapper className={`md:${display}`}>
      <RocketBox percent={idoPercent}>
        <ProgressRocket src={rocketImg} />
      </RocketBox>

      <CircleBox>
        <TransparentBackground darkMode={darkMode} poolsPage={poolsPage} />
        <GradientBackground />
        <IdoImg src={image} />
        <SemiCircle
          percent={idoPercent}
          darkMode={darkMode}
          poolsPage={poolsPage}
        />
        <SemiCircleTwo
          percent={idoPercent}
          darkMode={darkMode}
          poolsPage={poolsPage}
        />
      </CircleBox>
    </ProgressWrapper>
  );
};

export default MobileProgressBar;
