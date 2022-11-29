import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="durantion-300 transform cursor-pointer transition ease-out hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} alt="images" fill className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
}

export default MediumCard;
