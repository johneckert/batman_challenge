import React, { Component } from 'react';
import ReportButton from '../components/ReportButton';
import UploadButton from '../components/UploadButton';
import MugShot from '../components/MugShot';

class MainContainer extends Component {
  render() {
    return (
      <div>
        MAin Container
        <MugShot />
        <UploadButton />
        <ReportButton />
        <div> Response </div>
      </div>
    );
  }
}

export default MainContainer;
