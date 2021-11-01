import React from "react";

const ListComponent = () => {
  return (
    <div className="container">
        <h1>Job List</h1>
        <hr />
        <div className="job d-flex justify-content-between">
          <div className="job-list">
            <div className="title-job">Data Engineer</div>
            <div className="job-desc">
              <span className="job-company">Trade Republic - </span>
              <span className="status">Full Time</span>
            </div>
          </div>
          <div className="address">
            <div className="text-end">Berlin</div>
            <div className="text-end">1 day ago</div>
          </div>
        </div>
        <hr />
    </div>
  );
}

export default ListComponent;
