'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, HeatmapLayer, Marker } from '@react-google-maps/api';
import { groundLevelEntry, habitatEntry } from '@/server/data';
import {HeatmapLayerF, MarkerF} from '@react-google-maps/api';

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

export default function GoogleMapComponent({habitatData, showHabitats, heatmapInitialData}: {habitatData: habitatEntry[], showHabitats: boolean, heatmapInitialData: groundLevelEntry[]}) {
  const [heatmapData, setHeatMapData] = useState<any[]>([]);
  const [heatmap, setHeatMap] = useState(<></>);

  useEffect(() => {
    setHeatMap(<HeatmapLayer data={heatmapInitialData.map((current) => {
      return {location: new window.google.maps.LatLng(current.y, current.x), weight: current.w}
    })} />)
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY??""} libraries={["visualization"]}>
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
        {heatmap}
      </GoogleMap>
    </LoadScript>
  );
};
