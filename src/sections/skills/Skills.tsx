import { techItems } from "@/utils/constants";

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-20 flex flex-col">
      <h2 className="font-poppins font-bold text-4xl underline">Skills</h2>
      <div className="grid grid-cols-2 py-14 my-auto">
        <div className="flex flex-col gap-10">
          <div className="flex items-center">
            <div className="w-[100px] min-w-[100px] font-semibold">Frontend :</div>
            <div className="flex items-center px-10 gap-5">
              {techItems.frontend.map((techF) => (
                <img className="h-10 w-10" src={techF} alt="TechFrontend" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] font-semibold">Backend :</div>
            <div className="flex items-center px-10 gap-5">
              {techItems.backend.map((techB) => (
                <img className="h-10 w-10" src={techB} alt="TechBackend" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] font-semibold">Mobile :</div>
            <div className="flex items-center px-10 gap-5">
              {techItems.mobile.map((techM) => (
                <img className="h-10 w-10" src={techM} alt="TechMobile" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[100px] font-semibold">Techs :</div>
            <div className="flex items-center px-10 gap-5">
              {techItems.tech.map((techT) => (
                <img className="h-10 w-10" src={techT} alt="Techs" />
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
