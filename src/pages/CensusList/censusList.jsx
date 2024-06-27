import { IconPencil, IconSearch } from "@tabler/icons-react";
import "./censusList.css";

function CensusList() {
  return (
    <>
      <div className="challenge-details-page-header">
        <h2 className="page-heading">Census List</h2>
        <div className="header-right">
          <div className="searchbox-icon">
            <IconSearch className="search-icon" size={20} color="#818A8F" />
            <input type="text" placeholder="Search from Census List" />
          </div>
          <a href="#" className="header-button add-padding">
            <p>Add New Person</p>
          </a>
        </div>
      </div>
      <div className="table-wraper census-table">
        <table>
          <thead>
            <tr>
              {/* <th>
                <IconTrophy size={16} color="#575D63" />
              </th> */}
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Status</th>
              <th>Emirate</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
            <tr>
              <td>John Deo</td>
              <td>1998/03/10</td>
              <td>
                <div className="table-badge">
                  <p>Male</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Married</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Employee</p>
                </div>
              </td>
              <td>
                <div className="table-badge">
                  <p>Abu Dhabi</p>
                </div>
              </td>
              <td>
                <div className="census-edit">
                  <div className="table-badge">
                    <p>C-Level</p>
                  </div>
                  <IconPencil color="#5043ED" size={20} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CensusList;
