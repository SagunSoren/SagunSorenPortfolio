import { IconType } from "react-icons";

type data = {
  icon: IconType;
  heading: string;
  desc: string;
};

const Card = ({ icon: Icon, heading, desc }: data) => {
  return (
    <div>
      <div className="w-[200px] h-[200px] border-1 rounded-lg p-4 flex flex-col gap-3 hover:shadow-[5px_5px_0_rgba(0,0,0,1)]  border-gray-300">
        <Icon className="text-xl mt-5" />
        <p className="text-xl">{heading}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};
export default Card;
