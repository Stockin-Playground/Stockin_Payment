import React, { useEffect, useState } from "react";
import { getClient } from "./clientApi";




const BasicTable= () => {
  const [client, setDataClient] = useState([])


useEffect(() => {
  getAllClient()
}, []); 

const getAllClient = async() =>{
  setDataClient(await getClient()) 
}


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
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <h4 className="card-title">BY: Raden Salaf</h4>
                <p className="card-description">
                  {" "}
                 
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>No Hp</th>
                        <th>stk_state</th>
                        <th>stk_paket_client</th>
                      </tr>
                    </thead>
                    <tbody>
                      {client.map((item,index)=>{
                        return (
                          <>
                          <tr>
                        <td>1</td>
                        <td>{item.nama}</td>
                        <td>{item.email}</td>
                        <td>{item.nohp}</td>
                        <td><label className={
                             item.status == "Success"  
                            ?     "badge badge-success"
                            :     "badge badge-warning"
                           }
                         >
                            Succes
                          </label>
                        </td>
                        <td>
                          <div class="badge badge-primary">Micro</div>
                        </td>                       
                      </tr>
                          </>
                        )
                      })}
                      
                    </tbody>
                  </table>
                  <nav className="btn float-right m-2">
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


export default BasicTable;
