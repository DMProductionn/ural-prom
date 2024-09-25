import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="max-w-[1200px] w-full px-[15px] mx-auto flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
