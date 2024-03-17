import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import landing from './canoe.svg';
import chem from './chemical.svg';
import plast from './plastic.svg';
import roc from './rock.svg';
import shit from './shit.svg';


const Iconlanding = new L.Icon({
    iconUrl: landing,
    iconRetinaUrl: landing,
    iconAnchor: [3, 3],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [6,6],
});

export { Iconlanding };

const Iconchemical = new L.Icon({
    iconUrl: chem,
    iconRetinaUrl: chem,
    iconAnchor: [15, 15],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,30],
});

export { Iconchemical };

const Iconrock = new L.Icon({
    iconUrl: roc,
    iconRetinaUrl: roc,
    iconAnchor: [15, 15],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,30],
});

export { Iconrock };

const Iconplastic = new L.Icon({
    iconUrl: plast,
    iconRetinaUrl: plast,
    iconAnchor: [15, 15],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,30],
});

export { Iconplastic };

const Iconshit = new L.Icon({
    iconUrl: shit,
    iconRetinaUrl: shit,
    iconAnchor: [15, 15],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,30],
});

export { Iconshit };
