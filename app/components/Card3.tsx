interface CardProp {
  link: string;
  used: string[];
  title: string;
  desc: string;
  img: string;
}

const Card3 = (props: CardProp) => {
  const array = props.used;
  return (
    <a href={props.link} target="_blank">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <Image
          className="w-full"
          src={projectimage}
          width={100}
          height={100}
          alt="Sunset in the mountains"
        /> */}
        <img src={props.img} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">this is a project</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.used.map((item, index) => (
            <div
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{item}
            </div>
          ))}

          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span> */}
        </div>
      </div>
    </a>
  );
};
export default Card3;
