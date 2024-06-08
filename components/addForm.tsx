"use client";
import React, { useState } from "react";

export const AddForm = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const book = { cover, title, author, isbn, pages: parseInt(pages, 10) };

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error("Failed to add the book");
      }

      const result = await response.json();
      console.log("Book added:", result);

      // Clear form fields
      setCover("");
      setTitle("");
      setAuthor("");
      setIsbn("");
      setPages("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <section className="mt-8">
      <form className="flex justify-around align-middle" onSubmit={handleSubmit}>
        <div className="grid place-items-center w-full">
          <label htmlFor="cover">Cover</label>
          <input
            className="border-2 border-amber-400 h-xl w-96"
            type="text"
            name="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div className="grid gap-16 justify-start w-full h-4/5">
          <div className="grid ml-9">
            <label htmlFor="title">Title</label>
            <input
              className="border-b-2 border-amber-400 w-xl placeholder:text-slate-300"
              placeholder="Title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="author">Author</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="Author"
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="isbn">ISBN</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="000000000000"
              type="text"
              name="isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="pages">Nombre de pages</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="400"
              type="text"
              name="pages"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
          <div className="flex justify-end m-7 h-10">
            <button className="p-2 bg-amber-500 hover:bg-white border-2 border-transparent hover:border-amber-400">
              Add the book
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
