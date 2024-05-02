import React, { useEffect, useState } from "react";
import Left from "./Left";
import { Link } from "react-router-dom";
import { RiMore2Fill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

import "react-toastify/dist/ReactToastify.css";

const Lead = () => {
  

  const [leadData, setLeadData] = useState([
    {
      id: 1,
      name: "Saurabh",
      phone: "7417143645",
      email: "imsaurabhk2002@gmail.com",
      location: "dallas",
      date: "16, Apr 2024",
      time: "5:00 AM",
      message: "this is only for testing",
      status: "New",
      manage: "Lead Status",
    },
    {
      id: 2,
      name: "Saurabsdsh",
      phone: "7417199645",
      email: "imsaurabhk2002@gmail.com",
      location: "dallas",
      date: "16, Apr 2024",
      time: "5:00 AM",
      message: "this is only for testing",
      status: "New",
      manage: "Lead Status",
    },
    {
      id: 3,
      name: "Saurxssabh",
      phone: "7417143775",
      email: "imsaurabhk2002@gmail.com",
      location: "dallas",
      date: "16, Apr 2024",
      time: "5:00 AM",
      message: "this is only for testing",
      status: "New",
      manage: "Lead Status",
    },
  ]);

  const [mobiledata, setMobiledata] = useState();

  useEffect(() => {
    const handleResize = () => {
      setMobiledata(window.innerWidth <= 768); // Adjust the width as needed for mobile devices
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function generateDateRange(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  const dates = generateDateRange(startDate, endDate);

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    leadId: null,
  });

  const [openDropdownId, setOpenDropdownId] = useState(false);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const toggleDropdown = (id) => {
    setOpenDropdownId(id === openDropdownId ? null : id);
  };

  const handleDelete = (id) => {
    setDeleteConfirmation({
      isOpen: true,
      leadId: id,
    });
  };

  const hours = [
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
    "12 AM",
  ];
  const handleConfirmation = (confirm) => {
    if (confirm) {
      const updatedleadData = leadData.filter(
        (item) => item.id !== deleteConfirmation.leadId
      );
      setLeadData(updatedleadData);
    }
    setDeleteConfirmation({
      isOpen: false,
      leadId: null,
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const toggleDropdownSecond = () => {
    setIsOpen(!isOpen);
  };
  const handleFollowUp = (id, newStatus) => {
    const updatedLeadData = leadData.map((lead) =>
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    setLeadData(updatedLeadData);
    setOpenDropdownId(false);
  };

  const updateStatus = (time, date) => {
    const status = `Date: ${date || ""} - Time: ${time || ""}`;
    console.log(`status update status ${status}`);
    const updatedLeadData = leadData.map((lead) =>
      lead.id === openDropdownId ? { ...lead, status: status } : lead
    );
    setLeadData(updatedLeadData);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setOpenDate(true);
    if (selectedTime) {
      updateStatus(selectedTime, date);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };
  const handleApply = () => {
    if (selectedTime && selectedDate) {
      updateStatus(selectedTime, selectedDate);
    }
    setSelectedDate("");
    setSelectedTime("");
    setOpenDropdownId(false);
    setIsOpen(false);
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    if (name === "selectDate") {
      setSelectedDate(value);
      setOpenDate(true);
    } else if (name === "selectTime") {
      setSelectedTime(value);
    }
  };

  const handleCancel = () => {
    setOpenDropdownId(false);
    setIsOpen(false);
    setSelectedTime("");
    setSelectedDate("");
  };

  return (
    <>
      {deleteConfirmation.isOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this lead enquiry?</p>
          <button className="yes-btn" onClick={() => handleConfirmation(true)}>
            Yes
          </button>
          <button className="no-btn" onClick={() => handleConfirmation(false)}>
            No
          </button>
        </div>
      )}
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center center-dashboard">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">All Service Experts Leads</span>

              <div className="ud-cen-s2 ud-cent-mobile">
                <h2>Leads</h2>

                {mobiledata ? (
                  <div className="lead-cards">
                    {leadData.map((lead, index) => (
                      <div key={index} className="lead-card">
                        <div className="new-class">
                          <span
                            className={`db-list-rat ${
                              lead.status === "Deal Completed"
                                ? "bg-success"
                                : lead.status === "Not Interested"
                                ? "bg-danger"
                                : lead.status === "Not Contactable"
                                ? "bg-warning"
                                : ""
                            }`}
                            style={{
                              color:
                                lead.status === "Deal Completed" ||
                                lead.status === "Not Interested" ||
                                lead.status === "Not Contactable"
                                  ? "white"
                                  : "inherit",
                            }}
                          >
                            {lead.status}
                          </span>
                        </div>
                        <span className="dropdown-manage">
                          <Link
                            className="d"
                            onClick={() => toggleDropdown(lead.id)}
                          >
                            <RiMore2Fill className="three-dots-icon" />
                          </Link>
                          {openDropdownId === lead.id && (
                            <div className="dropdown-content-manage">
                              <div className=" manage-main">
                                <div className="db-list-edit cta-blu-sml dropdown-manage-second text-center">
                                  <span onClick={toggleDropdownSecond}>
                                    Follow Up
                                  </span>
                                  {isOpen && (
                                    <div className="dropdown-second-manage manage-main-drop">
                                      <div className="chhose-date">
                                        <h4>Select Date</h4>
                                        <label className="manage-check">
                                          <input
                                            type="checkbox"
                                            className="manage-input"
                                            onClick={() =>
                                              handleDateClick("Today")
                                            }
                                            checked={selectedDate === "Today"}
                                          />
                                          Today
                                        </label>
                                        <label className="manage-check">
                                          <input
                                            type="checkbox"
                                            className="manage-input"
                                            onClick={() =>
                                              handleDateClick("Tomorrow")
                                            }
                                            checked={
                                              selectedDate === "Tomorrow"
                                            }
                                          />
                                          Tomorrow
                                        </label>

                                        <select
                                          className="manage-check"
                                          name="selectDate"
                                          onChange={(event) =>
                                            handleTimeChange(event)
                                          }
                                          value={selectedDate}
                                        >
                                          <option value="default">
                                            Pick up date
                                          </option>
                                          {dates.map((dates) => (
                                            <option key={dates} value={dates}>
                                              {dates}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                      {openDate && (
                                        <div className="choose-time">
                                          <h4>Select Time</h4>

                                          <label className="manage-check">
                                            <input
                                              type="checkbox"
                                              className="manage-input"
                                              onClick={() =>
                                                handleTimeClick("10 AM")
                                              }
                                              checked={selectedTime === "10 AM"}
                                            />
                                            10 AM
                                          </label>

                                          <label className="manage-check">
                                            <input
                                              type="checkbox"
                                              className="manage-input"
                                              onClick={() =>
                                                handleTimeClick("2 AM")
                                              }
                                              checked={selectedTime === "2 AM"}
                                            />
                                            2 AM
                                          </label>
                                          <label className="manage-check">
                                            <input
                                              type="checkbox"
                                              className="manage-input"
                                              onClick={() =>
                                                handleTimeClick("6 AM")
                                              }
                                              checked={selectedTime === "6 AM"}
                                            />
                                            6 AM
                                          </label>

                                          <select
                                            className="manage-check"
                                            name="selectTime"
                                            onChange={(event) =>
                                              handleTimeChange(event)
                                            }
                                            value={selectedTime}
                                          >
                                            <option value="default">
                                              Pick up time
                                            </option>
                                            {hours.map((hour) => (
                                              <option key={hour} value={hour}>
                                                {hour}
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                      )}

                                      <div className="two-buttons">
                                        <button
                                          className="btn-button-apply btn-button-cancel "
                                          onClick={() => handleCancel()}
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="btn-button-apply"
                                          onClick={() => handleApply()}
                                        >
                                          Apply
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <button
                                  className="db-list-edit cta-blu-sml bg-success"
                                  onClick={() =>
                                    handleFollowUp(lead.id, "Deal Completed")
                                  }
                                >
                                  Deal Completed
                                </button>
                                <button
                                  className="db-list-edit cta-blu-sml bg-danger"
                                  onClick={() =>
                                    handleFollowUp(lead.id, "Not Interested")
                                  }
                                >
                                  Not Interested
                                </button>
                                <button
                                  className="db-list-edit cta-blu-sml bg-warning"
                                  onClick={() =>
                                    handleFollowUp(lead.id, "Not Contactable")
                                  }
                                >
                                  Not Contactable
                                </button>
                              </div>
                            </div>
                          )}
                        </span>
                        <div className="lead-details">
                          <img
                            loading="lazy"
                            src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                            alt={lead.name}
                          />
                          <div>
                            <p>{lead.name}</p>
                            <p>Date: {lead.date}</p>
                          </div>
                        </div>
                        <div className="enquiry-details">
                          <p>
                            <b>Email Id:</b> {lead.email}
                          </p>
                          <p>
                            <b>Location:</b> {lead.location}
                          </p>
                          <p>
                            <b>Date:</b> {lead.date}
                          </p>
                          <p>
                            <b>Time:</b> {lead.time}
                          </p>
                        </div>
                        <div className="message">
                          <p>
                            <b>Message:</b> {lead.message}
                          </p>
                        </div>
                        <div className="social-data ">
                          <div className="call-data">
                            <Link
                              to={`tel:${lead.phone}`}
                              className="cta cta-call"
                            >
                              <RiPhoneFill /> Call Now
                            </Link>
                          </div>
                          <div className="call-data whats-app-data">
                            <Link
                              to={`whatsapp://send?phone=${lead.phone}`}
                              className="cta cta-rev"
                            >
                              <RiWhatsappFill /> WhatsApp
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <table className="responsive-table bordered" id="myTable">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Lead details</th>
                        <th>Enquiry Details</th>
                        <th>Message</th>
                        <th>Lead Status</th>
                        <th>Status</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadData.map((lead, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              loading="lazy"
                              src="https://bizbookdirectorytemplate.com/images/user/970813.jpg"
                              alt={lead.name}
                            />
                            {lead.name}
                            <span>Date: {lead.date}</span>
                          </td>
                          <td>
                            <span>
                              <b>Phone: </b>
                              {lead.phone}
                            </span>

                            <br />
                            <span>
                              <b>Email Id: </b>
                              {lead.email}
                            </span>
                            <br />
                            <span>
                              <b>Location: </b>
                              {lead.location}
                            </span>
                            <br />
                            <span>
                              <b>Date: </b>
                              {lead.date}
                            </span>
                            <br />
                            <span>
                              <b>Time: </b>
                              {lead.time}
                            </span>
                          </td>
                          <td>{lead.message}</td>

                          <td>
                            <div className="dropdown-manage">
                              <Link
                                className="db-list-edit cta-blu-sml"
                                onClick={() => toggleDropdown(lead.id)}
                              >
                                {lead.manage}
                              </Link>
                              {openDropdownId === lead.id && (
                                <div className="dropdown-content-manage">
                                  <div className=" manage-main">
                                    <div className="db-list-edit cta-blu-sml dropdown-manage-second text-center">
                                      <span onClick={toggleDropdownSecond}>
                                        Follow Up
                                      </span>
                                      {isOpen && (
                                        <div className="dropdown-second-manage manage-main-drop">
                                          <div className="chhose-date bhbox">
                                            <h4>Select Date</h4>
                                            <label className="manage-check">
                                              <input
                                                type="checkbox"
                                                className="manage-input"
                                                onClick={() =>
                                                  handleDateClick("Today")
                                                }
                                                checked={
                                                  selectedDate === "Today"
                                                }
                                              />
                                              Today
                                            </label>
                                            <label className="manage-check">
                                              <input
                                                type="checkbox"
                                                className="manage-input"
                                                onClick={() =>
                                                  handleDateClick("Tomorrow")
                                                }
                                                checked={
                                                  selectedDate === "Tomorrow"
                                                }
                                              />
                                              Tomorrow
                                            </label>

                                            <select
                                              className="manage-check"
                                              name="selectDate"
                                              onChange={(event) =>
                                                handleTimeChange(event)
                                              }
                                              value={selectedDate}
                                            >
                                              <option value="default">
                                                Pick up date
                                              </option>
                                              {dates.map((dates) => (
                                                <option
                                                  key={dates}
                                                  value={dates}
                                                >
                                                  {dates}
                                                </option>
                                              ))}
                                            </select>
                                          </div>
                                          <div className="choose-time">
                                            <h4>Select Time</h4>
                                            <label className="manage-check">
                                              <input
                                                type="checkbox"
                                                className="manage-input"
                                                onClick={() =>
                                                  handleTimeClick("10 AM")
                                                }
                                                checked={
                                                  selectedTime === "10 AM"
                                                }
                                              />
                                              10 AM
                                            </label>
                                            <label className="manage-check">
                                              <input
                                                type="checkbox"
                                                className="manage-input"
                                                onClick={() =>
                                                  handleTimeClick("2 AM")
                                                }
                                                checked={
                                                  selectedTime === "2 AM"
                                                }
                                              />
                                              2 AM
                                            </label>
                                            <label className="manage-check">
                                              <input
                                                type="checkbox"
                                                className="manage-input"
                                                onClick={() =>
                                                  handleTimeClick("6 AM")
                                                }
                                                checked={
                                                  selectedTime === "6 AM"
                                                }
                                              />
                                              6 AM
                                            </label>

                                            <select
                                              className="manage-check"
                                              name="selectTime"
                                              onChange={(event) =>
                                                handleTimeChange(event)
                                              }
                                              value={selectedTime}
                                            >
                                              <option value="default">
                                                Pick up time
                                              </option>
                                              {hours.map((hour) => (
                                                <option key={hour} value={hour}>
                                                  {hour}
                                                </option>
                                              ))}
                                            </select>
                                            <div className="two-buttons">
                                              <button
                                                className="btn-button-apply btn-button-cancel "
                                                onClick={() => handleCancel()}
                                              >
                                                Cancel
                                              </button>
                                              <button
                                                className="btn-button-apply"
                                                onClick={() => handleApply()}
                                              >
                                                Apply
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    <button
                                      className="db-list-edit cta-blu-sml bg-success"
                                      onClick={() =>
                                        handleFollowUp(
                                          lead.id,
                                          "Deal Completed"
                                        )
                                      }
                                    >
                                      Deal Completed
                                    </button>
                                    <button
                                      className="db-list-edit cta-blu-sml bg-danger"
                                      onClick={() =>
                                        handleFollowUp(
                                          lead.id,
                                          "Not Interested"
                                        )
                                      }
                                    >
                                      Not Interested
                                    </button>
                                    <button
                                      className="db-list-edit cta-blu-sml bg-warning"
                                      onClick={() =>
                                        handleFollowUp(
                                          lead.id,
                                          "Not Contactable"
                                        )
                                      }
                                    >
                                      Not Contactable
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                          <td>
                            <span
                              className={`db-list-rat ${
                                lead.status === "Deal Completed"
                                  ? "bg-success"
                                  : lead.status === "Not Interested"
                                  ? "bg-danger"
                                  : lead.status === "Not Contactable"
                                  ? "bg-warning"
                                  : ""
                              }`}
                              style={{
                                color:
                                  lead.status === "Deal Completed" ||
                                  lead.status === "Not Interested" ||
                                  lead.status === "Not Contactable"
                                    ? "white"
                                    : "inherit",
                              }}
                            >
                              {lead.status}
                            </span>
                          </td>

                          <td>
                            <Link
                              className="db-list-edit"
                              onClick={() => handleDelete(lead.id)}
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead;
