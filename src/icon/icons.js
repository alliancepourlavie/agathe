import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import landing from './canoe.svg';



const iconlanding = new L.Icon({
    iconUrl: landing,
    iconRetinaUrl: landing,
    iconAnchor: [4, 4],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [8,8],
});

export { iconlanding };

