import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { getInvoice } from "./InvoiceApi";
import { Modal } from "../../component";

const InvoiceTable = () => {
  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    getInvoiceAll();
  }, []);

  const getInvoiceAll = async () => {
    setInvoice(await getInvoice());
    console.log("tampill data dari BE");
    console.log(await getInvoice());
  };

  const onInvoice = useCallback(
    () => history.push("/tables/invoice-view"),
    [history]
  );

  const onModal = () => {
    console.log("jaln invoice");
    setShowModal(!showModal);
  };

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
                  {invoice.map((item, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td> {index + 1} </td>
                          <td> {item.id_sys_client} </td>
                          <td>
                            <label
                              className={
                                item.status == "Success"
                                  ? "badge badge-success"
                                  : "badge badge-warning"
                              }
                            >
                              {item.status}
                            </label>
                          </td>
                          <td> Rp.94.850.000 </td>
                          <td>{item.created_at}</td>
                          <td>
                            <button
                              one
                              onClick={onModal}
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
                      </>
                    );
                  })}
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
      {<Modal showModal={showModal} onModal={onModal} />}
    </div>
  );
};

export default InvoiceTable;
