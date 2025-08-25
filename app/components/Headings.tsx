type data = {
  subheading: string;
  heading: string;
  desc: string;
};

const Headings = ({ subheading, heading, desc }: data) => {
  return (
    <div>
      <div className="mt-40 max-sm:px-10 sm:px-10 md:px-20 lg:px-50 xl:px-100 flex flex-col mb-10 items-center justify-center text-center gap-5 dark:text-neutral-300">
        <p>{subheading}</p>
        <h1 className="text-3xl tracking-wider">{heading}</h1>
        <p className="text-base/8">{desc}</p>
      </div>
    </div>
  );
};
export default Headings;
