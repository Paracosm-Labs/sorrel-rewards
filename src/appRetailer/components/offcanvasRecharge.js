//OffcanvasRecharge
import React from 'react';

const OffcanvasRecharge = () => {

  const handleRecharge = async () => {
      alert("Thank you for choosing Sorrel!")
  };



  return (
    <div className="offcanvas navpane offcanvas-end" tabIndex="-1" id="offcanvasRecharge" aria-labelledby="offcanvasRechargeLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRechargeLabel">Recharge your Sorrel Account</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">

        <section>
          <div className="row">
            <div className="col mt-2">
            
              <button className="btn btn lg btn-outline-primary w-100" type="button" onClick={() => handleRecharge()} data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-lg fa-puzzle-piece mt-4"></i><p className="mt-2">Buy Points</p>
              </button>

            </div>

          </div>
        </section>


      </div>
    </div>
  );
};

export default OffcanvasRecharge;
