

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">Cart<img className="cu-p" src="/img/btn-remove.svg" alt="" /></h2>

         <div className="items">
           <div className="cartItem d-flex align-center mb-20" >
            
            <div style={{backgroundImage:'url(/img/sneakers/1.jpg'}} className="cartItemImg">

            </div>
            <div className="mr-20 ">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>12 999 $</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cartItem d-flex align-center mb-20" >
            
            <div style={{backgroundImage:'url(/img/sneakers/1.jpg'}} className="cartItemImg">

            </div>
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
            <li >
              <span>Tax 5%</span>
              <div></div>
              <b>1074 $</b>
            </li>
          </ul>
          <button className="greenButton">Checkout <img src="/img/arrow.svg" alt="no img" /> </button>
         </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
       <div className="d-flex align-center">
        <img src="/img/logo.png" width={40} height={40} alt="no img"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Shop the best sneakers</p>
          </div>
       </div>
      <ul className="d-flex"> 
        <li className="mr-30">
        <img src="/img/cart.svg" width={18} height={18} alt="no img"/>
          <span>1205 $</span>
        </li>
        <li>
        <img src="/img/user.svg" width={18} height={18} alt="no img"/>
        </li>
      </ul>
      </header>
      <div className="content p-45">
        <div className="d-flex align-center justify-between mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="" />
          <input placeholder="Search..." />
        </div>
        </div>
        
        <div className="sneakers d-flex">
          
        <div className="card">
          <div className="favorite">
          <img src="/img/heard-unliked.svg" alt="no img" />
          </div>
          <img src="/img/sneakers/1.jpg" alt="no img" width={133} height={112}/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>12 999 $</b>
            </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11}/>
          </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/2.jpg" alt="no img" width={133} height={112}/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>12 999 $</b>
            </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11}/>
          </button>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/3.jpg" alt="no img" width={133} height={112}/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>12 999 $</b>
            </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11}/>
          </button>
          </div>
        </div>


        <div className="card">
          <img src="/img/sneakers/5.jpg" alt="no img" width={133} height={112}/>
          <h5>Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Price:</span>
              <b>12 999 $</b>
            </div>
          <button className="button">
            <img src="/img/plus.svg" alt="no img" width={11} height={11}/>
          </button>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}


export default App;