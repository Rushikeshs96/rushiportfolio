import data from "../../data/index.json";

export default function Certifications() {
  return (
    <section className="certifications--section" id="Certifications">
      <div className="portfolio--container">
        <p className="sub--title">Professional Credentials</p>
        <h2 className="section--heading">Certifications</h2>
      </div>
      <div className="certifications--section--container">
        {data?.certifications?.map((item) => (
          <div key={item.id} className="certifications--section--card">
            <div className="certifications--badge">{item.credential}</div>
            <div className="certifications--content">
              <div className="certifications--header">
                <div>
                  <h3 className="certifications--title">{item.name}</h3>
                  <p className="certifications--issuer">{item.issuer}</p>
                </div>
                <p className="certifications--date">{item.date}</p>
              </div>
              <p className="certifications--description">{item.description}</p>
              <a
                className="text-sm portfolio--link"
                href={item.linkUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.link} for ${item.name}`}
              >
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
