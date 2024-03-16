import { FaLinkedin, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import "./SocialPanel.css";

const SocialPanel = () => {
  return (
    <div className="social-container">
      <a className="social-item" href="https://github.com/YPPupo" target="_blank">
        <FaSquareGithub className="icon text-2xl" />
      </a>
      <a className="social-item" href="https://www.linkedin.com/in/yppupo/" target="_blank">
        <FaLinkedin className="icon text-2xl" />
      </a>
      <a className="social-item" href="https://twitter.com/yasel_prez98" target="_blank">
        <FaSquareXTwitter className="icon text-2xl" />
      </a>
    </div>
  );
};

export default SocialPanel;
