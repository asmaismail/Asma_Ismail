import React, { useState } from 'react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    setIsSent(true);
    // Add any additional functionality on sending the message
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="wrapper centered relative">
        <article className={`letter ${isSent ? 'sent' : ''}`}>
          <div className="side">
            <h1 className="text-2xl font-script">Contact us</h1>
            <p>
              <textarea
                className={`w-full h-40 bg-transparent border p-2 focus:outline-none resize-none transition-opacity ${
                  isSent ? 'opacity-0' : ''
                }`}
                placeholder="Your message"
              ></textarea>
            </p>
          </div>
          <div className="side">
            <p>
              <input
                type="text"
                className={`w-1/2 bg-transparent border p-2 mb-4 focus:outline-none ${
                  isSent ? 'opacity-0' : ''
                }`}
                placeholder="Your name"
              />
            </p>
            <p>
              <input
                type="email"
                className={`w-1/2 bg-transparent border p-2 mb-4 focus:outline-none ${
                  isSent ? 'opacity-0' : ''
                }`}
                placeholder="Your email"
              />
            </p>
            <p>
              <button
                id="sendLetter"
                onClick={handleSend}
                className={`py-2 px-4 rounded-md bg-green-600 text-white focus:outline-none transition duration-300 ease-in-out ${
                  isSent ? 'opacity-0' : ''
                }`}
              >
                Send
              </button>
            </p>
          </div>
        </article>
        <div className={`envelope front absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSent ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`envelope back absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isSent ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      <p className={`result-message centered ${isSent ? 'opacity-100' : 'opacity-0'}`}>
        Thank you for your message
      </p>
    </div>
  );
};

export default Contact;
