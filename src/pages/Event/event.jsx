import {
  IconCalendar,
  IconChevronRight,
  IconCircleCheckFilled,
  IconClock,
  IconPencil,
  IconUsers,
} from "@tabler/icons-react";
import "../CensusList/censusList.css";
import "../challenges/challenges.css";
import "./event.css";
function Event() {
  return (
    <>
      <div className="challenge-details-page-header">
        <h2 className="page-heading">Wellx events/programmes</h2>
        <div className="header-right">
          <a href="/create-event" className="header-button add-padding">
            <p>New Event</p>
          </a>
        </div>
      </div>
      <div className="challenges-wraper">
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconClock className="float-top-icon" size={15} color="#33BF7C" />
              <p className="item-active">Upcomming</p>
            </div>
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/aeb6qmmxzgrlg3lbgjey.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>Managing the Unimaginable</h2>
            <div className="challenges-data">
              <IconCalendar className="icon-decoration" size={10} />
              <p>15th Jan at 10:30 AM</p>
            </div>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconClock className="float-top-icon" size={15} color="#33BF7C" />
              <p className="item-active">Upcomming</p>
            </div>
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/aeb6qmmxzgrlg3lbgjey.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>Managing the Unimaginable</h2>
            <div className="challenges-data">
              <IconCalendar className="icon-decoration" size={10} />
              <p>15th Jan at 10:30 AM</p>
            </div>
          </div>

          <div className="event-button fill-btn-bg">
            <p>Enable programme</p>
            <IconChevronRight color="#fff" size={17} />
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconClock className="float-top-icon" size={15} color="#33BF7C" />
              <p className="item-active">Upcomming</p>
            </div>
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/aeb6qmmxzgrlg3lbgjey.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>Managing the Unimaginable</h2>
            <div className="challenges-data">
              <IconCalendar className="icon-decoration" size={10} />
              <p>15th Jan at 10:30 AM</p>
            </div>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
      </div>
      <h2 className="page-heading">Online programmes</h2>
      <div className="challenges-wraper">
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#ABB2B5"
              />
              <p className="item-active offline">Offline</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#33BF7C"
              />
              <p className="item-active">Active</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button fill-btn-bg">
            <p>Enable programme</p>
            <IconChevronRight color="#fff" size={17} />
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#33BF7C"
              />
              <p className="item-active">Active</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#33BF7C"
              />
              <p className="item-active">Active</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#33BF7C"
              />
              <p className="item-active">Active</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
        <a href="#" className="challenges">
          <div className="challenges-img">
            <div className="float-top">
              <IconCircleCheckFilled
                className="float-top-icon"
                size={15}
                color="#33BF7C"
              />
              <p className="item-active">Active</p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg"
              alt=""
            />
          </div>

          <div className="challenges-content">
            <h2>21 days of mindfulness</h2>
            <p>
              Helping desk-bound employees take care of their back, and prevent
              any permanent damages to it.
            </p>
          </div>

          <div className="event-button">
            <IconPencil color="#5043ED" size={17} />
            <p>Edit programme</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Event;
