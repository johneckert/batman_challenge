import React from 'react';

const ReportButton = props => {
  const handleClick = event => {
    event.preventDefault();
    props.reportSuspect();
  };

  return (
    <button className="report-button" onClick={handleClick}>
      Report
    </button>
  );
};

export default ReportButton;
