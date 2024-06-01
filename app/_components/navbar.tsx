import Link from "next/link";

export const Navbar = () => {
  return (
    <ul className="flex justify-center w-100">
      <li className="mx-10 my-2">
        <Link href="/">
          <button className="hover:underline decoration-2 decoration-amber-300">search</button>
        </Link>
      </li>
      <li className="mx-10 my-2">
        <Link href="/add-book">
          <button className="hover:underline decoration-2 decoration-amber-300">add</button>
        </Link>
      </li>
      <li className="mx-10 my-2">
        <button className="hover:underline decoration-2 decoration-amber-300">contact</button>
      </li>
      <li className="mx-10 my-2">
        <button className="hover:underline decoration-2 decoration-amber-300">coffee</button>
      </li>
    </ul>
  );
};
