import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="Experience">
      <div className="portfolio--container">
        <p className="sub--title">My Career Path</p>
        <h2 className="section--heading">Professional Experience</h2>
      </div>
      <div className="experience--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="experience--section--card--header">
              <h3 className="experience--card--title">{item.title}</h3>
              <p className="experience--card--date">{item.date}</p>
            </div>
            <div className="experience--section--card--meta">
              <p className="experience--card--company">{item.company}</p>
              <p className="experience--card--location">{item.location}</p>
            </div>
            <div className="experience--card--description">
              <ul>
                {item.description.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}