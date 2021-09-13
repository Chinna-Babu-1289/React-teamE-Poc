import React from "react";

const Profile = () => {
  let empName = "Robert";
  let empId = "2093664";
  let empRole = "Developer";
  let empBaseLoc = "India";
  let empProjectLoc = "Australia";
  let empProject = "Customer Ltd.Pvt";

  return (
    <>
      <div className="container">
        <div className="row profile">
          <div className="emp-details">
            <div className="emp-name">{empName}</div>
            <div className="emp-id">{empId}</div>
            <div className="emp-role">{empRole}</div>
            <div className="emp-baseLoc">{empBaseLoc}</div>
            <div className="emp-project">{empProject}</div>
            <div className="emp-projectLoc">{empProjectLoc}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
