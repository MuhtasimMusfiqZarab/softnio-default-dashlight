import React from "react";

const SideBar = () => {
  return (
    //Sidebar panel
    <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
      <div className="nk-sidebar-element nk-sidebar-head">
        <div className="nk-sidebar-brand">
          <a href="/" className="logo-link nk-sidebar-logo">
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
            href="/"
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
                <a href="/" className="nk-menu-link">
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
                  <span className="nk-menu-text">Analytics Dashboard</span>
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
                  <span className="nk-menu-text">Subscription - SaaS</span>
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
                  <span className="nk-menu-text">Crypto - Investment</span>
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
                <a href="/" className="nk-menu-link is-disable">
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">User List - Regular</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/user-list-compact.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">User List - Compact</span>
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">KYC List - Regular</span>
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">Tranx List - Basic</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/transaction-crypto.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Tranx List - Crypto</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                <h6 className="overline-title text-primary-alt">Misc Pages</h6>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">Register / Signup</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/pages/auths/auth-reset.html"
                      className="nk-menu-link"
                      target="_blank"
                    >
                      <span className="nk-menu-text">Forgot Password</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/pages/auths/auth-success.html"
                      className="nk-menu-link"
                      target="_blank"
                    >
                      <span className="nk-menu-text">Success / Confirm</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">404 classNameic</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/pages/errors/504-classNameic.html"
                      target="_blank"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">504 classNameic</span>
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-files"></em>
                  </span>
                  <span className="nk-menu-text">Other Pages</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a href="html/general/_blank.html" className="nk-menu-link">
                      <span className="nk-menu-text">Blank / Startup</span>
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
                      <span className="nk-menu-text">Regular Page - v1</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="html/general/pages/regular-v2.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Regular Page - v2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">Components</h6>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                    <a href="/" className="nk-menu-link nk-menu-toggle">
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">SVG Icon - Exclusive</span>
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
                      <span className="nk-menu-text">Form Validation</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="/" className="nk-menu-link is-disable">
                      <span className="nk-menu-text">Wizard Basic</span>{" "}
                      <span className="nk-menu-badge">Soon</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nk-menu-item has-sub">
                <a href="/" className="nk-menu-link nk-menu-toggle">
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
  );
};

export default SideBar;
