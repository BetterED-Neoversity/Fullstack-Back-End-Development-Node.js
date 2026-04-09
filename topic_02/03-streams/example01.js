import fs from "fs/promises";
import zlib from "zlib";
import { promisify } from "util";

const content = await fs.readFile("video.mp4");
const compressed = await promisify(zlib.gzip)(content);
await fs.writeFile("video.mp4.gz", compressed);
