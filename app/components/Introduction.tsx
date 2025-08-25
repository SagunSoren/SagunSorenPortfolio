import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import profilepicture from "../../public/profile.jpeg";
import next from "../../public/Next.js.png";
import tailwind from "../../public/tailwind.png";
import green from "../../public/green.png";
import figma from "../../public/figma.png";
import git from "../../public/git.png";
import react from "../../public/React.png";

import Card from "./Card";
const Introduction = () => {
  return (
    <div
      id="aboutme"
      className="mt-24 px-40 max-sm:px-2 flex flex-col items-center justify-center dark:text-neutral-300"
    >
      <p>Introduction</p>
      <h1 className="text-3xl tracking-wider">About me</h1>

      <div className="flex gap-10 mt-10">
        {/* <div className="max-md:hidden">
          <Image
            alt="myphoto"
            src={profilepicture}
            className="w-[800px] rounded-xl"
          ></Image>
        </div> */}

        <div>
          <p className="text-base/8 text-center">
            I am a student, self-taught web developer specializing in building
            fast, responsive, and modern web apps.
          </p>

          <div className="flex max-md:justify-center ">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-10">
              <Card
                icon={FaCode}
                heading="Languages"
                desc="HTML, CSS, JavaScript,React Js, Next Js"
              />
              <Card
                icon={LuGraduationCap}
                heading="Education"
                desc="B.Tech NIT DGP"
              />
              <Card
                icon={FaCode}
                heading="Projects"
                desc="Built more than 5 projects"
              />
            </div>
          </div>

          <p className="text-gray-400 mt-5">Tools i use</p>
          <div className="flex gap-5">
            <div className="border-1 items-center justify-center flex h-18 w-18 rounded-lg border-gray-300">
              <Image alt="react" className="" src={react}></Image>
            </div>
            <div className="border-1 items-center justify-center flex h-18 w-18 rounded-lg border-gray-300">
              <Image alt="vscodelogo" className="w-8" src={next}></Image>
            </div>
            <div className="border-1 items-center justify-center flex h-18 w-18 rounded-lg border-gray-300">
              <Image alt="vscodelogo" className="w-8" src={tailwind}></Image>
            </div>
            <div className="border-1 items-center justify-center flex h-18 w-18 rounded-lg border-gray-300">
              <Image alt="vscodelogo" className="w-8" src={figma}></Image>
            </div>
            <div className="border-1 items-center justify-center flex h-18 w-18 rounded-lg border-gray-300">
              <Image alt="vscodelogo" className="w-8" src={git}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
