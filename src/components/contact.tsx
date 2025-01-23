function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md"
              rows={5}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-cyan-400 text-gray-300 font-bold rounded-md hover:bg-cyan-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  