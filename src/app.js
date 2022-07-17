const nodeMediaServer = require("node-media-server");
const express = require("express");
const path = require("path");
const rtmpServer = require("./config/rtmpServer_config");
// const video = require("./ffmpeg");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const mediaserver = new nodeMediaServer(rtmpServer);
mediaserver.run();
app.listen(8001, () => console.log("express server started on port 8001"));
