import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="antialiased">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
