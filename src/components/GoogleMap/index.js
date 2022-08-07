import React from 'react';
import GoogleMapReact from 'google-map-react';



const LocationPin = ({ text }) => (
    <div className="pin">
      <i class="bi bi-geo-alt-fill"></i>
      <p className="pin-text">{text}</p>
    </div>
  )

function index({location, zoomLevel}) {
  return (
    <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}  //Input Your API Key Here...
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
  )
}

export default index;
