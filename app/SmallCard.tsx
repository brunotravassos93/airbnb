import Image from "next/image";

type LocaleTypes = {
  img: string;
  location: string;
  distance: string;
};

function SmallCard({ img, location, distance }: LocaleTypes) {
  return (
    <div className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      <div className="relative h-16 w-16">
        <Image src={img} alt="image" fill className="cover rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
