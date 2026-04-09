import fs from "fs";
import zlib from "zlib";

fs.createReadStream("video.mp4")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("video.mp4.gz"))
  .on("close", () => console.log("Архів готовий"));
