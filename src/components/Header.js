import React from "react";

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
              <img 
                onClick={props.onHeardClick}
                src={props.isFavoriteMode ? "/img/heard-liked.svg" : "/img/heart.svg"}
                width={18}
                height={18}
                alt="no img"
              />
          </li>
        <li>
          <img src="/img/user.svg" width={18} height={18} alt="no img" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
