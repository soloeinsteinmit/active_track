import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const MotionBotIcon = ({
  botClassName = "",
  className = "",
  resolveSeconds = 5000,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateRobot = async () => {
      await controls.start({ scale: [1, 1.2, 1], rotate: [0, 360] });
      //   await controls.start({ scale: 1 });
      await new Promise((resolve) => setTimeout(resolve, resolveSeconds));
      animateRobot();
    };

    animateRobot();
  }, [controls, resolveSeconds]);

  return (
    <motion.div
      className={
        "flex justify-center items-center border-3 border-foreground rounded-full p-2 " +
        className
      }
      animate={controls}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <FaRobot className={"text-3xl " + botClassName} />
    </motion.div>
  );
};

export default MotionBotIcon;
