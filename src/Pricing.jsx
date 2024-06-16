import { useState, useContext } from "react";
import { UserContext } from "./App";

function Pricing() {
  let { itemCount, pricecount } = useContext(UserContext);
  let gst = 0.1;

  return (
    <>
      {itemCount ? (
        <div className="col-lg-9 bg-grey">
          <div className="p-1">
            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-4">
              <h5 className="text-uppercase">ITEMS - {itemCount}</h5>
              <h5>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                &nbsp;
                {pricecount}
              </h5>
            </div>

            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase">GST</h5>
              <h5>10 %</h5>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase">Total price</h5>
              <h5>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                &nbsp;
                {pricecount + pricecount * gst}
              </h5>
            </div>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-dark btn-block btn-lg"
              data-mdb-ripple-color="dark"
            >
              Proceed
            </button>
          </div>
        </div>
      ) : (
        <div className="col-lg-9 bg-grey">
          <div className="p-1">
            <h3 className="fw-bold mb-5 mt-2 pt-1 text-muted">Summary</h3>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-4">
              <h5 className="text-uppercase text-muted">
                items - No item selected
              </h5>
              <h5>&nbsp; No item selected</h5>
            </div>

            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase text-muted">GST</h5>
              <h5>No item selected</h5>
            </div>
            <hr className="my-4" />
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-uppercase text-muted ">Total price</h5>
              <h5>&nbsp; No item selected</h5>
            </div>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-dark btn-block btn-lg "
              data-mdb-ripple-color="dark"
            >
              Add Items
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Pricing;
