import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-32">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;