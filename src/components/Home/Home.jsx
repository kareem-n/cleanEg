
import Sidebar from './../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './../navbar/Navbar';
function Home() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet />

    </div>
  )
}

export default Home