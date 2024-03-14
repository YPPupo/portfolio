import { ExperienceItems } from "../../utils/constants";
import TimeLineItem from "./TimeLineItem";

const TimeLine = () => {
  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>

        {/* First Section */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-800 shadow-xl px-4 rounded-lg h-8">
            <h1 className="mx-auto font-semibold text-white">
              ene. 2023 - mar. 2024
            </h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[0].positionTitle}
            companyName={ExperienceItems[0].companyName}
            activities={ExperienceItems[0].activities}
            techs={ExperienceItems[0].techs}
          />
          
        </div>

        <div className="mb-20 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-800 shadow-xl px-4 rounded-lg h-8">
            <h1 className="mx-auto text-white font-semibold">
              feb. 2023 - nov. 2023
            </h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[1].positionTitle}
            companyName={ExperienceItems[1].companyName}
            activities={ExperienceItems[1].activities}
            techs={ExperienceItems[1].techs}
          />
        </div>

        <div className="mb-20 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-800 shadow-xl px-4 rounded-lg h-8">
            <h1 className="mx-auto text-white font-semibold">
              jun. 2022 - feb. 2023
            </h1>
          </div>

          <div className="order-1 w-5/12 flex flex-col gap-6 px-6 py-4">
            <TimeLineItem
              positionTitle={ExperienceItems[2].positionTitle}
              companyName={ExperienceItems[2].companyName}
              activities={ExperienceItems[2].activities}
              techs={ExperienceItems[2].techs}
              fullWidth
            />
            <TimeLineItem
              positionTitle={ExperienceItems[3].positionTitle}
              companyName={ExperienceItems[3].companyName}
              activities={ExperienceItems[3].activities}
              techs={ExperienceItems[3].techs}
              fullWidth
            />
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="flex items-center order-1 bg-gray-800 shadow-xl px-4 rounded-lg h-8">
            <h1 className="mx-auto text-white font-semibold">
              dic. 2021 - ago. 2022
            </h1>
          </div>
          <TimeLineItem
            positionTitle={ExperienceItems[4].positionTitle}
            companyName={ExperienceItems[4].companyName}
            activities={ExperienceItems[4].activities}
            techs={ExperienceItems[4].techs}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
