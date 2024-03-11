const Experience = () => {
  return (
    <div className="min-h-screen py-20 px-20 flex items-center ">
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-3xl">Experience</h3>
        <div className="flex flex-col gap-3">
          <h3 className="text-black underline text-xl font-bold">FREELANCER</h3>
          <span>Remote | Havana, Cuba</span>
          <span className="text-white/35">DIC 2021-PRESENT</span>
          <p>
            - Led the design and implementation of "amzhub", a project focused
            on generating AI-driven product descriptions for Amazon. <br />
            - Developed "reviewr", a website for comprehensive product survey
            management.
            <br />
            - Orchestrated the design and implementation of "square-script", a
            project creating AI-generated scripts for YouTube videos,
            integrating innovative AI technology. <br />
            - Employed Firebase for robust backend development and data
            management in various projects. <br />- Utilized Figma for auxiliary
            design tasks, contributing to the aesthetic and functional aspects
            of web applications.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-black underline text-xl font-bold">
            FRONTEND DEVELOPER
          </h3>
          <span>La Liguilla | Remote | Havana, Cuba</span>
          <span className="text-white/35">
            DIC 2021 - AUG 2022, JAN 2023 – NOV 2023
          </span>
          <p>
            - Spearheaded the development and integration of new modules and
            functionalities using Angular and .Net, enhancing user experience
            and system capabilities. <br />
            - Conducted performance optimizations of existing workloads,
            significantly improving application efficiency and reliability.{" "}
            <br />
            - Proactively identified and resolved known bugs and system
            irregularities, ensuring robust application functionality and user
            satisfaction. <br />- Collaborated in a cross-functional team to
            align development efforts with company goals and user needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
