import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("data", () => {
  throw new Error("Handler crashed");
});

// emitter.on("data", () => {
//   try {
//     // Потенційно небезпечний код
//     throw new Error("Handler crashed");
//   } catch (err) {
//     console.error("Failed to process data:", err.message);
//   }
// });

emitter.on("error", (err) => {
  console.log("This will NOT catch the handler error");
});

emitter.emit("data"); // Процес впаде з необробленим винятком
