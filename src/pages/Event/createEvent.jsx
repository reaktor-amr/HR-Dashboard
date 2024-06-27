import { IconChevronLeft } from "@tabler/icons-react";
import "../challenges/challenges.css";

function CreateEvent() {
  return (
    <>
      <a href="/" className="navigation">
        <IconChevronLeft
          className="navigation-icon"
          size={14}
          color="#5043ED"
        />
        <p>Go back</p>
      </a>
      <h2 className="page-heading">Create a event</h2>
      <div className="form-card">
        <div className="form-left">
          <form action="">
            <div className="form-control">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-control">
              <label htmlFor="">Description</label>
              <textarea name="" id="" placeholder="Description"></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Cover Image</label>
              <input type="file" />
            </div>
            <div className="form-row">
              <div className="form-control">
                <label htmlFor="">When does the event start</label>
                <input type="date" />
              </div>
              <div className="form-control">
                <label htmlFor="">Duration of the event</label>
                <input type="date" />
              </div>
            </div>
          </form>
        </div>
        <div className="form-right">
          <div className="form-control">
            <label htmlFor="">Event type</label>
            <select name="" id="">
              <option value="">Blood Test</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Event Location</label>
            <textarea name="" id="" placeholder="Location"></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="">Mandatory or sign-up</label>
            <input type="number" placeholder="Mandatory" />
          </div>
          <div className="form-button">
            <p>Create Event</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
