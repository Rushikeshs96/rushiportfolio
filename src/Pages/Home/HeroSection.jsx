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
                        <span className="hero--section--title--color">Software</span>
                        {" "}
                        <br/>
                        Engineer
                    </h1>
                    <p className="hero--section-description">
                        I build reliable, scalable software solutions that support real business workflows from concept to production.
                        My focus is on clean engineering, thoughtful system design, and delivering product experiences that are fast, maintainable, and easy to use.
                    </p>
                </div>
                <button className="btn btn-primary"
                    onClick={redirectToEmail}>Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src={
                        `${
                            process.env.PUBLIC_URL
                        }/img/hero_img.png`
                    }
                    alt="Hero Section"/>
            </div>
        </section>
    );
}
