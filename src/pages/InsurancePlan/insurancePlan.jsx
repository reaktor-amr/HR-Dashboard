import { IconCircleFilled, IconPencil } from "@tabler/icons-react";
import "../CensusList/censusList.css";
import "./insurancePlan.css";

function InsurancePlan() {
  return (
    <>
      <div className="challenge-details-page-header">
        <h2 className="page-heading">Insurance Plan</h2>
        <a href="#" className="header-button add-padding">
          <p>Add New Plan</p>
        </a>
      </div>
      <div className="table-wraper census-table">
        <table>
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Status</th>
              <th>Network</th>
              <th>Emirate</th>
              <th>People</th>
              <th>Plan Overview</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cat A</td>
              <td>
                <div className="insurance-badge">
                  <IconCircleFilled
                    size={15}
                    color="#5043ED"
                    className="insurance-active"
                  />
                  <p>Active</p>
                </div>
              </td>
              <td>
                <div className="insurance-badge">
                  <p>NAS</p>
                </div>
              </td>
              <td>
                <div className="insurance-badge">
                  <p>Dubai</p>
                </div>
              </td>
              <td>12 People</td>
              <td>AED 12,123/yr</td>
              <td>
                <IconPencil color="#5043ED" size={20} />
              </td>
            </tr>
            <tr>
              <td>Workers WN/RN3</td>
              <td>
                <div className="draft-badge">
                  <IconCircleFilled
                    size={15}
                    color="#ABB2B5"
                    className="insurance-active"
                  />
                  <p>Draft</p>
                </div>
              </td>
              <td>
                <div className="insurance-badge">
                  <p>NAS</p>
                </div>
              </td>
              <td>
                <div className="insurance-badge">
                  <p>Dubai</p>
                </div>
              </td>
              <td>12 People</td>
              <td>AED 12,123/yr</td>
              <td>
                <IconPencil color="#5043ED" size={20} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default InsurancePlan;
