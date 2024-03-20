import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './basemap.css';


import { landingsitejs } from "../../../data/landing_site.js";
import { Iconlanding } from "../../../icon/icons.js";



const Basemap = () => {

    const bagiracenterdesktop = [-2.42225845534009, 28.98585211433215];
    const bagiracentermobile = [-2.452313904936086, 28.861719874473227];
    const outerbounds = [
        [-1.431804013910979, 28.732367834895886],
        [-2.6180336297309834, 29.504249223136057],
    ];

    const bagira = [-2.481882127634906, 28.842175394455065]
    const kadutu = [-2.4923069203619495, 28.849800601841874]
    const fillBagira = { fillColor: 'rgba(114, 114, 114, 0)', color: '#7f473b', weight: 8 }
    const fillKadutu = { fillColor: 'rgba(223, 143, 68, 0)', color: '#df8f44', weight: 8 }

    return (

        <><div className='maptext'>KADUTU ET BAGIRA<br />SITES DE DEBARQUEMENT<br /></div>

            <div className='bagiramapdesktop'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracenterdesktop}
                    zoom={12}
                    scrollWheelZoom={false}
                    minZoom={7}
                    maxZoom={14}
                    maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/kivu/{z}/{x}/{y}.png" />

                    {landingsitejs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconlanding}>
                            </Marker>
                        );
                    })}

                    <CircleMarker center={kadutu} pathOptions={fillKadutu} radius={15}>
                        <Popup>KADUTU</Popup>
                    </CircleMarker>
                    <CircleMarker center={bagira} pathOptions={fillBagira} radius={15}>
                        <Popup>BAGIRA</Popup>
                    </CircleMarker>

                </MapContainer>
            </div>

            <div className='bagiramapmobile'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracentermobile}
                    zoom={12}
                    scrollWheelZoom={false}
                    dragging={false}
                    minZoom={7}
                    maxZoom={14}
                    maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/kivu/{z}/{x}/{y}.png" />

                    {landingsitejs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconlanding}>
                            </Marker>
                        );
                    })}

                    <CircleMarker center={kadutu} pathOptions={fillKadutu} radius={12}>
                        <Popup>KADUTU</Popup>
                    </CircleMarker>
                    <CircleMarker center={bagira} pathOptions={fillBagira} radius={12}>
                        <Popup>BAGIRA</Popup>
                    </CircleMarker>

                </MapContainer>
            </div></>
    )

}

export default Basemap;
