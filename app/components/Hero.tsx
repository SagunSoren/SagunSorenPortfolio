import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import profilepicture from "../../public/profile.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col justify-center items-center py-10 w-xl text-center gap-6">
        <div className="w-25 rounded-full h-25 overflow-hidden">
          <Image
            alt="my-photo"
            className="object-contain"
            src={profilepicture}
          ></Image>
        </div>
        <div className="dark:text-neutral-300 flex flex-col gap-5">
          <p>Hi! I'm Sagun Soren 👋</p>
          <h1 className="text-5xl">frontend web developer based in India.</h1>
          <p className="text-center tracking-wider">
            I am a frontend developer from India, specializing in building fast,
            responsive, and modern web apps with React & Next.js.
          </p>
        </div>

        <div className="flex gap-5 mt-4">
          <a
            className="flex cursor-pointer items-center gap-2 bg-black text-white px-5 py-4 rounded-full dark:text-neutral-900 dark:bg-neutral-300"
            href="#testimonials"
          >
            connect with me
            <FaArrowRight />
          </a>
          <button className="dark:border-neutral-300 dark:text-neutral-300 flex items-center gap-2 border-1 px-5 py-4 rounded-full">
            my resume
            <AiOutlineDownload className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
