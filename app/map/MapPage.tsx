'use client'
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 54.465217,
  lng: -2.866064
};

const UK_BOUNDS = {
  north: 60.8546,
  south: 49.7238, // Decreased value to show more of the sea
  west: -9.6636,
  east: 2.6881
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY??""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        options={{
          restriction: {
            latLngBounds: UK_BOUNDS,
            strictBounds: false
          }
        }}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
