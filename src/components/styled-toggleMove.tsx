import { styled } from "styled-components";
import { motion } from "framer-motion";

export const MoveBox = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`;

export const MoveCircle = styled(motion.div)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: rgba(55, 0, 255, 0.82);
`;
