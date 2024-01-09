import React from 'react';
import { MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';



const Basemap = () => {

const center = [-1.9776227888273463, 29.102845386271525];
// const outerbounds = [
//     [2.136824494833693, 31.227494204047687],
//     [2.2881290545168738, 31.3459771527601],
// ];

return (

    <MapContainer
        doubleClickZoom={false}
        center={center}
        zoom={10}
        // scrollWheelZoom={false}
        scrollWheelZoom={true}
        minZoom={7}
        maxZoom={14}
        // maxBounds={outerbounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100vh", backgroundColor: 'rgb(247, 245, 251)' }}>

        <TileLayer
            url="https://www.alessandromusetta.com/geo/tiles/agathe/kivu/{z}/{x}/{y}.png" />

    </MapContainer>
)

}

export default Basemap;
