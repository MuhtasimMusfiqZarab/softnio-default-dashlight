import React from "react";
import "../assets/css/dashlite.css?ver=1.3.0";
import "../assets/css/theme.css?ver=1.3.0";

function App() {
  return (
    <div classNameName="nk-body bg-lighter npc-general has-sidebar ">
      <div className="nk-app-root">
        <div className="nk-main ">
          <div
            className="nk-sidebar nk-sidebar-fixed "
            data-content="sidebarMenu"
          >
            <div className="nk-sidebar-element nk-sidebar-head">
              <div className="nk-sidebar-brand">
                <a
                  href="html/general/index.html"
                  className="logo-link nk-sidebar-logo"
                >
                  <img
                    className="logo-light logo-img"
                    src={require("../assets/images/logo.png")}
                    srcset={`${require("../assets/images/logo2x.png")} 2x`}
                    alt="logo"
                  />

                  <img
                    className="logo-dark logo-img"
                    src={require("../assets/images/logo-dark.png")}
                    srcset={`${require("../assets/images/logo-dark2x.png")} 2x`}
                    alt="logo-dark"
                  />
                  <span className="nio-version">General</span>
                </a>
              </div>
              <div className="nk-menu-trigger mr-n2">
                <a
                  href=""
                  className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                  data-target="sidebarMenu"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
              </div>
            </div>
            <div className="nk-sidebar-element">
              <div className="nk-sidebar-content">
                <div className="nk-sidebar-menu" data-simplebar>
                  <ul className="nk-menu">
                    <li className="nk-menu-item">
                      <a
                        href="html/general/index.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dashlite"></em>
                        </span>
                        <span className="nk-menu-text">Default Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/index-crypto.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-bitcoin-cash"></em>
                        </span>
                        <span className="nk-menu-text">Crypto Dashboard</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/index-analytics.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-growth"></em>
                        </span>
                        <span className="nk-menu-text">
                          Analytics Dashboard
                        </span>
                        <span className="nk-menu-badge">v1.2</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/index-invest.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-coins"></em>
                        </span>
                        <span className="nk-menu-text">Invest Dashboard</span>
                        <span className="nk-menu-badge">v1.2</span>
                      </a>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Exclusive Panel
                      </h6>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/subscription/index.html"
                        className="nk-menu-link"
                        target="_blank"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-calendar-booking"></em>
                        </span>
                        <span className="nk-menu-text">
                          Subscription - SaaS
                        </span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/crypto/index.html"
                        className="nk-menu-link"
                        target="_blank"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-wallet-saving"></em>
                        </span>
                        <span className="nk-menu-text">Crypto - Buy Sell</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/invest/index.html"
                        className="nk-menu-link"
                        target="_blank"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-invest"></em>
                        </span>
                        <span className="nk-menu-text">
                          Crypto - Investment
                        </span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/apps/messages/index.html"
                        className="nk-menu-link"
                        target="_blank"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-question"></em>
                        </span>
                        <span className="nk-menu-text">Messages</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/apps/inbox/index.html"
                        className="nk-menu-link"
                        target="_blank"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-inbox"></em>
                        </span>
                        <span className="nk-menu-text">Inbox / Mail</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a href="#" className="nk-menu-link is-disable">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-chat-circle"></em>
                        </span>
                        <span className="nk-menu-text">Chats</span>
                        <span className="nk-menu-badge">Soon</span>
                      </a>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Applications
                      </h6>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-users"></em>
                        </span>
                        <span className="nk-menu-text">User Manage</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/user-list-regular.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              User List - Regular
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/user-list-compact.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              User List - Compact
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/user-details-regular.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              User Details - Regular
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/user-profile-regular.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              User Profile - Regular
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-file-docs"></em>
                        </span>
                        <span className="nk-menu-text">AML / KYCs</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/kyc-list-regular.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              KYC List - Regular
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/kyc-details-regular.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              KYC Details - Regular
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-tranx"></em>
                        </span>
                        <span className="nk-menu-text">Transactions</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/transaction-basic.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Tranx List - Basic
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/transaction-crypto.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Tranx List - Crypto
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-grid-alt"></em>
                        </span>
                        <span className="nk-menu-text">Applications</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/apps-messages.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Messages</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/apps-inbox.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Inbox / Mail</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Misc Pages
                      </h6>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-signin"></em>
                        </span>
                        <span className="nk-menu-text">Auth Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/auths/auth-login.html"
                            className="nk-menu-link"
                            target="_blank"
                          >
                            <span className="nk-menu-text">Login / Signin</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/auths/auth-register.html"
                            className="nk-menu-link"
                            target="_blank"
                          >
                            <span className="nk-menu-text">
                              Register / Signup
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/auths/auth-reset.html"
                            className="nk-menu-link"
                            target="_blank"
                          >
                            <span className="nk-menu-text">
                              Forgot Password
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/auths/auth-success.html"
                            className="nk-menu-link"
                            target="_blank"
                          >
                            <span className="nk-menu-text">
                              Success / Confirm
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-files"></em>
                        </span>
                        <span className="nk-menu-text">Error Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/errors/404-classNameic.html"
                            target="_blank"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              404 classNameic
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/errors/504-classNameic.html"
                            target="_blank"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              504 classNameic
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/errors/404-s1.html"
                            target="_blank"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">404 Modern</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/errors/504-s1.html"
                            target="_blank"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">504 Modern</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-files"></em>
                        </span>
                        <span className="nk-menu-text">Other Pages</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/_blank.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Blank / Startup
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/faqs.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Faqs / Help</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/terms-policy.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Terms / Policy</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/regular-v1.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Regular Page - v1
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/pages/regular-v2.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Regular Page - v2
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">
                        Components
                      </h6>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-layers"></em>
                        </span>
                        <span className="nk-menu-text">Ui Elements</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/alerts.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Alerts</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/accordions.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Accordions</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/badges.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Badges</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/buttons.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Buttons</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/buttons-group.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Button Group</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/breadcrumb.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Breadcrumb</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/cards.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Cards</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/carousel.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Carousel</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/modals.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Modals</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/pagination.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Pagination</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/popover.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Popovers</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/progress.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Progress</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/spinner.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Spinner</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/tabs.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Tabs</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/toast.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Toasts</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/tooltip.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Tooltip</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/elements/typography.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Typography</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-text">Utilities</span>
                          </a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-border.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Border</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-colors.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Colors</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-display.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Display</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-embeded.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Embeded</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-flex.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Flex</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-text.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Text</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-sizing.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Sizing</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-spacing.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Spacing</span>
                              </a>
                            </li>
                            <li className="nk-menu-item">
                              <a
                                href="html/general/components/elements/util-others.html"
                                className="nk-menu-link"
                              >
                                <span className="nk-menu-text">Others</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-dot-box"></em>
                        </span>
                        <span className="nk-menu-text">Crafted Icons</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/misc/svg-icons.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              SVG Icon - Exclusive
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/misc/nioicon.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Nioicon - HandCrafted
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-table-view"></em>
                        </span>
                        <span className="nk-menu-text">Tables</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/tables/table-basic.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Basic Tables</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/tables/table-special.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Special Tables</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/tables/table-datatable.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">DataTables</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-card-view"></em>
                        </span>
                        <span className="nk-menu-text">Forms</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/forms/form-elements.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Form Elements</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/forms/form-layouts.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Form Layouts</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/forms/form-validation.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">
                              Form Validation
                            </span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a href="#" className="nk-menu-link is-disable">
                            <span className="nk-menu-text">Wizard Basic</span>{" "}
                            <span className="nk-menu-badge">Soon</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                      <a href="#" className="nk-menu-link nk-menu-toggle">
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-pie"></em>
                        </span>
                        <span className="nk-menu-text">Charts</span>
                      </a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/charts/chartjs.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Chart JS</span>
                          </a>
                        </li>
                        <li className="nk-menu-item">
                          <a
                            href="html/general/components/charts/knob.html"
                            className="nk-menu-link"
                          >
                            <span className="nk-menu-text">Knob JS</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/components/misc/toastr.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-alert-circle"></em>
                        </span>
                        <span className="nk-menu-text">Toastr</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/components/misc/sweet-alert.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-caution"></em>
                        </span>
                        <span className="nk-menu-text">Sweet Alert</span>
                      </a>
                    </li>
                    <li className="nk-menu-item">
                      <a
                        href="html/general/email-templates.html"
                        className="nk-menu-link"
                      >
                        <span className="nk-menu-icon">
                          <em className="icon ni ni-text-rich"></em>
                        </span>
                        <span className="nk-menu-text">Email Template</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-wrap ">
            <div className="nk-header nk-header-fixed is-light">
              <div className="container-fluid">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ml-n1">
                    <a
                      href="#"
                      className="nk-nav-toggle nk-quick-nav-icon"
                      data-target="sidebarMenu"
                    >
                      <em className="icon ni ni-menu"></em>
                    </a>
                  </div>
                  <div className="nk-header-brand d-xl-none">
                    <a href="html/crypto/index.html" className="logo-link">
                      <img
                        className="logo-light logo-img"
                        src="./images/logo.png"
                        srcset="./images/logo2x.png 2x"
                        alt="logo"
                      />
                      <img
                        className="logo-dark logo-img"
                        src="./images/logo-dark.png"
                        srcset="./images/logo-dark2x.png 2x"
                        alt="logo-dark"
                      />
                      <span className="nio-version">General</span>
                    </a>
                  </div>

                  <div className="nk-header-news d-none d-xl-block">
                    <div className="nk-news-list">
                      <a className="nk-news-item" href="#">
                        <div className="nk-news-icon">
                          <em className="icon ni ni-card-view"></em>
                        </div>
                        <div className="nk-news-text">
                          <p>
                            Do you know the latest update of 2019?{" "}
                            <span>
                              {" "}
                              A overview of our is now available on YouTube
                            </span>
                          </p>
                          <em className="icon ni ni-external"></em>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="dropdown user-dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <div className="user-toggle">
                            <div className="user-avatar sm">
                              <em className="icon ni ni-user-alt"></em>
                            </div>
                            <div className="user-info d-none d-md-block">
                              <div className="user-status">Administrator</div>
                              <div className="user-name dropdown-indicator">
                                Abu Bin Ishityak
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                          <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div className="user-card">
                              <div className="user-avatar">
                                <span>AB</span>
                              </div>
                              <div className="user-info">
                                <span className="lead-text">
                                  Abu Bin Ishtiyak
                                </span>
                                <span className="sub-text">
                                  info@softnio.com
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="html/general/user-profile-regular.html">
                                  <em className="icon ni ni-user-alt"></em>
                                  <span>View Profile</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/general/user-profile-setting.html">
                                  <em className="icon ni ni-setting-alt"></em>
                                  <span>Account Setting</span>
                                </a>
                              </li>
                              <li>
                                <a href="html/general/user-profile-activity.html">
                                  <em className="icon ni ni-activity-alt"></em>
                                  <span>Login Activity</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li>
                                <a href="#">
                                  <em className="icon ni ni-signout"></em>
                                  <span>Sign out</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown mr-n1">
                        <a
                          href="#"
                          className="dropdown-toggle nk-quick-nav-icon"
                          data-toggle="dropdown"
                        >
                          <div className="icon-status icon-status-info">
                            <em className="icon ni ni-bell"></em>
                          </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1">
                          <div className="dropdown-head">
                            <span className="sub-title nk-dropdown-title">
                              Notifications
                            </span>
                            <a href="#">Mark All as Read</a>
                          </div>
                          <div className="dropdown-body">
                            <div className="nk-notification">
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    You have requested to{" "}
                                    <span>Widthdrawl</span>
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon">
                                  <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">
                                    Your <span>Deposit Order</span> is placed
                                  </div>
                                  <div className="nk-notification-time">
                                    2 hrs ago
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-foot center">
                            <a href="#">View All</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="nk-content ">
              <div className="container-fluid">
                <div className="nk-content-inner">
                  <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">
                            Overview
                          </h3>
                          <div className="nk-block-des text-soft">
                            <p>Welcome to DashLite Dashboard Template.</p>
                          </div>
                        </div>
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <a
                              href="#"
                              className="btn btn-icon btn-trigger toggle-expand mr-n1"
                              data-target="pageMenu"
                            >
                              <em className="icon ni ni-more-v"></em>
                            </a>
                            <div
                              className="toggle-expand-content"
                              data-content="pageMenu"
                            >
                              <ul className="nk-block-tools g-3">
                                <li>
                                  <div className="drodown">
                                    <a
                                      href="#"
                                      className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                      data-toggle="dropdown"
                                    >
                                      <em className="d-none d-sm-inline icon ni ni-calender-date"></em>
                                      <span>
                                        <span className="d-none d-md-inline">
                                          Last
                                        </span>{" "}
                                        30 Days
                                      </span>
                                      <em className="dd-indc icon ni ni-chevron-right"></em>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <a href="#">
                                            <span>Last 30 Days</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Last 6 Months</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Last 1 Years</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li className="nk-block-tools-opt">
                                  <a href="#" className="btn btn-primary">
                                    <em className="icon ni ni-reports"></em>
                                    <span>Reports</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-block">
                      <div className="row g-gs">
                        <div className="col-xxl-6">
                          <div className="row g-gs">
                            <div className="col-lg-6 col-xxl-12">
                              <div className="card card-bordered">
                                <div className="card-inner">
                                  <div className="card-title-group align-start mb-2">
                                    <div className="card-title">
                                      <h6 className="title">Sales Revenue</h6>
                                      <p>
                                        In last 30 days revenue from
                                        subscription.
                                      </p>
                                    </div>
                                    <div className="card-tools">
                                      <em
                                        className="card-hint icon ni ni-help-fill"
                                        data-toggle="tooltip"
                                        data-placement="left"
                                        title="Revenue from subscription"
                                      ></em>
                                    </div>
                                  </div>
                                  <div className="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                                    <div className="nk-sale-data-group flex-md-nowrap g-4">
                                      <div className="nk-sale-data">
                                        <span className="amount">
                                          14,299.59{" "}
                                          <span className="change down text-danger">
                                            <em className="icon ni ni-arrow-long-down"></em>
                                            16.93%
                                          </span>
                                        </span>
                                        <span className="sub-title">
                                          This Month
                                        </span>
                                      </div>
                                      <div className="nk-sale-data">
                                        <span className="amount">
                                          7,299.59{" "}
                                          <span className="change up text-success">
                                            <em className="icon ni ni-arrow-long-up"></em>
                                            4.26%
                                          </span>
                                        </span>
                                        <span className="sub-title">
                                          This Week
                                        </span>
                                      </div>
                                    </div>
                                    <div className="nk-sales-ck sales-revenue">
                                      <canvas
                                        className="sales-bar-chart"
                                        id="salesRevenue"
                                      ></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-xxl-12">
                              <div className="row g-gs">
                                <div className="col-sm-6 col-lg-12 col-xxl-6">
                                  <div className="card card-bordered">
                                    <div className="card-inner">
                                      <div className="card-title-group align-start mb-2">
                                        <div className="card-title">
                                          <h6 className="title">
                                            Active Subscriptions
                                          </h6>
                                        </div>
                                        <div className="card-tools">
                                          <em
                                            className="card-hint icon ni ni-help-fill"
                                            data-toggle="tooltip"
                                            data-placement="left"
                                            title="Total active subscription"
                                          ></em>
                                        </div>
                                      </div>
                                      <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                        <div className="nk-sale-data">
                                          <span className="amount">9.69K</span>
                                          <span className="sub-title">
                                            <span className="change down text-danger">
                                              <em className="icon ni ni-arrow-long-down"></em>
                                              1.93%
                                            </span>
                                            since last month
                                          </span>
                                        </div>
                                        <div className="nk-sales-ck">
                                          <canvas
                                            className="sales-bar-chart"
                                            id="activeSubscription"
                                          ></canvas>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-lg-12 col-xxl-6">
                                  <div className="card card-bordered">
                                    <div className="card-inner">
                                      <div className="card-title-group align-start mb-2">
                                        <div className="card-title">
                                          <h6 className="title">
                                            Avg Subscriptions
                                          </h6>
                                        </div>
                                        <div className="card-tools">
                                          <em
                                            className="card-hint icon ni ni-help-fill"
                                            data-toggle="tooltip"
                                            data-placement="left"
                                            title="Daily Avg. subscription"
                                          ></em>
                                        </div>
                                      </div>
                                      <div className="align-end flex-sm-wrap g-4 flex-md-nowrap">
                                        <div className="nk-sale-data">
                                          <span className="amount">346.2</span>
                                          <span className="sub-title">
                                            <span className="change up text-success">
                                              <em className="icon ni ni-arrow-long-up"></em>
                                              2.45%
                                            </span>
                                            since last week
                                          </span>
                                        </div>
                                        <div className="nk-sales-ck">
                                          <canvas
                                            className="sales-bar-chart"
                                            id="totalSubscription"
                                          ></canvas>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-6">
                          <div className="card card-bordered h-100">
                            <div className="card-inner">
                              <div className="card-title-group align-start gx-3 mb-3">
                                <div className="card-title">
                                  <h6 className="title">Sales Overview</h6>
                                  <p>
                                    In 30 days sales of product subscription.{" "}
                                    <a href="#">See Details</a>
                                  </p>
                                </div>
                                <div className="card-tools">
                                  <div className="dropdown">
                                    <a
                                      href="#"
                                      className="btn btn-primary btn-dim d-none d-sm-inline-flex"
                                      data-toggle="dropdown"
                                    >
                                      <em className="icon ni ni-download-cloud"></em>
                                      <span>
                                        <span className="d-none d-md-inline">
                                          Download
                                        </span>{" "}
                                        Report
                                      </span>
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-icon btn-primary btn-dim d-sm-none"
                                      data-toggle="dropdown"
                                    >
                                      <em className="icon ni ni-download-cloud"></em>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <ul className="link-list-opt no-bdr">
                                        <li>
                                          <a href="#">
                                            <span>Download Mini Version</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <span>Download Full Version</span>
                                          </a>
                                        </li>
                                        <li className="divider"></li>
                                        <li>
                                          <a href="#">
                                            <em className="icon ni ni-opt-alt"></em>
                                            <span>More Options</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-sale-data-group align-center justify-between gy-3 gx-5">
                                <div className="nk-sale-data">
                                  <span className="amount">$82,944.60</span>
                                </div>
                                <div className="nk-sale-data">
                                  <span className="amount sm">
                                    1,937 <small>Subscribers</small>
                                  </span>
                                </div>
                              </div>
                              <div className="nk-sales-ck large pt-4">
                                <canvas
                                  className="sales-overview-chart"
                                  id="salesOverview"
                                ></canvas>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-8">
                          <div className="card card-bordered card-full">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">
                                    <span className="mr-2">Transaction</span>{" "}
                                    <a
                                      href="#"
                                      className="link d-none d-sm-inline"
                                    >
                                      See History
                                    </a>
                                  </h6>
                                </div>
                                <div className="card-tools">
                                  <ul className="card-tools-nav">
                                    <li>
                                      <a href="#">
                                        <span>Paid</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span>Pending</span>
                                      </a>
                                    </li>
                                    <li className="active">
                                      <a href="#">
                                        <span>All</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner p-0 border-top">
                              <div className="nk-tb-list nk-tb-orders">
                                <div className="nk-tb-item nk-tb-head">
                                  <div className="nk-tb-col">
                                    <span>Order No.</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span>Customer</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span>Date</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span>Ref</span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span>Amount</span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="d-none d-sm-inline">
                                      Status
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span>&nbsp;</span>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <span className="tb-lead">
                                      <a href="#">#95954</a>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <div className="user-card">
                                      <div className="user-avatar user-avatar-sm bg-purple">
                                        <span>AB</span>
                                      </div>
                                      <div className="user-name">
                                        <span className="tb-lead">
                                          Abu Bin Ishtiyak
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span className="tb-sub">02/11/2020</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-sub text-primary">
                                      SUB-2309232
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="tb-sub tb-amount">
                                      4,596.75 <span>USD</span>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="badge badge-dot badge-dot-xs badge-success">
                                      Paid
                                    </span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-action">
                                    <div className="dropdown">
                                      <a
                                        className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#">View</a>
                                          </li>
                                          <li>
                                            <a href="#">Invoice</a>
                                          </li>
                                          <li>
                                            <a href="#">Print</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <span className="tb-lead">
                                      <a href="#">#95850</a>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <div className="user-card">
                                      <div className="user-avatar user-avatar-sm bg-azure">
                                        <span>DE</span>
                                      </div>
                                      <div className="user-name">
                                        <span className="tb-lead">
                                          Desiree Edwards
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span className="tb-sub">02/02/2020</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-sub text-primary">
                                      SUB-2309154
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="tb-sub tb-amount">
                                      596.75 <span>USD</span>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="badge badge-dot badge-dot-xs badge-danger">
                                      Canceled
                                    </span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-action">
                                    <div className="dropdown">
                                      <a
                                        className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#">View</a>
                                          </li>
                                          <li>
                                            <a href="#">Remove</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <span className="tb-lead">
                                      <a href="#">#95812</a>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <div className="user-card">
                                      <div className="user-avatar user-avatar-sm bg-warning">
                                        <img
                                          src="./images/avatar/b-sm.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <div className="user-name">
                                        <span className="tb-lead">
                                          Blanca Schultz
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span className="tb-sub">02/01/2020</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-sub text-primary">
                                      SUB-2309143
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="tb-sub tb-amount">
                                      199.99 <span>USD</span>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="badge badge-dot badge-dot-xs badge-success">
                                      Paid
                                    </span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-action">
                                    <div className="dropdown">
                                      <a
                                        className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#">View</a>
                                          </li>
                                          <li>
                                            <a href="#">Invoice</a>
                                          </li>
                                          <li>
                                            <a href="#">Print</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <span className="tb-lead">
                                      <a href="#">#95256</a>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <div className="user-card">
                                      <div className="user-avatar user-avatar-sm bg-purple">
                                        <span>NL</span>
                                      </div>
                                      <div className="user-name">
                                        <span className="tb-lead">
                                          Naomi Lawrence
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span className="tb-sub">01/29/2020</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-sub text-primary">
                                      SUB-2305684
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="tb-sub tb-amount">
                                      1099.99 <span>USD</span>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="badge badge-dot badge-dot-xs badge-success">
                                      Paid
                                    </span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-action">
                                    <div className="dropdown">
                                      <a
                                        className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#">View</a>
                                          </li>
                                          <li>
                                            <a href="#">Invoice</a>
                                          </li>
                                          <li>
                                            <a href="#">Print</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="nk-tb-item">
                                  <div className="nk-tb-col">
                                    <span className="tb-lead">
                                      <a href="#">#95135</a>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <div className="user-card">
                                      <div className="user-avatar user-avatar-sm bg-success">
                                        <span>CH</span>
                                      </div>
                                      <div className="user-name">
                                        <span className="tb-lead">
                                          Cassandra Hogan
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="nk-tb-col tb-col-md">
                                    <span className="tb-sub">01/29/2020</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-lg">
                                    <span className="tb-sub text-primary">
                                      SUB-2305564
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="tb-sub tb-amount">
                                      1099.99 <span>USD</span>
                                    </span>
                                  </div>
                                  <div className="nk-tb-col">
                                    <span className="badge badge-dot badge-dot-xs badge-warning">
                                      Due
                                    </span>
                                  </div>
                                  <div className="nk-tb-col nk-tb-col-action">
                                    <div className="dropdown">
                                      <a
                                        className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                        data-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                                        <ul className="link-list-plain">
                                          <li>
                                            <a href="#">View</a>
                                          </li>
                                          <li>
                                            <a href="#">Invoice</a>
                                          </li>
                                          <li>
                                            <a href="#">Notify</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner-sm border-top text-center d-sm-none">
                              <a href="#" className="btn btn-link btn-block">
                                See History
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                          <div className="card card-bordered card-full">
                            <div className="card-inner border-bottom">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">Recent Activities</h6>
                                </div>
                                <div className="card-tools">
                                  <ul className="card-tools-nav">
                                    <li>
                                      <a href="#">
                                        <span>Cancel</span>
                                      </a>
                                    </li>
                                    <li className="active">
                                      <a href="#">
                                        <span>All</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <ul className="nk-activity">
                              <li className="nk-activity-item">
                                <div className="nk-activity-media user-avatar bg-success">
                                  <img src="./images/avatar/c-sm.jpg" alt="" />
                                </div>
                                <div className="nk-activity-data">
                                  <div className="label">
                                    Keith Jensen requested to Widthdrawl.
                                  </div>
                                  <span className="time">2 hours ago</span>
                                </div>
                              </li>
                              <li className="nk-activity-item">
                                <div className="nk-activity-media user-avatar bg-warning">
                                  HS
                                </div>
                                <div className="nk-activity-data">
                                  <div className="label">
                                    Harry Simpson placed a Order.
                                  </div>
                                  <span className="time">2 hours ago</span>
                                </div>
                              </li>
                              <li className="nk-activity-item">
                                <div className="nk-activity-media user-avatar bg-azure">
                                  SM
                                </div>
                                <div className="nk-activity-data">
                                  <div className="label">
                                    Stephanie Marshall got a huge bonus.
                                  </div>
                                  <span className="time">2 hours ago</span>
                                </div>
                              </li>
                              <li className="nk-activity-item">
                                <div className="nk-activity-media user-avatar bg-purple">
                                  <img src="./images/avatar/d-sm.jpg" alt="" />
                                </div>
                                <div className="nk-activity-data">
                                  <div className="label">
                                    Nicholas Carr deposited funds.
                                  </div>
                                  <span className="time">2 hours ago</span>
                                </div>
                              </li>
                              <li className="nk-activity-item">
                                <div className="nk-activity-media user-avatar bg-pink">
                                  TM
                                </div>
                                <div className="nk-activity-data">
                                  <div className="label">
                                    Timothy Moreno placed a Order.
                                  </div>
                                  <span className="time">2 hours ago</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6 col-xxl-4">
                          <div className="card card-bordered card-full">
                            <div className="card-inner-group">
                              <div className="card-inner">
                                <div className="card-title-group">
                                  <div className="card-title">
                                    <h6 className="title">New Users</h6>
                                  </div>
                                  <div className="card-tools">
                                    <a
                                      href="html/general/user-list-regular.html"
                                      className="link"
                                    >
                                      View All
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner card-inner-md">
                                <div className="user-card">
                                  <div className="user-avatar bg-primary-dim">
                                    <span>AB</span>
                                  </div>
                                  <div className="user-info">
                                    <span className="lead-text">
                                      Abu Bin Ishtiyak
                                    </span>
                                    <span className="sub-text">
                                      info@softnio.com
                                    </span>
                                  </div>
                                  <div className="user-action">
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-setting"></em>
                                              <span>Action Settings</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-notify"></em>
                                              <span>Push Notification</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner card-inner-md">
                                <div className="user-card">
                                  <div className="user-avatar bg-pink-dim">
                                    <span>SW</span>
                                  </div>
                                  <div className="user-info">
                                    <span className="lead-text">
                                      Sharon Walker
                                    </span>
                                    <span className="sub-text">
                                      sharon-90@example.com
                                    </span>
                                  </div>
                                  <div className="user-action">
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-setting"></em>
                                              <span>Action Settings</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-notify"></em>
                                              <span>Push Notification</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner card-inner-md">
                                <div className="user-card">
                                  <div className="user-avatar bg-warning-dim">
                                    <span>GO</span>
                                  </div>
                                  <div className="user-info">
                                    <span className="lead-text">
                                      Gloria Oliver
                                    </span>
                                    <span className="sub-text">
                                      gloria_72@example.com
                                    </span>
                                  </div>
                                  <div className="user-action">
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-setting"></em>
                                              <span>Action Settings</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-notify"></em>
                                              <span>Push Notification</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-inner card-inner-md">
                                <div className="user-card">
                                  <div className="user-avatar bg-success-dim">
                                    <span>PS</span>
                                  </div>
                                  <div className="user-info">
                                    <span className="lead-text">
                                      Phillip Sullivan
                                    </span>
                                    <span className="sub-text">
                                      phillip-85@example.com
                                    </span>
                                  </div>
                                  <div className="user-action">
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle btn btn-icon btn-trigger mr-n1"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <em className="icon ni ni-more-h"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-setting"></em>
                                              <span>Action Settings</span>
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <em className="icon ni ni-notify"></em>
                                              <span>Push Notification</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4">
                          <div className="card card-bordered h-100">
                            <div className="card-inner border-bottom">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">Support Requests</h6>
                                </div>
                                <div className="card-tools">
                                  <a
                                    href="html/subscription/tickets.html"
                                    className="link"
                                  >
                                    All Tickets
                                  </a>
                                </div>
                              </div>
                            </div>
                            <ul className="nk-support">
                              <li className="nk-support-item">
                                <div className="user-avatar">
                                  <img src="./images/avatar/a-sm.jpg" alt="" />
                                </div>
                                <div className="nk-support-content">
                                  <div className="title">
                                    <span>Vincent Lopez</span>
                                    <span className="badge badge-dot badge-dot-xs badge-warning ml-1">
                                      Pending
                                    </span>
                                  </div>
                                  <p>
                                    Thanks for contact us with your issues...
                                  </p>
                                  <span className="time">6 min ago</span>
                                </div>
                              </li>
                              <li className="nk-support-item">
                                <div className="user-avatar bg-purple-dim">
                                  <span>DM</span>
                                </div>
                                <div className="nk-support-content">
                                  <div className="title">
                                    <span>Daniel Moore</span>
                                    <span className="badge badge-dot badge-dot-xs badge-info ml-1">
                                      Open
                                    </span>
                                  </div>
                                  <p>
                                    Thanks for contact us with your issues...
                                  </p>
                                  <span className="time">2 Hours ago</span>
                                </div>
                              </li>
                              <li className="nk-support-item">
                                <div className="user-avatar">
                                  <img src="./images/avatar/b-sm.jpg" alt="" />
                                </div>
                                <div className="nk-support-content">
                                  <div className="title">
                                    <span>Larry Henry</span>
                                    <span className="badge badge-dot badge-dot-xs badge-success ml-1">
                                      Solved
                                    </span>
                                  </div>
                                  <p>
                                    Thanks for contact us with your issues...
                                  </p>
                                  <span className="time">3 Hours ago</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4">
                          <div className="card card-bordered h-100">
                            <div className="card-inner border-bottom">
                              <div className="card-title-group">
                                <div className="card-title">
                                  <h6 className="title">Notifications</h6>
                                </div>
                                <div className="card-tools">
                                  <a
                                    href="html/subscription/tickets.html"
                                    className="link"
                                  >
                                    View All
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner">
                              <div className="timeline">
                                <h6 className="timeline-head">
                                  November, 2019
                                </h6>
                                <ul className="timeline-list">
                                  <li className="timeline-item">
                                    <div className="timeline-status bg-primary is-outline"></div>
                                    <div className="timeline-date">
                                      13 Nov{" "}
                                      <em className="icon ni ni-alarm-alt"></em>
                                    </div>
                                    <div className="timeline-data">
                                      <h6 className="timeline-title">
                                        Submited KYC Application
                                      </h6>
                                      <div className="timeline-des">
                                        <p>
                                          Re-submitted KYC Application form.
                                        </p>
                                        <span className="time">09:30am</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="timeline-item">
                                    <div className="timeline-status bg-primary"></div>
                                    <div className="timeline-date">
                                      13 Nov{" "}
                                      <em className="icon ni ni-alarm-alt"></em>
                                    </div>
                                    <div className="timeline-data">
                                      <h6 className="timeline-title">
                                        Submited KYC Application
                                      </h6>
                                      <div className="timeline-des">
                                        <p>
                                          Re-submitted KYC Application form.
                                        </p>
                                        <span className="time">09:30am</span>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="timeline-item">
                                    <div className="timeline-status bg-pink"></div>
                                    <div className="timeline-date">
                                      13 Nov{" "}
                                      <em className="icon ni ni-alarm-alt"></em>
                                    </div>
                                    <div className="timeline-data">
                                      <h6 className="timeline-title">
                                        Submited KYC Application
                                      </h6>
                                      <div className="timeline-des">
                                        <p>
                                          Re-submitted KYC Application form.
                                        </p>
                                        <span className="time">09:30am</span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-footer">
              <div className="container-fluid">
                <div className="nk-footer-wrap">
                  <div className="nk-footer-copyright">
                    {" "}
                    &copy; 2020 DashLite. Template by <a href="#">Softnio</a>
                  </div>
                  <div className="nk-footer-links">
                    <ul className="nav nav-sm">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Terms
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Privacy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Help
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
