const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-20 flex items-center ">
      <h2 className="font-bold text-4xl underline self-start">Skills</h2>
      <div className="grid grid-cols-2 py-14">
        <div>
          <ul className="flex gap-5 flex-wrap text-white">
            <li className="px-5 py-3 bg-gray-400 rounded-lg">Git</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">HTML</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">CSS</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">Javascript</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">Typescript</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">React.js</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">Next.js</li>
            <li className="px-5 py-3 bg-gray-400 rounded-lg">Figma</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skills;
