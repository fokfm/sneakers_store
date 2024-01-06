import React from "react";

function Card() {
  return (
    <>
      <div className="card">
        <div className="favorite">
          <img src="/img/heard-unliked.svg" alt="no img" />
        </div>
        <img src="/img/sneakers/1.jpg" alt="no img" width={133} height={112} />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>12 999 $</b>
          </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11} />
          </button>
        </div>
      </div>

      <div className="card">
        <img src="/img/sneakers/2.jpg" alt="no img" width={133} height={112} />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>12 999 $</b>
          </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11} />
          </button>
        </div>
      </div>

      <div className="card">
        <img src="/img/sneakers/3.jpg" alt="no img" width={133} height={112} />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>12 999 $</b>
          </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11} />
          </button>
        </div>
      </div>

      <div className="card">
        <img src="/img/sneakers/5.jpg" alt="no img" width={133} height={112} />
        <h5>Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Price:</span>
            <b>12 999 $</b>
          </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
