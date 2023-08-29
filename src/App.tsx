import React, { useRef } from "react";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import $ from "jquery";

import {
  CricleBox,
  ExplainBox,
  Naming,
  ResetBtn,
  SmallWrapper,
  Variants,
  VariantsBox,
  Wrapper,
} from "./components/styled-Variants";
import { CircleVariants, animation, boxVariants } from "./variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Animation, AnimationBox } from "./components/styled-animation";
import { Gestures, GesturesBox } from "./components/styled-Gestures";
import { Drag, DragBox, Movement } from "./components/styled-Drag";
import { Scroll, ScrollBox } from "./components/styled-Scroll";

function App() {
  const dragRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const { scrollYProgress } = useScroll();

  const gradient = useTransform(
    x,
    [-500, 0, 500],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(238, 0, 151)",
      "linear-gradient(135deg, rgb(0, 4, 238), rgb(143, 0, 238)",
      "linear-gradient(135deg, rgb(139, 0, 238), rgb(238, 0, 83)",
    ]
  );

  const scrollMove = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper>
      <SmallWrapper>
        <Animation>
          <AnimationBox
            id="animation"
            variants={animation}
            initial="hidden"
            animate="visible"
          />
          <ExplainBox>
            <Naming>Animation</Naming>
            <ResetBtn
              onClick={() => {
                window.location.reload();
              }}>
              <FontAwesomeIcon icon={faRotateRight} />
            </ResetBtn>
          </ExplainBox>
        </Animation>

        <Variants>
          <VariantsBox variants={boxVariants} initial="start" animate="end">
            <CricleBox variants={CircleVariants} />
            <CricleBox variants={CircleVariants} />
            <CricleBox variants={CircleVariants} />
            <CricleBox variants={CircleVariants} />
          </VariantsBox>
          <ExplainBox>
            <Naming>Variants</Naming>
            <ResetBtn>
              <FontAwesomeIcon icon={faRotateRight} />
            </ResetBtn>
          </ExplainBox>
        </Variants>

        <Gestures>
          <GesturesBox
            whileHover={{ scale: 1.4, rotate: 180 }}
            whileTap={{ scale: 0.5, rotate: -180, borderRadius: "100%" }}
          />
          <ExplainBox>
            <Naming>Gestures</Naming>
          </ExplainBox>
        </Gestures>

        <Drag>
          <DragBox ref={dragRef}>
            <Movement
              drag
              dragSnapToOrigin
              whileDrag={{ backgroundColor: "#f15bff" }}
              whileTap={{ borderRadius: "50%" }}
              dragConstraints={dragRef}
            />
          </DragBox>
          <ExplainBox>
            <Naming>Drag</Naming>
          </ExplainBox>
        </Drag>

        <Scroll style={{ background: gradient }}>
          <ScrollBox
            style={{ x, rotateZ, scale: scrollMove }}
            drag="x"
            dragSnapToOrigin></ScrollBox>
          <ExplainBox>
            <Naming>Scroll</Naming>
          </ExplainBox>
        </Scroll>
      </SmallWrapper>
    </Wrapper>
  );
}

export default App;
