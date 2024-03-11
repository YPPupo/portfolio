import "./Hero.css";
import SocialPanel from "../../components/socialPanel/SocialPanel";
import HeroAnimation from "../../components/hero-animation/HeroAnimation";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 content-center min-h-screen max-h-screen w-full pt-[56px]">
      <div className="col-span-1 flex h-full">
        <div className="max-w-lg m-auto space-y-4 px-5 py-12">
          <h1 className="text-5xl font-bold">Yasel Pérez Pupo</h1>
          <p className="font-bold text-2xl">
            {"<"}Desarrollador <span className="text-sky-900">Frontend</span>
            {"/>"}
          </p>
          <p className="font-medium mt-4 text-gray-500">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <SocialPanel />
        </div>
      </div>

      <div className="h-full col-span-1">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;
