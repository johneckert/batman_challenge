import React, { Component } from 'react';
import ReportButton from '../components/ReportButton';
import Stats from '../components/Stats';
import MugShot from '../components/MugShot';

class MainContainer extends Component {
  state = {
    mugShot: null
  };

  setUserImage = userImage => {
    const api_key = 'f2VmMD7Du-wrkbRrXac1HA';
    const image_contents = userImage;
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

  render() {
    console.log('state', this.state.userImage);
    return (
      <div>
        MAin Container
        <MugShot mugShot={this.state.mugShot} setUserImage={this.setUserImage} />
        <ReportButton />
        {this.state.mugShot ? <Stats mugShot={this.state.mugShot} /> : null}
      </div>
    );
  }
}

export default MainContainer;
