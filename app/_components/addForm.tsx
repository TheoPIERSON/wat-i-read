import React from "react";

export const AddForm = () => {
  return (
    <section className="mt-8">
      <form className="flex justify-around align-middle ">
        <div className="grid place-items-center w-full">
          <label htmlFor="cover">Cover</label>
          <input className="border-2 border-amber-400 h-xl w-96" type="text" name="Titre" />
        </div>
        <div className="grid gap-16 justify-start w-full h-4/5 ">
          <div className="grid ml-9">
            <label htmlFor="title">Title</label>
            <input
              className="border-b-2 border-amber-400 w-xl placeholder:text-slate-300"
              placeholder="Title"
              type="text"
              name="Titre"
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="author">Author</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="Author"
              type="text"
              name="Titre"
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="Titre">ISBN</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="000000000000"
              type="text"
              name="Titre"
            />
          </div>
          <div className="grid ml-9">
            <label htmlFor="Titre">Nombre de pages</label>
            <input
              className="border-b-2 border-amber-400 placeholder:text-slate-300"
              placeholder="400"
              type="text"
              name="Titre"
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
