'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, HeatmapLayer, Marker } from '@react-google-maps/api';
import { habitatEntry } from '@/server/data';

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

export default function GoogleMapComponent({habitatData, showHabitats}: {habitatData: habitatEntry[], showHabitats: boolean}) {
  const [heatmapData, setHeatMapData] = useState<any[]>([]);

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
        {showHabitats && habitatData.map((current) => {
          return (
            <Marker position={{lat: current.latitude, lng: current.longitude}} />
          )
        })}
      </GoogleMap>
    </LoadScript>
  );
};
