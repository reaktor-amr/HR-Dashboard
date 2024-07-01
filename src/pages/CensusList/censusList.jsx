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
            {USERS.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.dateOfBirth}</td>
                <td>
                  <div className="table-badge">
                    <p>{user.gender}</p>
                  </div>
                </td>
                <td>
                  <div className="table-badge">
                    <p>{user.maritalStatus}</p>
                  </div>
                </td>
                <td>
                  <div className="table-badge">
                    <p>{user.status}</p>
                  </div>
                </td>
                <td>
                  <div className="table-badge">
                    <p>{user.emirate}</p>
                  </div>
                </td>
                <td>
                  <div className="census-edit">
                    <div className="table-badge">
                      <p>{user.category}</p>
                    </div>
                    <IconPencil color="#5043ED" size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CensusList;


const USERS = [
  {
    name: "John Doe",
    dateOfBirth: "1998/03/10",
    gender: "Male",
    maritalStatus: "Married",
    status: "Employee",
    emirate: "Abu Dhabi",
    category: "C-Level"
  },
  {
    name: "John Doe",
    dateOfBirth: "1998/03/10",
    gender: "Male",
    maritalStatus: "Married",
    status: "Employee",
    emirate: "Abu Dhabi",
    category: "C-Level"
  },
  {
    name: "John Doe",
    dateOfBirth: "1998/03/10",
    gender: "Male",
    maritalStatus: "Married",
    status: "Employee",
    emirate: "Abu Dhabi",
    category: "C-Level"
  },
  {
    name: "John Doe",
    dateOfBirth: "1998/03/10",
    gender: "Male",
    maritalStatus: "Married",
    status: "Employee",
    emirate: "Abu Dhabi",
    category: "C-Level"
  }
]