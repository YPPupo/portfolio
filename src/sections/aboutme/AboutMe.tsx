import Me from "../../assets/aboutme.jpg";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:justify-center gap-5 md:gap-0 md:min-h-screen px-5 py-10">
      <h3 className="text-h1 hidden md:block order-1 mb-5 2xl:mb-0">About me</h3>
      <div className="items-center  section justify-items-center gap-y-4 order-1 md:order-2">
        <p className="text-p order-3 md:order-1">
          I’m a proactive and knowledgeable Software Developer with expertise in
          JavaScript technologies. My strong analytical skills and commitment to
          continuous learning drive my pursuit of excellence. I excel in web
          application development, leveraging modern frameworks like React.js
          and Angular. Passionate about adhering to best practices, I actively
          contribute to high-quality software solutions.
          <br /> <br />
          As an accomplished Software Developer, I’ve also delved into the world
          of Flutter, Google’s open-source UI framework for building natively
          compiled applications. My proficiency in JavaScript technologies
          extends seamlessly to Flutter, where I’ve crafted elegant and
          responsive mobile interfaces. Whether it’s creating delightful user
          experiences or optimizing performance, I thrive on the challenges that
          Flutter presents.
          <br /> <br />I seek to participate in agile team environments,
          collaborating effectively with designers and developers to achieve
          project goals and drive success.
        </p>
        <h3 className="order-2 text-h1 block md:hidden">About me</h3>
        <div className="order-1 md:order-2  md:flex w-[70%] max-w-[350px] 2xl:max-w-[500px] overflow-hidden rounded-full justify-center aspect-square ">
          <img className="w-[120%]" src={Me} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
