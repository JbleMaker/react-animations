import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Scroll = styled(motion.div)`
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

export const ScrollBox = styled(motion.div)`
  width: 10vmin;
  height: 10vmin;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Movement = styled(motion.div)`
  width: 5vmin;
  height: 5vmin;
  background-color: #ffffff;
  border-radius: 1vmin;
`;
