# Тема 2. Node.js під капотом - Event Loop, асинхронність та Streams

Практичний блок про внутрішню модель виконання Node.js. Тут зібрані приклади, які показують не "що таке async/await", а що реально відбувається в runtime: черги задач, фази Event Loop, I/O callback, спостереження за змінами файлів і потокова обробка даних.

## Структура теми

- [`01-event-loop`](./01-event-loop/) - детальні сценарії по фазах Event Loop, пріоритетах черг і комбінаціях async-механізмів.
  Деталі: [`01-event-loop/README.md`](./01-event-loop/README.md)
- [`02-watcher`](./02-watcher/) - практичні приклади моніторингу файлів і логування подій файлової системи.
  Деталі: [`02-watcher/README.md`](./02-watcher/README.md)
- [`03-streams`](./03-streams/) - вступ до потоків (`Readable`, `Writable`, `pipe`) на невеликих прикладах.
  Деталі: [`03-streams/README.md`](./03-streams/README.md)

## Швидкий старт

```bash
node ./01-event-loop/example01.js
node ./01-event-loop/example07.js
node ./01-event-loop/example11.js

node ./02-watcher/file_monitor.js

node ./03-streams/example01.js
node ./03-streams/example04.js
```
