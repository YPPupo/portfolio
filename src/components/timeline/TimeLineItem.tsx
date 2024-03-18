import TechTags from "../tags/TechTags";

interface Props {
  date:string;
  positionTitle: string;
  companyName: string;
  activities: string[];
  techs: string[];
  fullWidth?: boolean;
}

const TimeLineItem = ({
  date,
  positionTitle,
  companyName,
  activities,
  techs,
  fullWidth,
}: Props) => {
  return (
    <div
      className={`${
        fullWidth ? "w-full " : "w-full lg:w-[40%] md:max-w-[40%]"
      } order-1 rounded-lg shadow-xl px-6 py-6 flex flex-col bg-picton-blue-200 text-picton-blue-950`}
    >
      <h3 className="text-h2 font-bold text-gray-800">{positionTitle}</h3>
      <h4 className="text-h3 font-semibold md:mb-1 text-picton-blue-900">{companyName}</h4>
      <p className="block mb-1 md:hidden">{date}</p>
      <ul className="flex flex-col mb-2 space-y-1">
        {activities.map((activity,index) => (
          <li key={index} className="text-p tracking-wider text-gray-800 text-opacity-100">
            {activity}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 lg:gap-5">
        {techs.map((tech,index) => (
          <TechTags key={index} title={tech} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineItem;
