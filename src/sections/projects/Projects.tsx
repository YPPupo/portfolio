
import ProjectItem from "@/components/projectItem/ProjectItem";
import { projectItems } from "@/utils/constants";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-10 px-5">
      <h2 className="text-h1">Projects</h2>
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
