import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './basemap.css';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';



const Glissement = () => {

  const bagiracenterdesktop = [-2.484466396535908, 28.861391746938576];
  const bagiracentermobile = [-2.4824846362436275, 28.844504104387376];
  const outerbounds = [
    [-2.458272629736455, 28.825904706591405],
    [-2.5045938340467044, 28.86132927744624],
  ];

  const [open, setOpen] = React.useState(false)


  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleCloseNote = () => setOpen(false);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )


  return (

    <>
      <div className='bagiramapdesktop'>
        <MapContainer
          doubleClickZoom={false}
          center={bagiracenterdesktop}
          zoom={15}
          scrollWheelZoom={false}
          minZoom={12}
          maxZoom={17}
          maxBounds={outerbounds}
          maxBoundsViscosity={1.0}
          style={{ height: "50vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
          <TileLayer
            url="https://www.alessandromusetta.com/geo/tiles/agathe/glissment/{z}/{x}/{y}.png" />
          <ZoomControl position="bottomright" />

        </MapContainer>
      </div>

      <div className='bagiramapmobile'>
        <MapContainer
          doubleClickZoom={false}
          center={bagiracentermobile}
          zoom={14}
          scrollWheelZoom={false}
          dragging={false}
          minZoom={12}
          maxZoom={17}
          maxBounds={outerbounds}
          maxBoundsViscosity={1.0}
          style={{ height: "90vh", backgroundColor: 'rgb(247, 245, 251)', background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 49%, rgba(0, 0, 0, 0.03) 50%, rgba(0, 0, 0, 0.01) 51%, rgba(0, 0, 0, 0) 100%)' }}>
          <TileLayer
            url="https://www.alessandromusetta.com/geo/tiles/agathe/glissment/{z}/{x}/{y}.png" />
          <ZoomControl position="bottomright" />

        </MapContainer>
      </div></>
  )

}

export default Glissement;
