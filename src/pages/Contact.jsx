import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import styles from "./Contact.module.css";

const ContactPage = () => {
  return (
    <>
      <h1 className={styles.title}>Let's be internet friends!</h1>
      <div className={styles.contact}>
        <div>
          <a href="https://www.linkedin.com/in/kait-van">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
        </div>
        <a href="https://www.linkedin.com/in/kait-van">Connect on LinkedIn</a>
      </div>
      <div className={styles.contact}>
        <div>
          <a href="https://github.com/kaitvan">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
        </div>
        <a href="https://github.com/kaitvan">Check out my work on GitHub</a>
      </div>
      <div className={styles.contact}>
        <div>
          <a href="mailto:kaitlyn.vangorkom@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
        </div>
        <a href="mailto:kaitlyn.vangorkom@gmail.com">Send me an email</a>
      </div>
    </>
  );
};

export default ContactPage;
