import Filter from "./components/Filter";
import FlightResult from "./components/FlightResult";
export default function Home() {
  return (
    <main className="bg-[#e1eceb] px-4 py-4 ">
      <Filter />
      <FlightResult />
    </main>
  );
}
