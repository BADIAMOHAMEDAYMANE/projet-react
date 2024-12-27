import { Outlet } from 'react-router';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import style from './Layout.module.css'

const Layout = () => {
    return (
      <div>
        <Header />
        <main className={style["main-content"]}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default Layout;  