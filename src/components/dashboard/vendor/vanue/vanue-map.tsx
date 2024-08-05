/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-unresolved */
'use client';

import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

const LocationMarker = ({ position, setPosition }) => {
  const mapIcon = L.icon({
    iconUrl: '/svg/mappin.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position ? (
    <Marker position={position} icon={mapIcon}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
};

const VanueMaps = ({ position, setPosition }) => {
  return (
    <MapContainer
      center={position || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className="relative z-0 aspect-video w-full object-cover">
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Sportify</a>'
      />
      <LocationMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};

export default VanueMaps;
