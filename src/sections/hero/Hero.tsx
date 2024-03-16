import SocialPanel from "../../components/socialPanel/SocialPanel";
import HeroAnimation from "../../components/hero-animation/HeroAnimation";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:grid md:grid-cols-2 content-center min-h-screen w-full pt-[56px]">
      <div className="col-span-1 flex h-full">
        <div className="max-w-lg m-auto space-y-4 px-5 py-12">
          <h1 className="font-poppins text-5xl font-bold">Yasel Pérez Pupo</h1>
          <p className="font-poppins font-bold text-2xl">
            {"<"}Desarrollador <span className="text-sky-900">Frontend</span>
            {"/>"}
          </p>
          <p className="font-medium mt-4 text-gray-500 leading-relaxed">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>
          <div className="flex gap-5">
            <a href="@/assets/docs/cv.pdf" download >
              <button className="button">Download CV</button>
            </a>
            <SocialPanel />
          </div>
        </div>
      </div>

      <div className="h-full col-span-1 hidden md:block">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;
