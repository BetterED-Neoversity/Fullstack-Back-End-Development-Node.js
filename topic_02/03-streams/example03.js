import fs from "fs";

const write = fs.createWriteStream("output.txt");

write.write("Перший рядок\n");
write.write("Другий рядок\n");
write.end("Останній рядок\n");

write.on("finish", () => {
  console.log("Все записано на диск");
});

write.on("error", (err) => {
  console.error("Помилка запису:", err.message);
});
