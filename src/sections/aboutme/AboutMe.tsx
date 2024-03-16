import Me from "../../assets/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen px-5 md:py-20 flex flex-col justify-center xl:px-20">
      <h3 className="font-poppins font-bold mx-auto md:mx-0 text-4xl underline">About me</h3>
      <div className="flex flex-col md:grid md:grid-cols-2 ">
        <div className="flex items-center h-full lg:px-5 xl:px-10 py-8">
          <p className="text-lg text-pretty leading-relaxed">
            A proactive and knowledgeable Software Developer with expertise in
            JavaScript technologies. My strong analytical skills and commitment
            to continuous learning drive my pursuit of excellence. I excel in
            web application development, leveraging modern frameworks like
            React.js and Angular. Passionate about adhering to best practices, I
            actively contribute to high-quality software solutions.
            <br />
            <br />I seek to participate in agile team environments,
            collaborating effectively with designers and developers to achieve
            project goals and drive success.
          </p>
        </div>
        <div className="hidden md:flex md:justify-center">
          <div className="w-[90%] xl:w-[70%] overflow-hidden rounded-full flex justify-center aspect-square ">
            <img className="w-[120%]" src={Me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
