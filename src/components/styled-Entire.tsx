import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 400vmin;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const SmallWrapper = styled.div`
  height: 100vmin;
  width: 100vmin;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center;
`;

export const AniPresence = styled.div`
  height: 100vmin;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
