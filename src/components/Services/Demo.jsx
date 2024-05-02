import React, { useState } from "react";
import { FaBell, FaTimes } from "react-icons/fa";
import { Offcanvas } from "react-bootstrap";
import unnamed from "../Assets/user/1.webp";
import Left from "../Profile/Left";
import { RiChatDeleteFill, RiDeleteBack2Fill } from "@remixicon/react";

const Demo = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [notifications, setNotifications] = useState([
    "Notification 1",
    "Notification 2",
  ]);

  const handleToggle = () => setShowNotifications(!showNotifications);
  const handleDashboardToggle = () => setShowDashboard(!showDashboard);

  const closeNotifications = () => setShowNotifications(false);
  const closeDashboard = () => setShowDashboard(false);

  const clearNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };


  return (
    <>
      <div className="top-noti">
        <span className="db-menu-noti" onClick={handleToggle}>
          <FaBell className="db-menu-noti-main" />
          <i id="noti-count">{notifications.length}</i>{" "}
        </span>
        <Offcanvas
          show={showNotifications}
          onHide={closeNotifications}
          placement="end"
          className="offcanvas-one-body"
        >
          <div className="db-noti top-noti-win">
            <span onClick={closeNotifications}>
              <FaTimes className="db-menu-clo" />
            </span>
            <h4>Notifications</h4>
            <Offcanvas.Body className="offcanvas-one-body">
              <ul id="all-notif-ul">
                {notifications.map((notification, index) => (
                  <li key={index}>
                    {notification}
                    <span
                      className="delete-btn-one"
                      onClick={() => clearNotification(index)}
                    >
                      <RiDeleteBack2Fill />
                    </span>
                  </li>
                ))}
              </ul>
              {notifications.length > 0 ? (
                <span
                  id="noti-clr-noti"
                  className="noti-clr-noti"
                  onClick={() => setNotifications([])}
                >
                  <RiChatDeleteFill className="delete-btn" />
                  Clear all notifications
                </span>
              ) : (
                <span id="no-noti-clr-noti" className="no-noti-clr-noti">
                  No Notifications to Show
                </span>
              )}
            
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>

      <div className="al">
        <div className="head-pro" onClick={handleDashboardToggle}>
          <img src={unnamed} alt="User" />
          <span className="fclick near-pro-cta"></span>
          <Offcanvas
            show={showDashboard}
            onHide={closeDashboard}
            placement="end"
            className="offcanvas-two"
          >
            <div className="db-noti-in">
              <Offcanvas.Body className="offcanvas-two-body">
                <span onClick={closeDashboard}>
                  <FaTimes className="db-menu-clo close" />
                </span>
                <Left />
              </Offcanvas.Body>
            </div>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Demo;
