import React from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './basemap.css';


import { landingsitejs } from "../../../data/landing_site.js";
import { Iconlanding } from "../../../icon/icons.js";



const Basemap = () => {

    const center = [-2.348536130599332, 29.030562586313135];
    const outerbounds = [
        [-1.431804013910979, 28.732367834895886],
        [-2.6180336297309834, 29.504249223136057],
    ];

    return (

        <MapContainer
            doubleClickZoom={false}
            center={center}
            zoom={12}
            scrollWheelZoom={false}
            minZoom={7}
            maxZoom={14}
            maxBounds={outerbounds}
            maxBoundsViscosity={1.0}
            style={{ height: "100vh", backgroundColor: 'rgb(247, 245, 251)' }}>

            <TileLayer
                url="https://www.alessandromusetta.com/geo/tiles/agathe/kivu/{z}/{x}/{y}.png" />

            {landingsitejs.features.map((feature, index) => {
                return (
                    <Marker
                        key={index}
                        position={L.latLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0])}
                        icon={Iconlanding}>
                    </Marker>
                );
            })}

        </MapContainer>
    )

}

export default Basemap;
