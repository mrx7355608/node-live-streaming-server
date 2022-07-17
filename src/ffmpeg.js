const fmpeg = require("fluent-ffmpeg");

let video = fmpeg(`rtmp://localhost:1234/live/STREAM_NAME`, { timeout: 432000 })
    .addOptions([
        "-c:v libx264",
        "-c:a aac",
        "-ac 1",
        "-strict -2",
        "-crf 18",
        "-profile:v baseline",
        "-maxrate 400k",
        "-bufsize 1835k",
        "-pix_fmt yuv420p",
        "-hls_time 10",
        "-hls_list_size 6",
        "-start_number 1",
        "-f hls",
    ])
    .pipe();

module.exports = video;
