import SocialPanel from "../../components/socialPanel/SocialPanel";
import HeroAnimation from "../../components/hero-animation/HeroAnimation";

const Hero = () => {
  return (
    <div id="home" className="items-center min-h-screen section justify-items-center">
      <div className="px-10 py-12 space-y-4">
        <h1 className="text-h1">Yasel Pérez Pupo</h1>
        <p className="text-h2">
          {"<"}Developer <span className="text-sky-900">Frontend</span>
          {"/>"}
        </p>
        <p className="mt-4 text-slate-600 text-p">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        <div className="flex gap-5">
          <a href="@/assets/docs/cv.pdf" download>
            <button className="button">Download CV</button>
          </a>
          <SocialPanel />
        </div>
      </div>

      <div className="hidden w-full h-full col-span-1 md:flex md:items-center md:justify-center md:translate-y-[4%]">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;
