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
// app.get("/video", (req, res) => {
//     res.writeHead(206, {
//         "Content-Type": "bytes",
//     });
//     video.pipe(res);
// });

const mediaserver = new nodeMediaServer(rtmpServer);
mediaserver.run();
app.listen(8001);
