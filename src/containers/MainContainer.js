import React, { Component } from 'react';
import ReportButton from '../components/ReportButton';
import Stats from '../components/Stats';
import MugShot from '../components/MugShot';
import Header from '../components/Header';

class MainContainer extends Component {
  state = {
    mugShot: null,
    status: null,
    image64: null
  };

  recordConverted = userImage => {
    this.setState({ image64: userImage });
  };

  setUserImage = userImage => {
    const api_key = 'f2VmMD7Du-wrkbRrXac1HA';
    const image_contents = userImage;
    console.log('in fetch', image_contents);
    fetch('https://www.headlightlabs.com/api/gcpd_lookup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ api_key, image_contents })
    })
      .then(res => res.json())
      .then(json => this.setState({ mugShot: json }));
  };

  reportSuspect = () => {
    const api_key = 'f2VmMD7Du-wrkbRrXac1HA';
    const image_contents = this.state.image64;
    fetch('https://www.headlightlabs.com/api/gcpd_report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ api_key, image_contents })
    })
      .then(res => res.json())
      .then(json => this.setState({ status: json.status }));
  };

  render() {
    console.log('state', this.state.userImage);
    return (
      <div className="container">
        <Header />
        <MugShot
          mugShot={this.state.mugShot}
          setUserImage={this.setUserImage}
          recordConverted={this.recordConverted}
        />
        <ReportButton reportSuspect={this.reportSuspect} />
        {this.state.mugShot ? (
          <Stats mugShot={this.state.mugShot} status={this.state.status} />
        ) : null}
      </div>
    );
  }
}

export default MainContainer;
