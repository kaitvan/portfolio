import styles from "./About.module.css";
import Photo from "../assets/headshot.jpg";
import Technology from "../components/Technology";

const AboutPage = () => {
  const aboutMeText = (
    <div className={styles.text}>
      <p>
        In my past life, I spent about 10 years in K-12 education and adult
        learning. This means I'm incredibly skilled in building relationships,
        quick decision-making, and general professional skills such as time
        management, collaboration, and communication.
      </p>
      <p>
        A career in technology offers endless opportunities for learning and
        development. I excel at picking up new technologies quickly and enjoy
        problem-solving through challenges. My strengths lie in capitalizing on
        my experience as an educator to design effective solutions with a
        diverse range of users in mind.
      </p>
      <p>Reach out to me for any job opportunities or just to network!</p>
      <div className={styles.quote}>
        <p>
          “Twenty years from now you will be more disappointed by the things
          that you didn't do than by the ones you did do. So throw off the
          bowlines. Sail away from the safe harbor. Catch the trade winds in
          your sails. Explore. Dream. Discover.”
        </p>
        <p className={styles.byline}>- Mark Twain</p>
      </div>
    </div>
  );

  const technologies = [
    { skill: "React.js", level: "advanced" },
    { skill: "JavaScript", level: "advanced" },
    { skill: "TypeScript", level: "intermediate" },
    { skill: "CSS3", level: "intermediate" },
    { skill: "Python", level: "intermediate" },
    { skill: "Ruby", level: "functional" },
    { skill: "C#/.NET", level: "functional" },
    { skill: "Swift", level: "functional" },
    { skill: "HTML5", level: "advanced" },
    { skill: "jQuery", level: "intermediate" },
    { skill: "Markdown", level: "advanced" },
  ];

  return (
    <>
      <h1 className={styles.title}>
        Hi, I'm Kaitlyn. <br />
        Nice to meet you!
      </h1>
      <div className={styles.about}>
        {aboutMeText}
        <div>
          <img className={styles.headshot} src={Photo} alt="Photo of Kaitlyn" />
          <div className={styles.technologies}>
            {technologies.map((technology) => (
              <Technology
                key={technology.skill}
                skill={technology.skill}
                level={technology.level}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
