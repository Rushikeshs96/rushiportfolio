export default function HeroSection() {
  const redirectToEmail = () => {
    window.location.href = "mailto:sapkalrushikesh96@gmail.com";
  };
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Rushikesh</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            A Full Stack Developer with a passion for creating intuitive web solutions.  
              I specialize in bridging the gap between design and functionality, crafting seamless user experiences from front to back.
              <br/>Let's collaborate and turn your ideas into reality!
            </p>
          </div>
          <button className="btn btn-primary" onClick={redirectToEmail}>Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src={`${process.env.PUBLIC_URL}/img/hero_img.png`} alt="Hero Section" />
        </div>
      </section>
    );
  }
  