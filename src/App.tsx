import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const CricleBox = styled(motion.div)`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  place-self: center;
  text-align: center;
  font-size: 2rem;
`;

const TestBox = styled(motion.div)`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: #ffffff;
  place-self: center;
  text-align: center;
  font-size: 2rem;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const CircleVariants = {
  start: {
    opacity: 0,
    x: 10,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <CricleBox variants={CircleVariants}>font</CricleBox>
        <TestBox variants={CircleVariants}>font</TestBox>
        <CricleBox variants={CircleVariants} />
        <CricleBox variants={CircleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
