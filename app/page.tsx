import React from "react";
import { Hero } from "./_components/hero";
import { HomeContent } from "./_components/homeContent";
import { Navbar } from "./_components/navbar";
import { BookList } from "./_components/bookList";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero text="WAT I READ" />
      <HomeContent />
      <Hero text="WAT I HAVE READ" />
      <BookList />
    </main>
  );
};

export default Home;
