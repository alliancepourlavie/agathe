import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './basemap.css';



const Marchemap = () => {

    const bagiracenterdesktop = [-2.4967356599999997, 28.847510405999998];
    const bagiracentermobile = [-2.4967356599999997, 28.847510405999998];
    // const outerbounds = [
    //     [-1.431804013910979, 28.732367834895886],
    //     [-2.6180336297309834, 29.504249223136057],
    // ];


    return (

        <><div className='maptext'>LIEUX OU TRAVAILLENT<br />LES PECHEUSES DE BUKAVU<br /></div>

            <div className='bagiramapdesktop'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracenterdesktop}
                    zoom={14}
                    scrollWheelZoom={false}
                    minZoom={14}
                    maxZoom={16}
                    // maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/march/{z}/{x}/{y}.png" />

                </MapContainer>
            </div>

            <div className='bagiramapmobile'>
                <MapContainer
                    doubleClickZoom={false}
                    center={bagiracentermobile}
                    zoom={14}
                    scrollWheelZoom={false}
                    dragging={false}
                    minZoom={14}
                    maxZoom={16}
                    //maxBounds={outerbounds}
                    maxBoundsViscosity={1.0}
                    style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
                    <TileLayer
                        url="https://www.alessandromusetta.com/geo/tiles/agathe/march/{z}/{x}/{y}.png" />

                </MapContainer>
            </div></>
    )

}

export default Marchemap;
