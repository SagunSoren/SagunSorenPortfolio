import { IoIosArrowRoundForward } from "react-icons/io";
import Headings from "./Headings";
import Card3 from "./Card3";

const Portfolio = () => {
  return (
    <div id="work">
      <Headings
        subheading="What i offer"
        heading="My Projects"
        desc="These are some of the projects that I've made"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          <Card3
            img="realestate.png"
            title="Real Estate Project"
            desc="Resposive"
            link="https://real-estate-imj6.vercel.app/"
            used={["Reactjs", "Tailwind", "Javascript"]}
          />
          <Card3
            img="website2.png"
            title="Skincare Product Website"
            desc=""
            link="https://beauty-product-hwxc.vercel.app/"
            used={["Nextjs", "Tailwind", "Typescript"]}
          />
          <Card3
            img="website3.png"
            title="Furniture Website"
            desc=""
            link="https://furniture-website-dusky-eight.vercel.app/"
            used={["Nextjs", "Tailwind", "Javascript", "ShadcnUI"]}
          />
          <Card3
            img="website4.png"
            title="Ecommerce Website"
            desc=""
            link="https://e-commerce-website-fvmg.vercel.app/"
            used={["Nextjs", "Tailwind", "Typescript"]}
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="flex items-center px-5 py-2 border-1 rounded-full border-gray-400 text-gray-400">
          Show more
          <IoIosArrowRoundForward className="text-xl" />
        </button>
      </div>
    </div>
  );
};
export default Portfolio;
