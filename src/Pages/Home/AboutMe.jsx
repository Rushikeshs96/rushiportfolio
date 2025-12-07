export default function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={
                        `${
                            process.env.PUBLIC_URL
                        }/img/about-me.png`
                    }
                    alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">
                        Hello, I'm Rushikesh, a Full-Stack Engineer focused on the .NET ecosystem. With nearly 2 years of professional experience, I develop, test, and deploy scalable applications using ASP.NET Core, Angular, and Microsoft Azure.
                        <br/><br/>
                        My work often involves more than just standard web development; I've implemented automated cloud deployments with Infrastructure as Code (Bicep) and integrated third-party services like OpenAI and Twilio to build smarter features. I believe in writing clean, maintainable code and am always exploring new tools to improve performance and development workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}
