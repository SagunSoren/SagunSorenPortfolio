import Headings from "./Headings";
import { FaArrowRight } from "react-icons/fa";

const Connect = () => {
  return (
    <div id="testimonials">
      <Headings
        subheading="Connect with me"
        heading="Get in touch"
        desc="I'd love to hear from you! If you have any questions, comments or 
              feedback, please use the form below"
      />

      <form
        action="https://submit-form.com/pWosz2byK"
        method="POST"
        className="dark:text-neutral-300 px-2"
      >
        <div className="flex justify-center items-center gap-10 ">
          <input
            name="name"
            type="text"
            className="border-1 w-80 h-10 p-2 rounded-lg"
            placeholder="Enter your name"
          />
          <input
            name="email"
            type="email"
            required
            className="border-1 w-80 h-10 p-2 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-center ">
          <textarea
            name="message"
            className="border-1 w-170 h-50 mt-10 text-left align-top p-5 rounded-lg"
            placeholder="Enter your message"
          />
        </div>
        <div className="flex justify-center items-center w-full mt-10 ">
          <button
            type="submit"
            className="px-8 py-5 flex items-center hover:cursor-pointer gap-2 bg-black rounded-full  text-white text-sm"
          >
            Submit now
            <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Connect;
