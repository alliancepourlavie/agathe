import React from 'react';
import { MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './basemap.css';



const Basemap = () => {

const center = [-1.9776227888273463, 29.102845386271525];
const outerbounds = [
    [-1.431804013910979, 28.732367834895886],
    [-2.6180336297309834, 29.504249223136057],
];

return (

    <MapContainer
        doubleClickZoom={false}
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        minZoom={7}
        maxZoom={14}
        maxBounds={outerbounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100vh", backgroundColor: 'rgb(247, 245, 251)' }}>

        <TileLayer
            url="https://www.alessandromusetta.com/geo/tiles/agathe/kivu/{z}/{x}/{y}.png" />

    </MapContainer>
)

}

export default Basemap;
