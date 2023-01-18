import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

export class InvoiceTable extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Basic Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Tables
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Basic tables
              </li>
            </ol>
          </nav>
        </div>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Client InvoiceTable </h4>
                <h4 className="card-title">BY:Raden Salaf</h4>
                <p className="card-description">
                  {" "}
                  Add className <code>.table-bordered</code>
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> No </th>
                        <th> Nama Client </th>
                        <th> Status </th>
                        <th> Pembayaran </th>
                        <th> Tanggal Pembayaran </th>
                        <th colspan="2"><b>Actions</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Sevilla Prameswarijanuari </td>
                        <td>
                          <label class="badge badge-danger">Pending</label>
                        </td>
                        <td> Rp.4.450.000 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{ alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Abiyasa Fadli Akbar </td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                        <td> Rp.12.500.000 </td>
                        <td> July 1, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> Rafi Dzulfikar </td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                        <td> Rp.500.000 </td>
                        <td> Apr 12, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Bejo Paijo </td>
                        <td>
                          <label class="badge badge-danger">Pending</label>
                        </td>
                        <td> Rp.2.500.000 </td>
                        <td> May 15, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Aldi Pangestu </td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                        <td> Rp.100.000 </td>
                        <td> Sep 08, 2014</td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td> Shello Mutiara Sukma </td>
                        <td>
                          <label class="badge badge-danger">Pending</label>
                        </td>
                        <td> Rp.2.100.000 </td>
                        <td> April 05, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                      <tr>
                        <td> 7 </td>
                        <td> Ahmad Nur Alhak </td>
                        <td>
                          <label class="badge badge-success">Completed</label>
                        </td>
                        <td> Rp.14.220.000 </td>
                        <td> June 16, 2015 </td>
                        <td style={{textAlign:'center'}}> 
                        <button type="button" class="btn btn-primary btn-rounded btn-icon">
                        <i style={{ marginLeft:'10%'}} class="mdi mdi-pencil"></i>
                        </button>
                         </td>
                         <td style={{textAlign:'center'}}>
                         <button type="button" class="btn btn-danger btn-rounded btn-icon" style={{backgroundColor:"#fc424a", alignSelf:'center'}}  >
                        <i class="mdi mdi-close-box" style={{ alignSelf:'center'}}></i></button>
                         </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default InvoiceTable;
