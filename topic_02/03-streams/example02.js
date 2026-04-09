import fs from "fs";

const read = fs.createReadStream("access.log", { encoding: "utf8" });

read.on("data", (chunk) => {
  process.stdout.write(chunk);
});

read.on("end", () => {
  console.log("\n--- файл прочитано ---");
});

read.on("error", (err) => {
  console.error("Помилка:", err.message);
});
