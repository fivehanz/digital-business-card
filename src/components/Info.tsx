import CardImage from "../assets/card-image.png";
import MailSvg from "../assets/email.svg";
import LinkedinSvg from "../assets/linkedin.svg";

const Info = () => {
  return (
    <div className="card-info">
      <img src={CardImage} alt="card-image" className="card-image" />
      <div className="card-info-desc">
        <h1>Laura Smith</h1>
        <h2>Frontend Engineer</h2>
        <p>laurasmith.website</p>
      </div>
      <div className="card-buttons">
        <button className="card-button">
          <img src={MailSvg} alt="email-icon" className="card-button-icon" />
          Email
        </button>
        <button className="card-button card-button-linkedin">
          <img
            src={LinkedinSvg}
            alt="linkedin-icon"
            className="card-button-icon"
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
