import Link from "next/link";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-20 px-40 max-lg:px-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-medium cursor-pointer dark:text-neutral-300">
          <Link href="./">
            Sagun <span className="font-bold text-[#ec1552] text-3xl">.</span>
          </Link>
        </h1>
        <p className="flex items-center gap-2 text-gray-400">
          <IoIosMail className="text-3xl" />
          msagunsoren@gmail.com
        </p>
        <div className="h-[1px] bg-gray-400 w-full mt-10"></div>
        <div className="flex justify-between w-full text-gray-400 mt-2">
          <p>© made by sagun.</p>
          <div className="flex md:gap-6 gap-0">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
        <div>--</div>
      </div>
    </div>
  );
};
export default Footer;
