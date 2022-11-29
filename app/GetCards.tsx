import { use } from "react";
import MediumCard from "./MediumCard";

async function getStaticDataProps() {
  return await (await fetch("https://www.jsonkeeper.com/b/VHHT")).json();
}

export default function StaticDataProp() {
  const cardsData = use(getStaticDataProps());
  return (
    <div className="-ml-3 flex space-x-3 overflow-y-hidden overflow-x-scroll p-3">
      {cardsData?.map(({ img, title }) => (
        <MediumCard key={img} img={img} title={title} />
      ))}
    </div>
  );
}
