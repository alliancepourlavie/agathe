import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import landing from './canoe.svg';



const iconlanding = new L.Icon({
    iconUrl: landing,
    iconRetinaUrl: landing,
    iconAnchor: [3, 3],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [6,6],
});

export { iconlanding };

