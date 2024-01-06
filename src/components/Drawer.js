import React from "react";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img className="cu-p" src="/img/btn-remove.svg" alt="" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 ">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>12 999 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 ">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>12 999 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total</span>
              <div></div>
              <b>21 498 $</b>
            </li>
            <li>
              <span>Tax 5%</span>
              <div></div>
              <b>1074 $</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout <img src="/img/arrow.svg" alt="no img" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
