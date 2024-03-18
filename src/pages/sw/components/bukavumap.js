import React from 'react';
import { MapContainer, TileLayer, Marker,  Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './basemap.css';

import { plasticjs } from "../../../data/plastic.js";
import { toxicjs } from "../../../data/toxic.js";
import { rockjs } from "../../../data/rock.js";
import { poojs } from "../../../data/poo.js";

import { Iconchemical } from "../../../icon/icons.js";
import { Iconplastic } from "../../../icon/icons.js";
import { Iconrock } from "../../../icon/icons.js";
import { Iconshit } from "../../../icon/icons.js";


const Bukavumap = () => {

    const bagiracenterdesktop = [-2.484466396535908, 28.861391746938576];
    const bagiracentermobile = [-2.4824846362436275, 28.844504104387376];
    const outerbounds = [
        [-2.458272629736455, 28.825904706591405],
        [-2.5045938340467044, 28.86132927744624],
    ];

    return (

        <><div className='maptext'>SOURCES DE<br />CONTAMINATION DE L'EAU<br /></div>

            <div className='bagiramapdesktop'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracenterdesktop}
                    zoom={15}
                    scrollWheelZoom={false}
                    minZoom={14}
                    maxZoom={17}
                    maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/bukavu/{z}/{x}/{y}.png" />

                    {plasticjs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconplastic}>
                                <Popup>
                                    <p>DÉBRIS DE PLASTIQUE</p>
                                </Popup>
                            </Marker>
                        );
                    })}

                    {toxicjs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconchemical}>
                                <Popup>
                                    <p>CONTAMINANTS CHIMIQUES</p>
                                </Popup>
                            </Marker>
                        );
                    })}

                    {rockjs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconrock}>
                                <Popup>
                                    <p>REMBLAYAGE NON AUTORISÉ DE TERRE ET ROCHES</p>
                                </Popup>
                            </Marker>
                        );
                    })}

                    {poojs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconshit}>
                                <Popup>
                                    <p>EAUX USÉES ET MATIÈRES FÉCALES</p>
                                </Popup>
                            </Marker>
                        );
                    })}

                </MapContainer>
            </div>

            <div className='bagiramapmobile'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracentermobile}
                    zoom={15}
                    scrollWheelZoom={false}
                    dragging={false}
                    minZoom={14}
                    maxZoom={17}
                    maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/bukavu/{z}/{x}/{y}.png" />

                    {plasticjs.features.map((feature, index) => {
                        return (
                            <Marker
                                key={index}
                                position={L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])}
                                icon={Iconchemical}>
                            </Marker>
                        );
                    })}

                </MapContainer>
            </div></>
    )

}

export default Bukavumap;
