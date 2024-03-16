import { techItems } from "@/utils/constants";

const Skills = () => {
  return (
    <div className="flex flex-col w-full min-h-screen px-5 md:py-20 md:px-20">
      <h2 className="text-4xl font-bold underline font-poppins">Skills</h2>
      <div className="grid w-full grid-cols-1 my-auto md:grid-cols-2 py-14">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center w-full">
            <div className="w-[100px] min-w-[100px] font-semibold">Frontend :</div>
            <div className="flex flex-wrap items-center w-full gap-5 px-10">
              {techItems.frontend.map((techF) => (
                <img className="w-10 h-10" src={techF} alt="TechFrontend" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] min-w-[100px] font-semibold">Backend :</div>
            <div className="flex flex-wrap items-center w-full gap-5 px-10">
              {techItems.backend.map((techB) => (
                <img className="w-10 h-10" src={techB} alt="TechBackend" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] min-w-[100px] font-semibold">Mobile :</div>
            <div className="flex flex-wrap items-center w-full gap-5 px-10">
              {techItems.mobile.map((techM) => (
                <img className="w-10 h-10" src={techM} alt="TechMobile" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] min-w-[100px] font-semibold">Techs :</div>
            <div className="flex flex-wrap items-center w-full gap-5 px-10">
              {techItems.tech.map((techT) => (
                <img className="w-10 h-10" src={techT} alt="Techs" />
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
