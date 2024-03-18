import { ExperienceItems } from "../../utils/constants";
import TimeLineItem from "./TimeLineItem";

const containerStyles = "flex items-center justify-between w-full gap-5 mb-8";
const emptyContainerStyles = "order-1 hidden md:block md:w-[40%]";
const dateContainerStyles =
  "hidden md:flex md:items-center order-1 h-8 px-4 bg-gray-800 rounded-lg shadow-xl";
const dateStyles = " font-semibold text-white md:mx-auto text-nowrap";

const TimeLine = () => {
  return (
    <div className="w-full h-full">
      <div className="relative h-full overflow-hidden">
        <div className="absolute hidden h-full border border-gray-700 md:block border-opacity-20 left-1/2"></div>

        {/* First Section */}
        <div className={`${containerStyles} right-timeline self-end`}>
          <div className={emptyContainerStyles}></div>
          <div className={dateContainerStyles}>
            <h1 className={dateStyles}>{ExperienceItems[0].date}</h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[0].positionTitle}
            companyName={ExperienceItems[0].companyName}
            activities={ExperienceItems[0].activities}
            techs={ExperienceItems[0].techs}
            date={ExperienceItems[0].date}
          />
        </div>


        <div className={`${containerStyles} md:flex-row-reverse left-timeline`}>
          <div className={emptyContainerStyles}></div>
          <div className={dateContainerStyles}>
            <h1 className={dateStyles}>{ExperienceItems[1].date}</h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[1].positionTitle}
            companyName={ExperienceItems[1].companyName}
            activities={ExperienceItems[1].activities}
            techs={ExperienceItems[1].techs}
            date={ExperienceItems[1].date}
          />
        </div>

        <div className={`${containerStyles} right-timeline`}>
          <div className={emptyContainerStyles}></div>
          <div className={dateContainerStyles}>
            <h1 className={dateStyles}>{ExperienceItems[2].date}</h1>
          </div>

          <div className="flex flex-col order-1 w-full gap-6 py-4 md:w-[40%]">
            <TimeLineItem
              positionTitle={ExperienceItems[2].positionTitle}
              companyName={ExperienceItems[2].companyName}
              activities={ExperienceItems[2].activities}
              techs={ExperienceItems[2].techs}
              date={ExperienceItems[2].date}
              fullWidth
            />
            <TimeLineItem
              positionTitle={ExperienceItems[3].positionTitle}
              companyName={ExperienceItems[3].companyName}
              activities={ExperienceItems[3].activities}
              techs={ExperienceItems[3].techs}
              date={ExperienceItems[3].date}
              fullWidth
            />
          </div>
        </div>

        <div className={`${containerStyles} md:flex-row-reverse left-timeline`}>
          <div className={emptyContainerStyles}></div>
          <div className={dateContainerStyles}>
            <h1 className={dateStyles}>{ExperienceItems[4].date}</h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[4].positionTitle}
            companyName={ExperienceItems[4].companyName}
            activities={ExperienceItems[4].activities}
            techs={ExperienceItems[4].techs}
            date={ExperienceItems[4].date}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
