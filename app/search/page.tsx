import { useRouter } from "next/dist/client/router";
import Footer from "../Footer";
import Header from "../Header";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  return (
    <div>
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">300+ Stays for 5 number of guests</p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in Mars</h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
