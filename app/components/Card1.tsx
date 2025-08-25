import { IconType } from "react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";

type data = {
  icon: IconType;
  heading: string;
  desc: string;
};

const Card1 = ({ icon: Icon, heading, desc }: data) => {
  return (
    <div>
      <div className="w-[250px] h-[250px] border-1 rounded-lg p-4 flex flex-col gap-3 hover:shadow-[5px_5px_0_rgba(0,0,0,1)]  border-gray-300">
        <div className="bg-[#ff388b] flex w-10 h-10 justify-center  items-center rounded-xl mt-5">
          <Icon className="text-2xl text-white font-bold" />
        </div>
        <p className="text-xl">{heading}</p>
        <p className="text-sm">{desc}</p>
        <p className="text-sm flex items-center mt-2 ">
          Read More
          <IoIosArrowRoundForward className="text-xl" />
        </p>
      </div>
    </div>
  );
};
export default Card1;
