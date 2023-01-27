import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";

const InvoiceTable = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(false);

  const onInvoice = useCallback(
    () => history.push("/tables/invoice-view"),
    [history]
  );

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
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Table Invoice </h4>
            <div className="table-responsive">
              <label>
                <input
                  type="search"
                  class="form-control mt-2 mb-3"
                  placeholder="Search"
                  aria-controls="order-listing"
                ></input>
              </label>
              <button
                type="button"
                className="btn float-right btn-social-icon-text btn-twitter"
              >
                <i className="mdi mdi-file-check btn-icon-prepend"></i>Buat
                Invoice
              </button>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> No </th>
                    <th> Nama Client </th>
                    <th> Status </th>
                    <th> Pembayaran </th>
                    <th> Tanggal Pembayaran </th>
                    <th> Invoice </th>
                    <th colspan="2">
                      <b>Actions</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> Aziz Surachman </td>
                    <td>
                      <label class="badge badge-warning">Pending</label>
                    </td>
                    <td> Rp.94.850.000 </td>
                    <td> May 15, 2021 </td>
                    <td>
                      <button
                        one
                        onClick={onInvoice}
                        class="btn btn-outline-secondary"
                      >
                        View
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-icon"
                      >
                        <i
                          style={{ marginLeft: "10%" }}
                          class="mdi mdi-pencil"
                        ></i>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-icon"
                        onClick={() => {
                          Swal.fire({
                            title: "Apakah sudah benar ?",
                            text: "Aziz Surachman",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Aziz Surachman",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        <i
                          class="mdi mdi-close-box"
                          style={{ marginLeft: "10%" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> 2 </td>
                    <td> Abiyasa Fadli Akbar </td>
                    <td>
                      <label class="badge badge-success">Success</label>
                    </td>
                    <td> Rp.89.450.000 </td>
                    <td> Feb 24, 2022 </td>
                    <td>
                      <button
                        onClick={onInvoice}
                        class="btn btn-outline-secondary"
                      >
                        View
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-icon"
                      >
                        <i
                          style={{ marginLeft: "10%" }}
                          class="mdi mdi-pencil"
                        ></i>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-icon"
                        onClick={() => {
                          Swal.fire({
                            title: "Apakah sudah benar ?",
                            text: "Abiyasa Fadli Akbar",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Abiyasa Fadli Akbar",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        <i
                          class="mdi mdi-close-box"
                          style={{ marginLeft: "10%" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> 3 </td>
                    <td> Bejo Paijo </td>
                    <td>
                      <label class="badge badge-success">Success</label>
                    </td>
                    <td> Rp.12.050.000 </td>
                    <td> Juli 21, 2022 </td>
                    <td>
                      <button
                        onClick={onInvoice}
                        class="btn btn-outline-secondary"
                      >
                        View
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-icon"
                      >
                        <i
                          style={{ marginLeft: "10%" }}
                          class="mdi mdi-pencil"
                        ></i>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-icon"
                        onClick={() => {
                          Swal.fire({
                            title: "Apakah sudah benar ?",
                            text: "Bejo Paijo",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Bejo Paijo",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        <i
                          class="mdi mdi-close-box"
                          style={{ marginLeft: "10%" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> 4 </td>
                    <td> Ahmad Nur Alhak </td>
                    <td>
                      <label class="badge badge-warning">Panding</label>
                    </td>
                    <td> Rp.24.350.000 </td>
                    <td> Maret 12, 2022 </td>
                    <td>
                      <button class="btn btn-outline-secondary">View</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-icon"
                      >
                        <i
                          style={{ marginLeft: "10%" }}
                          class="mdi mdi-pencil"
                        ></i>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-icon"
                        onClick={() => {
                          Swal.fire({
                            title: "Apakah sudah benar ?",
                            text: "Ahmad Nur Alhak",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Ahmad Nur Alhak",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        <i
                          class="mdi mdi-close-box"
                          style={{ marginLeft: "10%" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> 5 </td>
                    <td> Rafi Dzulfikar </td>
                    <td>
                      <label class="badge badge-warning">Panding</label>
                    </td>
                    <td> Rp.11.260.000 </td>
                    <td> Des 08, 2022 </td>
                    <td>
                      <button class="btn btn-outline-secondary">View</button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-primary btn-rounded btn-icon"
                      >
                        <i
                          style={{ marginLeft: "10%" }}
                          class="mdi mdi-pencil"
                        ></i>
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger btn-rounded btn-icon"
                        onClick={() => {
                          Swal.fire({
                            title: "Apakah sudah benar ?",
                            text: "Rafi Dzulfikar",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Rafi Dzulfikar",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        <i
                          class="mdi mdi-close-box"
                          style={{ marginLeft: "10%" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav className="btn float-right mt-2">
                <ul className="pagination rounded">
                  <li className="page-item">
                    <a className="page-link" style={{ borderColor: "#2c2e33" }}>
                      <i className="mdi mdi-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" style={{ borderColor: "#2c2e33" }}>
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a style={{ borderColor: "#2c2e33" }} className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a style={{ borderColor: "#2c2e33" }} className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a style={{ borderColor: "#2c2e33" }} className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a style={{ borderColor: "#2c2e33" }} className="page-link">
                      <i className="mdi mdi-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 grid-margin">
        <Modal
          size="lg"
          show={true}
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
                        <b>DATE</b>&ensp;&ensp;&ensp;&ensp; : &ensp; 23rd Jan
                        2016 <br />
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
                      href="#"
                      className="btn btn-primary float-right mt-4 ms-2"
                    >
                      <i className="mdi mdi-printer me-1"></i>Print
                    </a>
                    <a
                      href="#"
                      className="btn btn-success float-right mt-4 mr-2"
                    >
                      <i className="mdi mdi-telegram me-1"></i>Send Invoice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default InvoiceTable;
