const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const citybikeurl = "http://api.citybik.es/v2/networks/decobike-miami-beach"
const cors = require("cors");

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();

app.use(cors());
app.use(index);

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
let interval;

const getApi = async socket => {
  try {
    const response = await axios.get(citybikeurl);
    socket.emit("CityBikesData", response.data);
    console.log("Called")
  }
  catch (error) {
    console.log(`Error trying ${error} to consume the API`);
  }
}

io.on("connection", socket => {
  var socketId = socket.id;
  var clientIp = socket.request.connection.remoteAddress;

  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => getApi(socket), 10000);

  console.log('New connection ' + socketId + ' from ' + clientIp);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});



server.listen(port, () => console.log(`Listening on port ${port}`));



