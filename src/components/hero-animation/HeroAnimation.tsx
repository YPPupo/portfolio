import { motion } from "framer-motion";
import Sun from "./../../assets/Sun.svg";
import Clouds from "../../components/clouds/Clouds";

const HeroAnimation = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-[56px] bg-gradient-to-br w-[70%] from-sky-700 via-sky-500 to-sky-400 relative flex justify-center items-center overflow-hidden bg-transparent aspect-square rounded-full">
        <motion.img
          src={Sun}
          height={300}
          width={300}
          className=""
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        ></motion.img>
        <Clouds />
      </div>
    </div>
  );
};

export default HeroAnimation;
