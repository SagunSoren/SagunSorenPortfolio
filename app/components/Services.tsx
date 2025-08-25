import Card from "./Card";
import Card1 from "./Card1";
import { CiGlobe } from "react-icons/ci";
import Headings from "./Headings";

const Services = () => {
  return (
    //px-40
    <div className="px-2 sm:px-6 md:px-10 dark:text-neutral-300" id="services">
      <Headings subheading="What i offer" heading="My Services" desc="" />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Card1
            heading="Webdesign"
            icon={CiGlobe}
            desc="Building web apps lightweight and responsive"
          />
          <Card1
            heading="Mobile app"
            icon={CiGlobe}
            desc="Building mobile first apps using tailwindCSS"
          />
          <Card1
            heading="UI/UX design"
            icon={CiGlobe}
            desc=""
          />
          <Card1
            heading="Graphics Design"
            icon={CiGlobe}
            desc="Web development is the process of building, programming..."
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
