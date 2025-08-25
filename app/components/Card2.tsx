import Image from "next/image";
import { RiCompassDiscoverFill } from "react-icons/ri";
import phoneImage from "../../public/realestate.png";

const Card2 = () => {
  return (
    <div>
      <div className="w-70 h-70 relative">
        <Image src={phoneImage} alt="phoneImage" className="absolute" />
        <div className="flex justify-center">
          <div className="w-60 h-18 bg-white dark:bg-neutral-200 absolute bottom-5 rounded-lg p-4 flex justify-between items-center">
            <div className="dark:text-neutral-900">
              <h1 className="font-semibold text-sm">Frontend Project</h1>
              <p className="text-sm">web design</p>
            </div>
            <div>
              <RiCompassDiscoverFill className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
