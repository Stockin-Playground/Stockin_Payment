import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Basic Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Tables
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="Page">
                Basic tables
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <p className="card-description">
                  {" "}
                 
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Profile</th>
                        <th>VatNo.</th>
                        <th>Created</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pradit</td>
                        <td>53275531</td>
                        <td>08 Januari 2015</td>
                        <td>
                          <label className="badge badge-warning">Pending</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Zaki</td>
                        <td>53275532</td>
                        <td>08 Desember 2012</td>
                        <td>
                          <label className="badge badge-success">
                            Succes
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Abiyasa</td>
                        <td>53275533</td>
                        <td>02 Februari 2005</td>
                        <td>
                          <label className="badge badge-warning">Pending</label>
                        </td>
                      </tr>
                      <tr>
                        <td>Aldi</td>
                        <td>53275534</td>
                        <td>17 Juli 2022</td>
                        <td>
                          <label className="badge badge-success">
                            Succes
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>Jayadi</td>
                        <td>53275535</td>
                        <td>20 Maret 2009</td>
                        <td>
                          <label className="badge badge-warning">
                            Pending
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav>
                      <ul class="pagination d-flex justify-content-end pagination-danger">
                        <li class="page-item"><a class="page-link" href="#"><i class="mdi mdi-chevron-left"></i></a></li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a></li>
                      </ul>
                    </nav>
                </div>
              </div>
            </div>
          </div>
         </div>
        </div>
    );
  }
}

export default BasicTable;
