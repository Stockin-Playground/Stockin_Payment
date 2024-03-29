import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { Doughnut } from "react-chartjs-2";
import { useHistory } from "react-router-dom";
import { getSumClient, getExpired } from "./dashboardAPI";

const Dashboard = () => {
  const history = useHistory();
  const [userSum, setUserSum] = useState([]);
  const [userApp, setUserApp] = useState([]);
  const [expClient, setExptClient] = useState([]);
  const [transactionHistoryData, setTransactionHistoryData] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let dataClient = await getSumClient("status");
    let dataUserApp = await getSumClient("app");
    let expiredClient = await getExpired();
    let allCount = 0;
    let ucApp = [];
    let uApp = [];
    let cApp = [];

    dataClient.data.map((item) => {
      allCount = allCount + item.status;
    });
    dataClient.data.push({
      allCount: allCount,
    });
    dataUserApp.data.map((item) => {
      uApp.push(item.user_status);
      cApp.push(item.count);
    });

    setTransactionHistoryData({
      labels: uApp,
      datasets: [
        {
          data: cApp,
          backgroundColor: ["#0090e7", "#ffab00", "#fc424a", "#00d25b"],
        },
      ],
    });
    ucApp.push(uApp, cApp);

    setExptClient(expiredClient.data);
    setUserSum(dataClient.data);
    setUserApp(dataUserApp.data);
  };

  const transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
  };
  const onDetailClient = useCallback(
    () => history.push("/tables/basic-table"),
    [history]
  );

  return (
    console.log("data renddderr"),
    console.log(userApp),
    (
      <div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">
                        {userSum.length < 1 ? (
                          <div className="moving-square-loader"></div>
                        ) : (
                          userSum[3].allCount
                        )}
                      </h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">
                        user
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success">
                      <span
                        className="mdi mdi-account
"
                      ></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Total Pengguna
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">
                        {userSum.length < 1 ? (
                          <div className="moving-square-loader"></div>
                        ) : (
                          userSum[2].status
                        )}
                      </h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">
                        user
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success">
                      <span className="mdi mdi-account-check"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Pengguna Berlanggan
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">
                        {userSum.length < 1 ? (
                          <div className="moving-square-loader"></div>
                        ) : (
                          userSum[1].status
                        )}
                      </h3>
                      <p className="text-warning ml-2 mb-0 font-weight-medium">
                        user
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-warning">
                      <span className="mdi mdi-account-key" />
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Pengguna Trial
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">
                        {userSum.length < 1 ? (
                          <div class="moving-square-loader"></div>
                        ) : (
                          userSum[0].status
                        )}
                      </h3>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">
                        user
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-danger">
                      <span className="mdi mdi-account-remove"></span>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted font-weight-normal">
                  Pengguna Expired
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Data Pengguna</h4>
                <div className="aligner-wrapper">
                  {transactionHistoryData != "" ? (
                    <>
                      <Doughnut
                        data={transactionHistoryData}
                        options={transactionHistoryOptions}
                      />
                      <div className="absolute center-content">
                        <h5 className="font-weight-normal text-whiite text-center mb-2 text-white">
                          5000
                        </h5>
                        <p className="text-small text-muted text-center mb-0">
                          Total
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="flip-square-loader mx-auto" />
                  )}
                </div>
                {userApp.map((item) => {
                  return (
                    <>
                      <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                        <div className="text-md-center text-xl-left">
                          <h6 className="mb-1">{item.user_status}</h6>
                        </div>
                        <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                          <h6 className="font-weight-bold mb-0">
                            {item.count}
                          </h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between">
                  <h4 className="card-title mb-1">Masa Aktif Akan Berakhir</h4>
                  <p className="text-muted mb-1">Tanggal Masa Aktif</p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="preview-list">
                      {expClient.map((item) => {
                        return (
                          <>
                            <div className="preview-item border-bottom">
                              <div className="preview-thumbnail">
                                <div
                                  className={
                                    item.user_status == "Micro"
                                      ? "preview-icon bg-primary"
                                      : item.user_status == "Retail"
                                      ? "preview-icon bg-warning"
                                      : item.user_status == "Bengkel"
                                      ? "preview-icon bg-success"
                                      : "preview-icon bg-danger"
                                  }
                                >
                                  <i
                                    className={
                                      item.user_status == "Micro"
                                        ? "mdi mdi-store"
                                        : item.user_status == "Retail"
                                        ? "mdi mdi-store-24-hour"
                                        : item.user_status == "Bengkel"
                                        ? "mdi mdi-car-wash"
                                        : "mdi mdi-home-modern"
                                    }
                                  />
                                </div>
                              </div>
                              <div className="preview-item-content d-sm-flex flex-grow">
                                <div className="flex-grow">
                                  <h6 className="preview-subject">
                                    {item.nama}
                                  </h6>
                                  <p className="text-muted mb-0">
                                    {item.user_status}
                                  </p>
                                </div>
                                <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                                  <p className="text-muted">
                                    {moment(item.stk_expired).isBefore(moment())
                                      ? "- " +
                                        moment().diff(
                                          moment(item.stk_expired).format(),
                                          "days"
                                        ) +
                                        " Hari"
                                      : "" +
                                        moment().diff(
                                          moment(item.stk_expired).format(),
                                          "days"
                                        ) +
                                        " Hari"}
                                  </p>
                                  <p className="text-muted mb-0">
                                    {moment(item.stk_expired).format("LL") +
                                      " "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}

                      {/* <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary">
                          <i className="mdi mdi-store"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Angkringan Jogja</h6>
                          <p className="text-muted mb-0">Micro</p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">3 Hari</p>
                          <p className="text-muted mb-0">13 Januari 2023 </p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="mdi mdi-clock"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Liberty</h6>
                          <p className="text-muted mb-0">Retail</p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">4 Hari</p>
                          <p className="text-muted mb-0">14 Januari 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="preview-item border-bottom">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="mdi mdi-email-open"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Fiat Motor</h6>
                          <p className="text-muted mb-0">Bengkel</p>
                        </div>
                        <div className="mr-auto text-sm-right pt-2 pt-sm-0">
                          <p className="text-muted">4 Hari</p>
                          <p className="text-muted mb-0">14 Januari 2023 </p>
                        </div>
                      </div>
                    </div> */}
                      <div className="preview-item mt-2">
                        <button
                          type="button"
                          class="btn btn-primary btn-icon-text"
                          // onClick={onDetailClient}
                          onClick={() => {
                            console.log(expClient);
                          }}
                        >
                          <i class="mdi mdi-clipboard-alert"></i> Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
