import React, { useRef, useState } from "react";
import {
  useMotionValue,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";

import { CricleBox, Variants, VariantsBox } from "./components/styled-Variants";
import { CircleVariants, animation, boxVariants } from "./variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Animation, AnimationBox } from "./components/styled-animation";
import { Gestures, GesturesBox } from "./components/styled-Gestures";
import { Drag, DragBox, Movement } from "./components/styled-Drag";
import { Scroll, ScrollBox } from "./components/styled-Scroll";
import { Path, PathBox, Svg, svg } from "./components/styled-Path";
import {
  AniPresence,
  ExplainBox,
  Naming,
  ResetBtn,
  SmallWrapper,
  Wrapper,
} from "./components/styled-Entire";
import {
  ApBox,
  MotionBox,
  MotionBtn,
  Title,
  boxMove,
} from "./components/styled-aniPresence";
import { MoveBox, MoveCircle } from "./components/styled-toggleMove";
import {
  Grid,
  Overlay,
  Section,
  overlay,
} from "./components/styled-animationSlider";

function App() {
  ////////////////////////Drag
  const dragRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  ////////////////////////Scroll
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const { scrollYProgress } = useScroll();
  const gradient = useTransform(
    x,
    [-500, 0, 500],
    [
      "linear-gradient(135deg, rgb(0, 210,238), rgb(238, 0, 151)",
      "linear-gradient(135deg, rgb(0, 4, 238), rgb(143, 0, 238)",
      "linear-gradient(135deg, rgb(139, 0, 238), rgb(238, 0, 83)",
    ]
  );
  const scrollMove = useTransform(scrollYProgress, [0, 1], [1, 2]);

  ////////////////////////Animation Presence
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextItem = async () => {
    await setBack(false);
    await setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const beforeItem = async () => {
    await setBack(true);
    await setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  ///////////////////////// Animatiom Move and Connect
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  ///////////////////////// Animation Slider
  const [id, setId] = useState<null | string>(null);

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

        <Path>
          <PathBox>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512">
              <motion.path
                variants={svg}
                initial="start"
                animate="end"
                transition={{
                  default: { duration: 3 },
                  fill: { duration: 10, delay: 1 },
                }}
                stroke="white"
                strokeWidth="8"
                d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"
              />
            </Svg>
          </PathBox>
          <ExplainBox>
            <Naming>Path</Naming>
          </ExplainBox>
        </Path>
      </SmallWrapper>

      <AniPresence>
        <Title>Animation Presence</Title>
        <ApBox>
          <AnimatePresence custom={back}>
            <MotionBox
              custom={back}
              key={visible}
              variants={boxMove}
              initial="entry"
              animate="center"
              exit="exit">
              {visible}
            </MotionBox>
          </AnimatePresence>
          <MotionBtn onClick={beforeItem}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </MotionBtn>
          <MotionBtn onClick={nextItem}>
            <FontAwesomeIcon icon={faChevronRight} />
          </MotionBtn>
        </ApBox>
      </AniPresence>

      <AniPresence>
        <ApBox
          onClick={toggleClicked}
          style={{ justifyContent: "space-around" }}>
          <MoveBox>
            {clicked ? (
              <MoveCircle layoutId="circle" style={{ borderRadius: 50 }} />
            ) : null}
          </MoveBox>
          <MoveBox>
            {!clicked ? (
              <MoveCircle
                layoutId="circle"
                style={{ borderRadius: 10, scale: 2 }}
              />
            ) : null}
          </MoveBox>
        </ApBox>
      </AniPresence>

      <AniPresence>
        <ApBox>
          <Grid>
            {["1", "2", "3", "4"].map((n) => (
              <Section onClick={() => setId(n)} key={n} layoutId={n} />
            ))}
          </Grid>
          <AnimatePresence>
            {id ? (
              <Overlay
                onClick={() => setId(null)}
                variants={overlay}
                initial="hidden"
                animate="visible"
                exit="exit">
                <Section layoutId={id} style={{ width: 400, height: 200 }} />
              </Overlay>
            ) : null}
          </AnimatePresence>
        </ApBox>
      </AniPresence>
    </Wrapper>
  );
}

export default App;
