import SocialPanel from "../../socialPanel/SocialPanel";

const Footer = () => {
  return (
    <div className="bg-white min-h-16 px-16 py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="font-poppins font-bold text-3xl">Yasel Pérez Pupo</h2>
          <p className="max-w-xl">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h3 className="font-poppins font-bold text-3xl">Social Media</h3>
          <SocialPanel />
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center pt-10">
        <h5 className="font-poppins font-bold">
          © Copyright 2024 . Made by Yasel Pérez Pupo
        </h5>
      </div>
    </div>
  );
};

export default Footer;
