import "./Clouds.css";
import { motion } from "framer-motion";

const Clouds = () => {
  const cloudVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const clouds = [
    { duration: 35, scale: 0.65, initialX: "-120%" },
    { duration: 50, scale: 0.45, initialX: "-70%" },
    { duration: 25, scale: 0.75, initialX: "-50%" },
    { duration: 40, scale: 0.35, initialX: "-110%" },
    { duration: 25, scale: 0.65, initialX: "-150%" },
  ];

  return (
    <div id="background-wrap" className="z-[1]">
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: cloud.initialX }}
          animate={{ opacity: 1, x: "100%" }}
          exit={{ opacity: 0, x: cloud.initialX }}
          variants={cloudVariants}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ scale: cloud.scale }}
        >
          <div className="cloud"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Clouds;
