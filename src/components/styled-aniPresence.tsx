import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  font-size: 5vmin;
  margin-bottom: 3vmin;
  color: #ffff;
`;

export const ApBox = styled(motion.div)`
  width: 100vmin;
  height: 50vmin;
  background: linear-gradient(135deg, #b814ff, #6912ff);
  border-radius: 3vmin;
`;
