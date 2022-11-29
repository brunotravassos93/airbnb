import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        className="object-cover"
        alt="Banner Image"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Ainda não sabe aonde quer ir? Perfeito!
        </p>

        <button
          className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 
        shadow-md transition duration-150 hover:shadow-xl active:scale-90"
        >
          Eu posso ajudar!
        </button>
      </div>
    </div>
  );
}

export default Banner;
