import { styled } from "styled-components";
import { motion } from "framer-motion";

export const boxMove = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

export const Title = styled.h1`
  font-size: 5vmin;
  margin-bottom: 3vmin;
  color: #ffff;
`;

export const ApBox = styled(motion.div)`
  width: 100rem;
  height: 50rem;
  background: linear-gradient(135deg, #b814ff, #6912ff);
  border-radius: 3vmin;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MotionBox = styled(motion.div)`
  width: 50rem;
  height: 20rem;
  background-color: #ffff;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
`;

export const MotionBtn = styled(motion.button)`
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-size: 5rem;
  margin: 0px 20px;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  bottom: -150px;
`;
