import React from "react";
import Banner from "./Banner";
import GetStaticLocales from "./GetStaticLocales";
import GetCards from "./GetCards";
import LargeCard from "./LargeCard";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">
            Explore as proximidades
          </h2>

          <GetStaticLocales />
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Viva onde quiser</h2>
          <GetCards />
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoor"
          description="Lista de desejos indicada pelo Airbnb."
          buttonText="Inspire-se"
        />
      </main>

      <Footer />
    </div>
  );
}
