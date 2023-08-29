import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Path = styled(motion.div)`
  width: 30vmin;
  height: 30vmin;
  background: linear-gradient(135deg, #f67bfd, #6cb1ff);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PathBox = styled(motion.div)`
  width: 15vmin;
  height: 15vmin;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Svg = styled(motion.svg)`
  width: 10vmin;
  height: 10vmin;
`;

export const svg = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};
