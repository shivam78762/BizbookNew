import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../Assets/blogs/blog5.webp";

const EventData = () => {
  const eventData = [
    {
      date: "18 Mar",
      eventName: "Surfing Competition Hawaii",
      location: "4754 Grove Avenue, Hawaii",
      imageSrc: blog1,
    },
    {
      date: "18 Jan",
      eventName: "Food eating challenge",
      location: "1297 Stuart Street, Pennsylvania",
      imageSrc: blog1,
    },
    {
      date: "18 Jan",
      eventName: "College Volley Ball Tournaments 2021",
      location: "Lynn B Morgan, Garden City, New York",
      imageSrc: blog1,
    },
    {
      date: "25 Jan",
      eventName: "States Soccer World Cup 2022",
      location: "2826 Lamberts Branch Road, Miami, Florida",
      imageSrc: blog1,
    },
  ];
  return (
    <div>
      <ul>
        {eventData.map((event, index) => (
          <li key={index}>
            <div className="event-box">
              <div>
                <img src={event.imageSrc} alt={event.eventName} />
              </div>
              <div>
                <span>{event.date}</span>
                <h2>{event.eventName}</h2>
                <p>{event.location}</p>
              </div>
              <Link to='/events' className="fclick">
                &nbsp;
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventData;
