const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-20  text-white- dark:text-bisque">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Let's Get in Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-black-300 max-w-2xl mx-auto">
          Whether you have a question, want to work together, or just want to
          say hi — my inbox is open!
        </p>
      </div>

      <form className="max-w-2xl mx-auto space-y-6 bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none bg-gray-50 dark:bg-[#334155] text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none bg-gray-50 dark:bg-[#334155] text-white"
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none bg-gray-50 dark:bg-[#334155] text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
