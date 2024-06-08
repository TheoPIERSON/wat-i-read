import React from "react";
import { Hero } from "../components/hero";
import { HomeContent } from "../components/homeContent";
import { Navbar } from "../components/navbar";
import { BookList } from "../components/bookList";

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
