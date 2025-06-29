import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="education--section" id="Education">
      <div className="portfolio--container">
        <p className="sub--title">My Background</p>
        <h2 className="section--heading">Education</h2>
      </div>
      <div className="education--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="education--section--card">
            <div className="education--section--card--header">
              <h3 className="education--card--degree">{item.degree}</h3>
              <p className="education--card--date">{item.date}</p>
            </div>
            <p className="education--card--institution">{item.institution}</p>
            <p className="education--card--score">{item.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}