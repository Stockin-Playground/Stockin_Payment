import React from "react";
import { Modal } from "react-bootstrap";

const modalInvoice = ({ showModal, onModal }) => {
  return (
    <div className="col-12 grid-margin">
      <Modal
        size="lg"
        show={showModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <div className="col-lg-12">
            <div className="card px-2">
              <div className="card-body">
                <div className="container-fluid d-flex justify-content-between">
                  <div className="col-lg-6 ps-0">
                    <img
                      style={{ marginTop: "7%" }}
                      width={"40%"}
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
                </div>
                <hr style={{ borderColor: "#2c2e33" }} />
                <div className="container-fluid d-flex justify-content-between">
                  <div className="col-lg-4 ps-0">
                    <p className="mt-4 mb-2">
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
                    <p className="mb-0 mt-4">
                      <b>DATE</b>&ensp;&ensp;&ensp;&ensp; : &ensp; 23rd Jan 2016{" "}
                      <br />
                      <b>INVOICE</b> &ensp;: &ensp; #028
                      <br />
                      <b>SALES</b>&ensp;&ensp;&ensp;: &ensp; Desi
                    </p>
                  </div>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                  <div className="col-lg-4 ps-0">
                    <p className="mt-3 mb-2 text-end">
                      <b>Invoice to</b>
                    </p>
                    <p className="text-end">
                      <b>H.ANANG MOTOR</b> <br />
                      Jl. Cempaka Pas Perempatan Jalan Nyai Rendem
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
                          <th className="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-end ">
                          <td className="text-start">1</td>
                          <td className="text-start">Stokcin Bengkel</td>
                          <td>2</td>
                          <td>150.000</td>
                        </tr>
                        <tr className="text-end">
                          <td
                            className="text-white text-right pr-5"
                            colSpan={3}
                          >
                            SUBTOTAL
                          </td>
                          <td className="text-white">150.000</td>
                        </tr>
                        <tr className="text-end">
                          <td
                            className="text-white text-right pr-5"
                            colSpan={3}
                          >
                            DISC
                          </td>
                          <td className="text-white">0</td>
                        </tr>
                        <tr className="text-end">
                          <td
                            className="text-white text-right pr-5"
                            colSpan={3}
                          >
                            TOTAL (Rp)
                          </td>
                          <td className="text-white">150.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="container-fluid mt-5 w-100">
                  <h4 className="text-end ">Notes and Insturction</h4>
                  <p className="text-end mb-2">
                    1. Pelase include the invoice number on your check
                  </p>
                  <p className="text-end mb-2">
                    2. Pelase make all the payment to
                  </p>
                  <h5 className="text-end ">
                    Bank Central Asia KCU Matraman, Jakarta
                  </h5>
                  <p className="text-end mb-2">PT MODEL DIGITAL INDONESIA</p>
                  <p className="text-end">IDR a/c. 342.356.6511</p>
                </div>
                <hr style={{ borderColor: "#2c2e33" }} />
                <div className="container-fluid w-100">
                  <a
                    onClick={onModal}
                    className="btn btn-danger float-right mt-4 ms-2"
                  >
                    <i className="mdi mdi-close me-1"></i>Tutup
                  </a>
                  <a href="#" className="btn btn-primary float-right mt-4 mr-2">
                    <i className="mdi mdi-printer me-1"></i>Print
                  </a>
                  <a href="#" className="btn btn-success float-right mt-4 mr-2">
                    <i className="mdi mdi-telegram me-1"></i>Kirim Invoice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default modalInvoice;
