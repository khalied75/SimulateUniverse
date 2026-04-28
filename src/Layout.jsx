import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import AstroBot from './component/AstroBot';
 
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <AstroBot />
    </>
  );
}
 
export default Layout;
 
