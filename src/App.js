

function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">All sneakers</h1>
        <div className="sneakers d-flex">
          
        <div className="card">
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