import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 200vmin;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const SmallWrapper = styled.div`
  height: 100vmin;
  width: 200vmin;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

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

export const ResetBtn = styled.button`
  width: 4vmin;
  height: 4vmin;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 1.8vmin;
`;

export const ExplainBox = styled.div`
  width: 20vmin;
  height: 5vmin;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2vmin;
`;

export const Naming = styled.h1`
  color: #ffffff;
  font-size: 2.5vmin;
`;
