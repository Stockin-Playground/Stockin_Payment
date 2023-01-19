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
                    <td> Sevilla Prameswarijanuari </td>
                    <td>
                      <label class="badge badge-warning">Pending</label>
                    </td>
                    <td> Rp.4.450.000 </td>
                    <td> May 15, 2015 </td>
                    <td>
                      <button disabled class="btn btn-outline-secondary">
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
                            text: "Sevilla Prameswarijanuari",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Sevilla Prameswarijanuari",
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
                    <td> Sevilla Prameswarijanuari </td>
                    <td>
                      <label class="badge badge-success">Success</label>
                    </td>
                    <td> Rp.4.450.000 </td>
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
                            text: "Sevilla Prameswarijanuari",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Sevilla Prameswarijanuari",
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
                    <td> Sevilla Prameswarijanuari </td>
                    <td>
                      <label class="badge badge-success">Success</label>
                    </td>
                    <td> Rp.4.450.000 </td>
                    <td> May 15, 2015 </td>
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
                            text: "Sevilla Prameswarijanuari",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Sevilla Prameswarijanuari",
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
                    <td> Sevilla Prameswarijanuari </td>
                    <td>
                      <label class="badge badge-warning">Panding</label>
                    </td>
                    <td> Rp.4.450.000 </td>
                    <td> May 15, 2015 </td>
                    <td>
                      <button disabled class="btn btn-outline-secondary">
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
                            text: "Sevilla Prameswarijanuari",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Sevilla Prameswarijanuari",
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
                    <td> Sevilla Prameswarijanuari </td>
                    <td>
                      <label class="badge badge-warning">Panding</label>
                    </td>
                    <td> Rp.4.450.000 </td>
                    <td> May 15, 2015 </td>
                    <td>
                      <button disabled class="btn btn-outline-secondary">
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
                            text: "Sevilla Prameswarijanuari",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Hapus",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Data telah dihapus!",
                                "Sevilla Prameswarijanuari",
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
