import TechTags from "../tags/TechTags";

interface Props {
  positionTitle: string;
  companyName: string;
  activities: string[];
  techs: string[];
  fullWidth?: boolean;
}

const TimeLineItem = ({
  positionTitle,
  companyName,
  activities,
  techs,
  fullWidth,
}: Props) => {
  return (
    <div
      className={`${
        fullWidth ? "w-full " : "w-5/12 "
      }order-1 rounded-lg shadow-xl px-6 py-6 flex flex-col bg-picton-blue-200 text-picton-blue-950`}
    >
      <h3 className="font-bold text-xl text-gray-800">{positionTitle}</h3>
      <h4 className="mb-1 font-semibold text-picton-blue-900">{companyName}</h4>
      <ul className="flex flex-col space-y-1 mb-2">
        {activities.map((activity,index) => (
          <li key={index} className="text-sm font-medium leading-snug tracking-wider text-opacity-100 text-gray-800">
            {activity}
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
        {techs.map((tech,index) => (
          <TechTags key={index} title={tech} />
        ))}
      </div>
    </div>
  );
};

export default TimeLineItem;
