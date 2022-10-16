import Footer from "./Sections/Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col antialiased min-h-screen ">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
