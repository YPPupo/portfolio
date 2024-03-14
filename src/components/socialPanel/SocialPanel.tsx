import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import "./SocialPanel.css";

const SocialPanel = () => {
  return (
    <div className="social-container">
      <a className="social-item" href="/">
        <FaFacebook className="icon text-2xl" />
      </a>
      <a className="social-item" href="/">
        <FaLinkedin className="icon text-2xl" />
      </a>
      <a className="social-item" href="/">
        <FaSquareXTwitter className="icon text-2xl" />
      </a>
    </div>
  );
};

export default SocialPanel;
