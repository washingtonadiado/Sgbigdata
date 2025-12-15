import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader";
import { usePageLoader } from "@/hooks/usePageLoader";

const Layout = ({ initialLoad }: { initialLoad: boolean }) => {
  const loading = usePageLoader(initialLoad);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
          <Loader />
        </div>
      )}
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
