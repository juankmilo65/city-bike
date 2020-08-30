import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, icon } from "leaflet";



function App() {
  const [activePopUp, setActivePopUp] = useState(null);
  const [response, setResponse] = useState(null);
  const [endpoint, setEndpoint] = useState("http://127.0.0.1:4001");
  const [lat, setLat] = useState(25.761681);
  const [lng, setLng] = useState(-80.191788);
  const [zoom, setZoom] = useState(13);
  const [icon, setIcon] = useState(new Icon({
    iconUrl: "bike1.png",
    iconSize: [25, 25]
  }));

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("CityBikesData", data => setResponse(data));
  }, []);

  return (
    <div className="map">
      <h1> City Bikes in Miami </h1>
      <Map center={[lat, lng]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {response &&
          response.network.stations.map(station => (
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
              <h2>{activePopUp.name}</h2>
              <p>{activePopUp.free_bikes}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       response: false,
//       endpoint: "http://127.0.0.1:4001",
//       lat: 25.761681,
//       lng: -80.191788,
//       zoom: 13
//     };

//   }
//   componentDidMount() {
//     const { endpoint } = this.state;
//     const socket = socketIOClient(endpoint);
//     socket.on("CityBikesData", data => this.setState({ response: data }));

//   }
//   render() {
//     const { response } = this.state;
//     const position = [this.state.lat, this.state.lng];

//     const icon = new Icon({
//       iconUrl: "bike1.png",
//       iconSize: [25, 25]
//     });

//     console.log(response)
//     return (
//       <div>
//         {response &&
//           <div className="map">

//             <h1> City Bikes in Miami </h1>
//             <Map center={position} zoom={this.state.zoom}>
//               <TileLayer
//                 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               {response.network.stations.map(station => (
//                 <Marker
//                   key={station.id}
//                   position={[station.latitude, station.longitude]}
//                   icon={icon}
//                 >

//                 </Marker>
//               ))
//               }
//             </Map>

//           </div>
//         }
//       </div>
//     );
//   }
// }
// export default App;
