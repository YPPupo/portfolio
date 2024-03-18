import Carousel from "../carrousel/Carousel";
import TechTags from "../tags/TechTags";

interface Props {
  images: string[];
  title: string;
  description: string;
  techs: string[];
}

const ProjectItem = ({ title, images, description, techs }: Props) => {
  return (
    <div className="grid grid-cols-1 px-5 py-5 space-x-5 md:grid-cols-[minmax(600px,1fr)_minmax(900px,2fr)] bg-picton-blue-950 rounded-3xl">
      <div className="w-full h-auto col-span-1">
        <Carousel images={images} />
      </div>
      <div className="flex flex-col justify-between w-full h-full col-span-1 gap-3">
        <div>
        <h3 className="text-3xl font-bold font-poppins text-picton-blue-100">
          {title}
        </h3>
        <p className="text-picton-blue-200">{description}</p>
        </div>
        <div className="flex gap-3">
          {techs.map((tech, index) => (
            <TechTags key={index} title={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
