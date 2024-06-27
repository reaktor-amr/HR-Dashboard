import {
  IconCalendar,
  IconChevronLeft,
  IconDownload,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";
import "./challenges.css";

function ChallengeDetails() {
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
      <h2 className="page-heading">Challenges</h2>
      <div className="challenge-details-page-header">
        <div className="challenges-data">
          <IconCalendar className="challenge-data-icon" size={10} />
          <p>12th Jan, 2023 - 12th Feb 2023</p>
          <IconUsers size={10} className="challenge-data-icon" />
          <p>31 Joined</p>
        </div>
        <a href="#" className="header-button add-padding">
          <IconDownload size={17} color="#fff" />
          <p>download Download PDF Leaderboard</p>
        </a>
      </div>
      <div className="challenge-details-row">
        <div className="challenge-count">
          <p>ONBOARDED TO WELLX APP</p>
          <div className="challenge-count-data">
            <span>21</span>
            <p>/40</p>
            <p className="challenge-badge">76%</p>
          </div>
        </div>
        <div className="challenge-count">
          <p>Actively used Wellx APp</p>
          <div className="challenge-count-data">
            <span>19</span>
            <p>/40</p>
            <p className="challenge-badge">55%</p>
          </div>
        </div>
        <div className="challenge-count">
          <p>Actively used Wellx APp</p>
          <div className="challenge-count-data">
            <span>921</span>
            <p>/1,201</p>
            <p className="challenge-badge">75%</p>
          </div>
        </div>
      </div>
      <div className="challenge-details-row">
        <div className="challenge-count gradiant">
          <p>Average steps per Participant</p>
          <div className="challenge-count-data">
            <span>4548</span>
            <p>/day</p>
          </div>
        </div>
        <div className="challenge-count gradiant">
          <p>Average steps per Female Participants</p>
          <div className="challenge-count-data">
            <span>5148</span>
            <p>/day</p>
          </div>
        </div>
        <div className="challenge-count gradiant">
          <p>Actively used Wellx APp</p>
          <div className="challenge-count-data">
            <span>3562</span>
            <p>/day</p>
          </div>
        </div>
      </div>
      <div className="table-wraper">
        <table>
          <thead>
            <tr>
              <th>
                <IconTrophy size={16} color="#575D63" />
              </th>
              <th>Name</th>
              <th>Total Steps</th>
              <th>Consistency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>Micheal Lavelle</td>
              <td>171,990</td>
              <td>7 Days</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>Erica Manssour</td>
              <td>143,495</td>
              <td>10 Days</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>Chris Allen</td>
              <td>91,575</td>
              <td>8 Days</td>
            </tr>
            <tr>
              <td>4th</td>
              <td>Christine Flynn</td>
              <td>65,816</td>
              <td>2 Days</td>
            </tr>
            <tr>
              <td>5th</td>
              <td>Kieran Gardiner</td>
              <td>23,687</td>
              <td>1 Day</td>
            </tr>
            <tr>
              <td>6th</td>
              <td>David Hayes</td>
              <td>3,835</td>
              <td>0 Day</td>
            </tr>
            <tr>
              <td>7th</td>
              <td>Kieran Gardiner</td>
              <td>23,687</td>
              <td>1 Days</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ChallengeDetails;
