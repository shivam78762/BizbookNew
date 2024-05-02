import React from "react";
import Left from "./Left";
import Right from "./right";
import { Link } from "react-router-dom";

const Event = () => {
  const eventData = [
    {
      id: 1,
      eventName: "CHAMPIONS OF INDIA RUN-RIDE-WALK",
      startDate: "12, Mar 2021",
      endDate: "21, Mar 2021",
      views: 8,
    },
    {
      id: 2,
      eventName: "INDIA VS ENGLAND",
      startDate: "11, Mar 2021",
      endDate: "12, Mar 2021",
      views: 9,
    },
    {
      id: 3,
      eventName: "IPL 2021",
      startDate: "21, Feb 2021",
      endDate: "11, Apr 2021",
      views: 8,
    },
    {
      id: 4,
      eventName: "27 Health and Nutrition Tips",
      startDate: "09, Apr 2020",
      endDate: "17, Apr 2020",
      views: 9,
    },
    {
      id: 5,
      eventName: "Digital Marketing Seminar 2020",
      startDate: "26, Mar 2020",
      endDate: "27, Mar 2020",
      views: 9,
    },
  ];

  return (
    <div>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">All Events</span>
              <div className="ud-cen-s2">
                <h2>Event Details</h2>
                <Link to="create-new-event" className="db-tit-btn">
                  Add new Event
                </Link>
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Event Name</th>
                      <th>Event Date</th>
                      <th>Views</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map over eventData array */}
                    {eventData.map((event, index) => (
                      <tr key={event.id}>
                        <td>{index + 1}</td>
                        <td>
                          {event.eventName} <span>{event.startDate}</span>
                        </td>
                        <td>{event.endDate}</td>
                        <td>
                          <span className="db-list-rat">{event.views}</span>
                        </td>
                        <td>
                          <Link
                            to={`edit-event/${event.id}`}
                            className="db-list-edit"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <Link to="#" className="db-list-edit">
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`event-details/${event.id}`}
                            className="db-list-edit"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Preview
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
