"use client";
import Map, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from "react";
export default function MyMap({ latitude, longitude }: { latitude: number, longitude: number }) {
    const [lng, setLng] = useState<number>(longitude);
    const [lat, setLat] = useState<number>(latitude);
    const [zoom, setZoom] = useState<number>(16);
    console.log(`Lng: ${lng}, Lat: ${lat}`);
    return (

        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!}
            initialViewState={{
                longitude: lng,
                latitude: lat,
                zoom: zoom,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"

        >
            <Marker longitude={lng} latitude={lat} anchor='bottom' color="red" />
        </Map>
    )
}