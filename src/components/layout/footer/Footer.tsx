import SocialPanel from "../../socialPanel/SocialPanel";

const Footer = () => {
  return (
    <div className="px-5 py-8 md:px-16 md:py-10 bg-picton-blue-950 text-picton-blue-100 min-h-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold font-poppins">Yasel Pérez Pupo</h2>
          <p className="max-w-xl">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold font-poppins">Social Media</h3>
          <SocialPanel />
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center pt-10">
        <h5 className="font-bold text-center font-poppins">
          © Copyright 2024 . Made by Yasel Pérez Pupo
        </h5>
      </div>
    </div>
  );
};

export default Footer;
