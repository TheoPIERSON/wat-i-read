import { Hero } from "./_components/hero";
import { HomeContent } from "./_components/homeContent";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeContent />
    </main>
  );
}
