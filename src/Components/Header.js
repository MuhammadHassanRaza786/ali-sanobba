import styled from './css/header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav  className={styled.navbar}>
              <Link to="/">  <img className={styled.logo} src="https://raw.githubusercontent.com/jeff-lent/Alisnobba/main/Capstone/Logo.png"></img></Link>
                <Link to="/cart"><h3 className={styled.icon}><AiOutlineShoppingCart></AiOutlineShoppingCart></h3></Link>
            </nav>
            <Outlet/>
        </div>
    );
}
export default Header;