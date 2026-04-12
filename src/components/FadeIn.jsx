import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

export const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};