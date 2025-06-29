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
                        <span className="hero--section-title--color">Full Stack</span>
                        {" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        A Software Engineer with 1.1 years of experience delivering production-ready, full-stack applications on the .NET platform.
                        <br/>I specialize in translating complex business requirements into clean backend architecture and intuitive front-end experiences. Let's build software that solves real problems.
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
