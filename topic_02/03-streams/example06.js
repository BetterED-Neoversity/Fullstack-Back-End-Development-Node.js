import fs from "fs";

const stream = fs.createReadStream("access.log", {
  encoding: "utf8",
  highWaterMark: 1024,
});

try {
  let totalBytes = 0;

  for await (const chunk of stream) {
    totalBytes += chunk.length;
    process.stdout.write(chunk);
  }

  console.log(`\nПрочитано байтів: ${totalBytes}`);
} catch (err) {
  console.error("Помилка:", err.message);
}
