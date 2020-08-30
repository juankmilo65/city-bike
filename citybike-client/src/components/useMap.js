import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

function UseMap({ properties }) {
    const [activePopUp, setActivePopUp] = useState(null);
    const [lat, setLat] = useState(25.761681);
    const [lng, setLng] = useState(-80.191788);
    const [zoom, setZoom] = useState(13);
    const [icon, setIcon] = useState(new Icon({
        iconUrl: "bike1.png",
        iconSize: [25, 25]
    }));

    return (
        <div className="map">
            <h1> City Bikes in Miami </h1>
            <Map center={[lat, lng]} zoom={zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {properties &&
                    properties.network.stations.length > 0 &&
                    properties.network.stations.map(station => (
                        <Marker
                            key={station.id}
                            position={[station.latitude, station.longitude]}
                            icon={icon}
                            onClick={() => { setActivePopUp(station) }}
                        >

                        </Marker>
                    ))
                }
                {activePopUp && (
                    <Popup
                        position={[
                            activePopUp.latitude,
                            activePopUp.longitude
                        ]}
                        onClose={() => {
                            setActivePopUp(null);
                        }}
                    >
                        <div>
                            <h2>{`Station: ${activePopUp.name}`}</h2>
                            <p>{`${activePopUp.free_bikes} Bikes avilable`}</p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    )
}

export default UseMap;