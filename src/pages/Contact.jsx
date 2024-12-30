import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 bg-white p-6 shadow-lg rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
            </div>
            <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
              Submit
            </button>
          </form>

          {/* Address Info */}
          <div className="flex-1 bg-gray-50 p-6 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <h3 className="text-xl font-semibold mb-4">Interested in learning more about our investment strategy and how we can work together
              to meet your financial goals? 
              <br/>
              <br/>
              <span className='text-black'>Contact us today to discuss how Venexus Global Capital
              can help you navigate the complexities of modern investing.</span>
              </h3>
            <p className="text-sm text-gray-600 mb-2">
              Email: <a href="mailto:info@venexus.io">asinth@venexusglobalcap.in</a>
            </p>
            <p className="text-sm text-gray-600">
              Address: Headquarters Space, Hi-Tech City, Hyderbad, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
