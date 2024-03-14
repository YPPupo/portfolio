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
    <div className="grid grid-cols-[minmax(600px,_1fr)_minmax(900px,_2fr)] py-14 bg-picton-blue-950 px-10 rounded-xl">
      <div className="col-span-1 w-full h-full ">
        <Carousel images={images} />
      </div>
      <div className="col-span-1 w-full h-full flex flex-col gap-3 px-8 pb-10 ">
        <h3 className="font-poppins text-3xl font-bold text-picton-blue-100">{title}</h3>
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
