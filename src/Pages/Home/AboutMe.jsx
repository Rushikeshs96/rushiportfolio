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
                        Hello, I'm Rushikesh, a Software Engineer focused on the .NET ecosystem. I develop, test, and deploy scalable applications using ASP.NET Core, Angular, TypeScript, and Microsoft Azure.
                        <br/><br/>
                        My work includes automated cloud deployments with Bicep, AI features powered by OpenAI, Twilio communication workflows, background processing with Hangfire, and asynchronous messaging with MassTransit and RabbitMQ. I enjoy writing maintainable code that turns complex business workflows into dependable product features.
                    </p>
                </div>
            </div>
        </section>
    );
}
