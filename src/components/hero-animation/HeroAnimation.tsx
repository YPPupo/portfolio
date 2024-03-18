import { motion } from "framer-motion";
import Sun from "./../../assets/Sun.svg";
import Clouds from "../../components/clouds/Clouds";

const HeroAnimation = () => {
  return (
    <div className="bg-gradient-to-br w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] from-sky-700 via-sky-500 to-sky-400 relative flex justify-center items-center overflow-hidden aspect-square rounded-full">
      <motion.img
        src={Sun}
        className="w-1/2 aspect-square"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.img>
      <Clouds />
    </div>
  );
};

export default HeroAnimation;
