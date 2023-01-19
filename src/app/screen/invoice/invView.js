import React, { useState } from "react";
import Swal from "sweetalert2";

const invView = () => {
  const Swal = require("sweetalert2");
  //   const [alert, setAlert] = useState(false);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Invoice </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Tables
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Invoice
            </li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="card px-2">
          <div className="card-body">
            <div className="container-fluid d-flex justify-content-between">
              <div className="col-lg-6 ps-0">
                <img
                  style={{ marginTop: "9%" }}
                  width={"50%"}
                  src={require("../../../assets/images/stockin_landscape.png")}
                />
              </div>
              <div className="col-lg-6 pe-0">
                <h3
                  className="my-5"
                  style={{ textAlign: "end", marginRight: "8%" }}
                >
                  Invoice #INV-203
                </h3>
              </div>
              <hr style={{ borderColor: "white" }} />
            </div>
            <div className="container-fluid d-flex justify-content-between">
              <div className="col-lg-4 ps-0">
                <p className="mt-5 mb-2">
                  <b>PT. MODEL DIGITAL INDONESIA</b>
                </p>
                <p>
                  Jalan Salemba Tengah No. 54 <br />
                  Jakarta, 10440 <br />
                  Phone. 021 - 319 277 53 <br />
                  Email. cs@stockin.co.id <br />
                  www.stockin.co.id
                </p>
              </div>
              <div className="col-lg-3 pe-0">
                <p className="mb-0 mt-5">
                  Invoice Date : 23rd Jan 2016 <br />
                  INVOICE &nbsp;&nbsp;&nbsp;: 25th Jan 2017
                </p>
                <p>Due Date : 25th Jan 2017</p>
              </div>
            </div>
            <div className="container-fluid d-flex justify-content-between">
              <div className="col-lg-3 ps-0">
                <p className="mt-5 mb-2 text-end">
                  <b>Invoice to</b>
                </p>
                <p className="text-end">
                  <b>Gaala Sons</b> <br />
                  C-201, Beykoz-34800, Canada, K1A 0G9.
                </p>
              </div>
            </div>
            <div className="container-fluid mt-5 d-flex justify-content-center w-100">
              <div className="table-responsive w-100">
                <table className="table">
                  <thead>
                    <tr className="bg-dark text-white">
                      <th>#</th>
                      <th>Description</th>
                      <th className="text-end">Quantity</th>
                      <th className="text-end">Unit cost</th>
                      <th className="text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-end">
                      <td className="text-start">1</td>
                      <td className="text-start">Brochure Design</td>
                      <td>2</td>
                      <td>$20</td>
                      <td>$40</td>
                    </tr>
                    <tr className="text-end">
                      <td className="text-start">2</td>
                      <td className="text-start">
                        Web Design Packages(Template) - Basic
                      </td>
                      <td>05</td>
                      <td>$25</td>
                      <td>$125</td>
                    </tr>
                    <tr className="text-end">
                      <td className="text-start">3</td>
                      <td className="text-start">Print Ad - Basic - Color</td>
                      <td>08</td>
                      <td>$500</td>
                      <td>$4000</td>
                    </tr>
                    <tr className="text-end">
                      <td className="text-start">4</td>
                      <td className="text-start">Down Coat</td>
                      <td>1</td>
                      <td>$5</td>
                      <td>$5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="container-fluid mt-5 w-100">
              <p className="text-end mb-2">Sub - Total amount: $12,348</p>
              <p className="text-end">vat (10%) : $138</p>
              <h4 className="text-end mb-5">Total : $13,986</h4>
            </div>
            <div className="container-fluid w-100">
              <a href="#" className="btn btn-primary float-right mt-4 ms-2">
                <i className="mdi mdi-printer me-1"></i>Print
              </a>
              <a href="#" className="btn btn-success float-right mt-4">
                <i className="mdi mdi-telegram me-1"></i>Send Invoice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default invView;
