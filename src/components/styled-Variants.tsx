import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Variants = styled(motion.div)`
  width: 30vmin;
  height: 30vmin;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VariantsBox = styled(motion.div)`
  width: 15vmin;
  height: 15vmin;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CricleBox = styled(motion.div)`
  width: 5vmin;
  height: 5vmin;
  border-radius: 50%;
  background-color: #ffffff;
  place-self: center;
  text-align: center;
  font-size: 1vmin;
`;
