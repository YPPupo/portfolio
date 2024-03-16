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
    <div className="grid grid-cols-1 px-3 py-5 md:grid-cols-[minmax(600px,_1fr)_minmax(900px,_2fr)] md:py-14 bg-picton-blue-950 md:px-10 rounded-3xl">
      <div className="w-full h-auto col-span-1 mb-4">
        <Carousel images={images} />
      </div>
      <div className="flex flex-col w-full h-full col-span-1 gap-3 px-4 md:px-8 md:pb-10 ">
        <h3 className="text-3xl font-bold font-poppins text-picton-blue-100">{title}</h3>
        <p className="text-picton-blue-200">{description}</p>
        <div className="flex gap-3">
          {techs.map((tech,index) => (
            <TechTags key={index} title={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
