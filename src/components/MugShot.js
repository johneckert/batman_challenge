import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const MugShot = props => {
  const onDrop = acceptedFile => {
    //convert image to base 64
    const reader = new FileReader();
    reader.onload = () => {
      const imgBase64 = reader.result;
      props.setUserImage(imgBase64);
    };
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');

    reader.readAsDataURL(acceptedFile[0]);
  };

  return (
    <div>
      {props.mugShot ? (
        <img className="mugshot" src={props.mugShot.location} alt="mug shot" />
      ) : (
        <Dropzone multiple={false} accept="image/*" onDrop={onDrop}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
      )}
    </div>
  );
};

export default MugShot;
