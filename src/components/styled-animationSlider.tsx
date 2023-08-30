import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled(motion.div)`
  width: 80rem;
  height: 40rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  box-sizing: border-box;
  gap: 2rem;
  padding: 0rem 3rem;
`;

export const Section = styled(motion.div)`
  height: 15rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 1rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
