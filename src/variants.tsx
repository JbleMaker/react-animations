export const boxVariants = {
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

export const CircleVariants = {
  start: {
    opacity: 0,
    x: 10,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

export const animation = {
  hidden: { scale: 0 },
  visible: {
    rotate: 180,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
    },
  },
};
