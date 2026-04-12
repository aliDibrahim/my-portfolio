export const fadeIn = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(10px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};