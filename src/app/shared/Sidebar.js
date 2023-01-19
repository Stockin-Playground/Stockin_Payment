import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import Swal from "sweetalert2";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  onChangePassword() {
    Swal.fire({
      title: "Ubah Password",
      html: `<input type="password" id="password_old" class="swal2-input" placeholder="Password Lama">
      <input type="password" id="password_new" class="swal2-input" placeholder="Password baru">
      <input type="password" id="password_corfm" class="swal2-input" placeholder="Konfirmasi password">`,
      confirmButtonText: "Simpan",
      focusConfirm: false,
      preConfirm: () => {
        const password_old =
          Swal.getPopup().querySelector("#password_old").value;
        const password_new =
          Swal.getPopup().querySelector("#password_new").value;
        const password_corfm =
          Swal.getPopup().querySelector("#password_corfm").value;
        if (!password_old || !password_new || !password_corfm) {
          Swal.showValidationMessage(`Password tidak boleh kosong`);
        } else if (password_new !== password_corfm) {
          Swal.showValidationMessage(`Konfirmasi password salah`);
        }

        return {
          password_old: password_old,
          password_new: password_new,
          password_corfm: password_corfm,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "Berhasil ubah password",
        });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }

  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img
              src={require("../../assets/images/stockin_landscape.png")}
              alt="logo"
            />
          </a>
          <a className="sidebar-brand brand-logo-mini" href="index.html">
            <img
              src={require("../../assets/images/stockin-mini.png")}
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle "
                    src={require("../../assets/images/stockin-mini.png")}
                    alt="profile"
                  />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">
                    <Trans>Stockin Admin</Trans>
                  </h5>
                  <span>
                    <Trans>Admin</Trans>
                  </span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a
                    href="!#"
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small">
                        <Trans>Account settings</Trans>
                      </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    href="!#"
                    className="dropdown-item preview-item"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div
                      className="preview-item-content"
                      onClick={this.onChangePassword}
                    >
                      <p className="preview-subject ellipsis mb-1 text-small">
                        <Trans>Change Password</Trans>
                      </p>
                    </div>
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Navigation</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive("/dashboard")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon">
                <i
                  className="mdi mdi-houzz
"
                ></i>
              </span>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/tables/basic-table")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link
              className={
                this.isPathActive("/tables/basic-table")
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/tables/basic-table"
            >
              <span className="menu-icon">
                <i className="mdi mdi-account"></i>
              </span>
              <span className="menu-title">
                <Trans>Pengguna</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/tables/invoice-table")
                ? "nav-item menu-items active"
                : "nav-item menu-items"
            }
          >
            <Link
              className={
                this.isPathActive("/tables/invoice-table")
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/tables/invoice-table"
            >
              <span className="menu-icon">
                <i className="mdi mdi-clipboard-text"></i>
              </span>
              <span className="menu-title">
                <Trans>Invoice</Trans>
              </span>
            </Link>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>More</Trans>
            </span>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">
                <Trans>Printout Invoice</Trans>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
