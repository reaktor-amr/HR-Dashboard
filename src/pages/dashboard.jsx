import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OrganizationChallenge from "../component/organizationChallenge";
import LeadBoard from "../component/leadBoard";
import UpcommingEvents from "../component/upcommingEvent";
import ActivityHistory from "../component/activityHistory";

function Dashboard() {
  const percentage = 78;

  return (
    <>
      <h2>Hey Sophia</h2>
      <p>Welcome back to your Wellx Dashboard!</p>
      {/* Dashboard Count */}
      <div className="dashboard-count-details">
        <div className="details-wraper">
          <div className="details-left">
            <p>Total employees on Wellx</p>
            <div>
              <span className="first-count">921</span>
              <span>/1,201</span>
            </div>
            <a href="#">Onboard more employees</a>
          </div>
          <div className="graph">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                pathColor: "#33BF7C",
              })}
            />
          </div>
        </div>
        <div className="details-wraper">
          <div className="details-left">
            <p>Finished challenges</p>
            <div>
              <span className="first-count">12</span>
            </div>
            <a href="#">Onboard more employees</a>
          </div>
        </div>
        <div className="details-wraper">
          <div className="details-left">
            <p>Marketplace redemptions</p>
            <div>
              <span className="first-count">120</span>
              <span>(80%)</span>
            </div>
            <a href="#">Onboard more employees</a>
          </div>
        </div>
      </div>
      {/* List of organization Challeges */}
      <div className="data-row">
        <OrganizationChallenge />
        <LeadBoard />
      </div>
      <div className="data-row">
        <UpcommingEvents />
        <ActivityHistory />
      </div>
    </>
  );
}

export default Dashboard;
