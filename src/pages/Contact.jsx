import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!name || !email || !message) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

   
    setSuccessMessage('Your message has been sent successfully!');
    setErrorMessage('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Email: support@propertyrental.com</p>
      <p>Phone: +91 123 456 7890</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="input-field"
            rows="4"
          />
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      
      <div className="map">
        <h3>Our Location</h3>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434507591!2d144.95373631531624!3d-37.81720997975105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f6c8d5f%3A0x5045675218ceed16!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1635881292084!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
