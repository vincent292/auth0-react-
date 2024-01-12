import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">formulario</Link>
          </li>
          
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;