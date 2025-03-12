
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          {/* About Me Section */}
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a dedicated Software Quality Assurance (SQA) professional with a
                strong focus on testing methodologies, automation frameworks, and bug tracking.
                I ensure software reliability, optimize test strategies, and enhance
                overall product quality.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">11+</h3>
                <p className="text-xs md:text-white">Tested Applications</p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">5+</h3>
                <p className="text-xs md:text-white">Years of Experience</p>
              </div>
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">30+</h3>
                <p className="text-xs md:text-white">Successful Deployments</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/placeYourEndpointHere"
            method="POST"
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Let&apos;s Connect!</p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;