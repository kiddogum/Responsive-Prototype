type CardsProps = {
  image: string;
  food: string;
  variety: number;
};

const Cards = ({ image, food, variety }: CardsProps) => {
  return (
    <div className="w-[22%] p-2 border-2 border-secondary rounded-ss-3xl rounded-ee-3xl md:w-[40%] md:mx-auto sm:min-w-full">
      <div className="w-full aspect-square border-2 border-secondary rounded-ss-2xl rounded-ee-2xl">
        <img src={image} className="object-cover h-full w-full" />
      </div>
      <div className="flex justify-between items-center mt-4 mx-2">
        <h2 className=" text-subtitle">{food}</h2>
        <p className="text-desc  ">Variety: {variety}</p>
      </div>

      <button className="button-outline w-full mt-4">
        {" "}
        <a href="#" className="relative z-10">
          Order Now
        </a>
      </button>
    </div>
  );
};

export default Cards;
