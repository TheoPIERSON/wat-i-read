import { Navbar } from "../../components/navbar";
import { AddForm } from "../../components/addForm";

// app/add-book/page.tsx
const AddBook = () => {
  return (
    <div>
      <Navbar />
      <h1 className="w-90 text-9xl font-black tracking-wider ml-5">
        Add a New Book to <br /> the library !
      </h1>
      <AddForm />
    </div>
  );
};

export default AddBook;
