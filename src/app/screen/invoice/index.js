import React, { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

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
              <input type="search" class="form-control mb-2" placeholder="Search" aria-controls="order-listing"></input>
            </label>
            <button type="button" class="btn float-right mt-10 mb 4 btn-primary btn-icon-text">
             <i
               style={{marginTop : "15px" }} 
               class="mdi mdi-file-check btn-icon-prepend mb2">
              </i> Buat Invoice </button>
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
                    <td> May 15, 2015 </td>
                    <td>
                      <button
                        one onClick={onInvoice}
                        class="btn btn-outline-secondary">
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
                    <td> May 15, 2015 </td>
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
                    <td> May 15, 2015 </td>
                    <td>
                      <button
                        onClick={onInvoice} 
                        class="btn btn-outline-secondary">
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
                    <td> May 15, 2015 </td>
                    <td>
                      <button  class="btn btn-outline-secondary">
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
                    <td> May 15, 2015 </td>
                    <td>
                      <button  class="btn btn-outline-secondary">
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
    </div>
  );
};

export default InvoiceTable;
