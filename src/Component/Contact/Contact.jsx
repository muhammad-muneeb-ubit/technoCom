import React from "react";

const Contact = () => {
  return (
    <div id="contact" className=" my-12 mx-12 px-10">
      <h2 className="text-3xl text-center px-4 mt-4 mb-4 text-green-600 ">Contact Us</h2>
      <p className="mb-8 mx-12 text-[16px] text-center">
        Should you have any questions or need additional information we will be
        happy to hear from you. Your request will be processed within one
        business day, and you will certainly receive feedback from us.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto px-4 py-12">
        <form className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="button border-2 border-green-500 py-2 px-4 rounded-full flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white hover:cursor-pointer w-full"
          >
            Send Message
          </button>
        </form>

        <div className="w-full text-[16px] md:w-1/2 bg-green-50 p-6 rounded-xl shadow-md">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
            Our Contact Information
          </h3>

          <p className="font-semibold">Head Office</p>
          <p>Suite # 408, 4th Floor</p>
          <p>Uni Center, I.I. Chundrigar Road</p>
          <p>Karachi, Pakistan</p>
          <p className="mt-2">
            Call: <span className="font-medium">(+92-21) 3241-9681</span>
          </p>
          </div>
          <div className="mt-6 rounded overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4561470925782!2d66.99613307421477!3d24.84826577793723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315ff62eb587f%3A0xb22461d52620dc50!2sUni%20Center%2C%20I.I%20Chundrigar%20Rd%2C%20Lalazar%2C%20Karachi%2C%2074000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1766838525533!5m2!1sen!2s" width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
