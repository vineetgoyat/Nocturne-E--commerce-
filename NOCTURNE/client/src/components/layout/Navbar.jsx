const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          NOCTURNE
        </h1>

        <ul className="flex gap-8">
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