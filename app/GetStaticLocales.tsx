import { use } from "react";
import SmallCard from "./SmallCard";

type LocaleTypes = {
  img: string;
  distance: string;
  location: string;
};

async function getStaticProps() {
  return await (await fetch("https://www.jsonkeeper.com/b/4G1G")).json();
}

export default function StaticProp() {
  const allLocales = use(getStaticProps());
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allLocales?.map(({ img, distance, location }: LocaleTypes) => (
        <SmallCard
          key={img}
          img={img}
          distance={distance}
          location={location}
        />
      ))}
    </div>
  );
}
