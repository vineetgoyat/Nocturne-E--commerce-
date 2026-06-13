import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/20
      border-b
      border-zinc-800
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >
          NOCTURNE
        </Link>

        <ul className="flex gap-10">
          <li>Home</li>
          <li>Artifacts</li>
          <li>Collections</li>
          <li>Vault</li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;