# 02-watcher

Приклади відстеження змін у файлах через `fs.watch`: обробка подій, логування змін та запуск із CLI-аргументами.

## Файли прикладів

- [`example01.js`](./example01.js) - базове підключення `fs.watch` до файлу.
- [`example02.js`](./example02.js) - розширений варіант обробки подій watcher.
- [`file_monitor.js`](./file_monitor.js) - клас `FileMonitor extends EventEmitter`: об'єднує `fs.watch`, `readFile`, `stat` і `setImmediate`; публікує власні події (`initialized`, `started`, `change-detected`, `content-updated`, `error`, `stopped`). Шлях до файлу захардкоджений як `'./test.txt'`.
- [`test.txt`](./test.txt) - тестовий файл для демонстрації змін.

## Запуск

```bash
node file_monitor.js
```
