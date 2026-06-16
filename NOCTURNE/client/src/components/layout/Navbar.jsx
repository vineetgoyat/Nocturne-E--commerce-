import { Link } from "react-router-dom";
import useVaultStore from "../../store/useVaultStore";

const Navbar = () => {  
    const { vaultItems } = useVaultStore();


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

        {/* Logo */}

        <Link to="/">
          <div>
            <h1 className="text-3xl tracking-widest text-white">
              NOCTURNE
            </h1>

            <p className="text-[10px] text-zinc-500 uppercase tracking-[4px]">
              Luxury Exists In The Dark
            </p>
          </div>
        </Link>

        {/* Navigation */}

        <ul className="flex gap-10 text-zinc-300">

          <li>
            <Link
              to="/"
              className="hover:text-[#C9A227] transition-all"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="#artifacts"
              className="hover:text-[#C9A227] transition-all"
            >
              Artifacts
            </a>
          </li>

          <li>
            <a
              href="#collections"
              className="hover:text-[#C9A227] transition-all"
            >
              Collections
            </a>
          </li>

          <li>
            <Link
              to="/vault"
              className="hover:text-[#C9A227] transition-all"
            >
              Vault ({vault.length})
            </Link>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Navbar;