import React from 'react';

const Stats = props => {
  return (
    <div className="stats">
      <ul>
        <li>
          <span className="label">Suspect: </span>
          <span className="data">{props.mugShot.closest_match}</span>
        </li>
        <li>
          <span className="label">Probability: </span>
          <span className="data">{props.mugShot.percent_match}%</span>
        </li>
        {props.status ? <li className="status">{props.status}</li> : null}
      </ul>
    </div>
  );
};

export default Stats;
