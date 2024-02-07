export default function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const phoneNumber = formData.get('phone-number');
    const topic = formData.get('choose-topic');
    const message = formData.get('message');

    // Construct mailto link with form data
    const mailtoLink = `mailto:sapkalrushikesh96@gmail.com?subject=Form Submission&body=
      First Name: ${firstName}%0D%0A
      Last Name: ${lastName}%0D%0A
      Email: ${email}%0D%0A
      Phone Number: ${phoneNumber}%0D%0A
      Topic: ${topic}%0D%0A
      Message: ${message}
    `;

    // Open mail client with pre-filled form data
    window.location.href = mailtoLink;
  };
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <br/>
          <h2>Contact Me</h2>
          <br/>
          <p className="text-lg">
          Mobile: +91 8550950912 / +91 9370530498
          </p>
          <br/>
          <p className="text-lg">
          Mail : sapkalrushikesh96@gmail.com
          </p>
        </div>
        <form className="contact--form--container" onSubmit={handleSubmit}>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Job enquiry</option>
              <option>Collaborations</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }
  