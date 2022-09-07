import TwitterIcon from "../assets/twitter-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import GithubIcon from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="card-footer">
      <div className="card-footer-icons">
        <img
          src={TwitterIcon}
          alt="twitter-icon"
          className="card-footer-icon"
        />
        <img
          src={FacebookIcon}
          alt="facebook-icon"
          className="card-footer-icon"
        />
        <img
          src={InstagramIcon}
          alt="instagram-icon"
          className="card-footer-icon"
        />
        <img src={GithubIcon} alt="github-icon" className="card-footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
