import React from "react";

function Drawer({onClickCart, items = [], onDeleteInCart}) {



    return (
        <div className="overlay">

            <div style={{ width: '100vw', height: '100vh', position:'fixed', top:'0', left: '0'}} onClick={onClickCart}></div>

            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img onClick={onClickCart} className="cu-p" src="/img/btn-remove.svg" alt=""/>
                </h2>
                {items.length === 0 ? (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" height= '120px' src='/empty-cart.jpg' alt="Empty" />
                    <h2>Корзина пуста</h2>
                    <p className="opacity-6">Добавьте хотябы пару крос</p>
                    <button onClick={onClickCart} className="greenButton">
                        <img src='/img/arrow.svg' alt="Arrow" />
                        Вернуться назад
                    </button>
                </div>
                ) : (
                    <div className="items">
                {
                    items.map(obj => (
                    <div key = {obj.id} className="cartItem d-flex align-center mb-20">
                    <div
                    style={{backgroundImage: `url(${obj.imageUrl})`}}
                    className="cartItemImg"
                    ></div>
                    <div className="mr-20 ">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price + ' $'}</b>
                    </div>
                    <img onClick={onDeleteInCart(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt=""/>
                    </div>

                    ))}

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Total</span>
                                <br />
                                <b>21 498 $</b>
                            </li>
                            <li>
                                <span>Tax 5%</span>
                                <br />
                                <b>1074 $</b>
                            </li>
                        </ul>
                        <button className="greenButton">
                            Checkout
                            {' '}
                            <img src="/img/arrow.svg" alt="no img"/>
                            {' '}
                        </button>
                    </div>
                    </div>
                    )}
            </div>
        </div>
    );
}

export default Drawer;
