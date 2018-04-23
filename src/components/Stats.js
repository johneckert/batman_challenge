import React, { Component } from 'react';

const Stats = props => {
  return (
    <div>
      <ul>
        <li>
          <span className="label">Suspect: </span>
          <span className="data">{props.mugShot.closest_match}</span>
        </li>
        <li>
          <span className="label">Probability: </span>
          <span className="data">{props.mugShot.percent_match}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
