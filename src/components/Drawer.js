import React from "react";

function Drawer({onClickCart, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img onClick={onClickCart} className="cu-p" src="/img/btn-remove.svg" alt=""/>
                </h2>
                <div className="items">
                    {
                        items.map(obj => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{backgroundImage: `url(${obj.imageUrl})`}}
                                    className="cartItemImg"
                                ></div>
                                <div className="mr-20 ">
                                    <p className="mb-5">{obj.title}</p>
                                    <b>{obj.price + ' $'}</b>
                                </div>
                                <img className="removeBtn" src="/img/btn-remove.svg" alt=""/>
                            </div>

                        ))}

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
                            Checkout <img src="/img/arrow.svg" alt="no img"/>{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
