
import ProjectItem from "@/components/projectItem/ProjectItem";
import { projectItems } from "@/utils/constants";

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-20 flex flex-col gap-10 justify-center ">
      <h2 className="font-poppins font-bold text-4xl underline">Projects</h2>
      <div className="flex flex-col gap-6">
      {projectItems.map((item, index) => (
        <ProjectItem
          key={index}
          title={item.title}
          description={item.description}
          images={item.images}
          techs={item.techs}
        />
      ))}
      </div>
    </div>
  );
};

export default Projects;
