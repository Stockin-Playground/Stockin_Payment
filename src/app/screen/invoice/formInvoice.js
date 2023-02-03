import React, { Component } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import bsCustomFileInput from "bs-custom-file-input";

export class FormInvoice extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  componentDidMount() {
    bsCustomFileInput.init();
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Invoice </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="!#" onClick={(event) => event.preventDefault()}>
                  Forms
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Form elements
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="card-title">Form Invoice</h4>
                    <p className="card-description">Pilih nama client</p>
                  </div>
                  <div className="col-md-6 float-right text-right">
                    <p className="card-description">
                      <h4>INVOICE #</h4> 314/Inv/MDI-MRE/1/23
                    </p>
                  </div>
                  <Typeahead
                    inputProps={{
                      className: "form-control ml-2 mb-5 col-md-10",
                    }}
                    placeholder="Search"
                    onChange={(selected) => {
                      console.log("jalan selected");
                      console.log(selected);
                    }}
                    options={["Andora", "Belgia", "Chile"]}
                  />
                </div>
                <form className="form-sample">
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Nama Penerima (Client)
                        </label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Alamat
                        </label>
                        <div className="col-sm-9">
                          <textarea
                            class="form-control"
                            id="exampleTextarea1"
                            rows="4"
                          ></textarea>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Gender
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Tanggal Bayar
                        </label>
                        <div className="col-sm-9">
                          <DatePicker
                            className="form-control w-100"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Category
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">
                          Status Berlangganan
                        </label>
                        <div className="col-sm-3">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="ExampleRadio4"
                                id="membershipRadios1"
                                defaultChecked
                              />{" "}
                              Free
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="ExampleRadio4"
                                id="membershipRadios2"
                              />{" "}
                              Trial
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                className="form-check-input"
                                name="ExampleRadio4"
                                id="membershipRadios2"
                              />{" "}
                              Berlangganan
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <p className="card-description"> Address </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormInvoice;
