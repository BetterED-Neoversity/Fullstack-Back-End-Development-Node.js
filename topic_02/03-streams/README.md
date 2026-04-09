# 03-streams

Базові приклади потокової обробки даних у Node.js: читання, запис, пайплайни та робота з бінарним контентом.

## Файли прикладів

- [`example01.js`](./example01.js) - читання `video.mp4` цілим файлом через `fs/promises.readFile`, стиснення через `zlib.gzip` + `promisify`, запис у `video.mp4.gz`. Буферний підхід — без стрімів.
- [`example02.js`](./example02.js) - читання зі стріму: `createReadStream("access.log")` + події `.on("data")` і `.on("end")`.
- [`example03.js`](./example03.js) - запис у стрім: `createWriteStream("output.txt")`, кілька `write()`, завершення через `end()`.
- [`example04.js`](./example04.js) - використання `pipe()` між стрімами.
- [`example05.js`](./example05.js) - практичний пайплайн із трансформацією/копіюванням.
- [`example06.js`](./example06.js) - `fs.createReadStream` з `highWaterMark: 1024` і `encoding: "utf8"`, читання асинхронним циклом `for await...of`, вивід кожного чанка в `process.stdout` і підсумковий підрахунок байтів (очікується файл `access.log` поряд зі скриптом).
- [`video.mp4`](./video.mp4) - тестовий медіа-файл для прикладів потокової обробки.
