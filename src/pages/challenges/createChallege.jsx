import { IconChevronLeft } from "@tabler/icons-react";
import "./challenges.css";

function CreateChallenges() {
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
      <h2 className="page-heading">Create a challenge</h2>
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
                <label htmlFor="">Start Date</label>
                <input type="date" />
              </div>
              <div className="form-control">
                <label htmlFor="">End Date</label>
                <input type="date" />
              </div>
            </div>
          </form>
        </div>
        <div className="form-right">
          <div className="form-control">
            <label htmlFor="">Type of challenge</label>
            <select name="" id="">
              <option value="">Steps</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Challege Setting</label>
            <select name="" id="">
              <option value="">Steps</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Daily Target</label>
            <input type="number" placeholder="10,000 Steps" />
          </div>
          <div className="form-button">
            <p>Create Challenge</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateChallenges;
