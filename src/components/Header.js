import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40} alt="no img" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5">Shop the best sneakers</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" width={18} height={18} alt="no img" />
          <span>1205 $</span>
        </li>
          <li className="mr-20 cu-p">
             <Link to='/favorites'>
                 <img src="/img/heart.svg" width={18} height={18} alt="no img" />
             </Link>

          </li>
        <li>
          <img src="/img/user.svg" width={18} height={18} alt="no img" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
