import { NavLink, Outlet } from "react-router-dom";
import Style from './Layout.module.css';
import { Suspense } from "react";
import Loader from '../../components/Loader';

export const Layout = () => { 
    return <nav className={Style.navigation}>
        <ul className={Style.list}>
      <li>
        <NavLink className={Style.link} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={Style.link} to="/movies">Movies</NavLink>
      </li>
      </ul>
      <Suspense fallback={<Loader/>}>
          <Outlet/>
       </Suspense> 
    </nav>
}
