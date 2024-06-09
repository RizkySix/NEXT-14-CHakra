
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -8.4647249,
  lng: 115.2761798
};

const location = {
  lat: -8.4647249,
  lng: 115.2761798
};

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -80
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "hue": "#00ffee"
      },
      {
        "saturation": 50
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  }
];

function Map() {
  return (
   <>
    <LoadScript
       googleMapsApiKey="token here"
    >
        <div className="flex flex-col items-center">
              <h1 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">OUR LOCATION</h1>
              <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-xl">
              Discover our shop offering a wide range of high quality jewellery, located in strategic Ubud locations.
              </p>
              <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom" className="w-full max-w-full px-0 lg:px-11">
              <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={{ styles: mapStyles }}
      >
        <Marker position={location} />
      </GoogleMap>
              </div>
            </div>
    
    </LoadScript>
    </>
  )
}



export default React.memo(Map);
