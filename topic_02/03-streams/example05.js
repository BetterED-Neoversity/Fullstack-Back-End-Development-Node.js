import { pipeline } from "stream/promises";
import fs from "fs";
import zlib from "zlib";

try {
  await pipeline(
    fs.createReadStream("video.mp4"),
    zlib.createGzip(),
    fs.createWriteStream("video.mp4.gz"),
  );
  console.log("Архів готовий");
} catch (err) {
  console.error("Помилка:", err.message);
}
