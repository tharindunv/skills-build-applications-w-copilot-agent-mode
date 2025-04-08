import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://legendary-space-parakeet-g46qvp4vx6pv39gx6-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.name}</td>
              <td>{activity.duration}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
