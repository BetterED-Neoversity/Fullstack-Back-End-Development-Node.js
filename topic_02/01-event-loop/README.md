# 01-event-loop

Приклади на асинхронність у Node.js: черги `nextTick` і мікротаски, таймери, `setImmediate`, `queueMicrotask`, файловий I/O та `EventEmitter`. Нижче — що саме робить кожен файл.

## Приклади

- [`example01.js`](./example01.js) — `readFile` з `fs/promises`, `setTimeout(..., 0)` до читання і другий таймер усередині `.then()` після успішного читання. Показує перетин синхронного коду, таймера та колбеку після промісу (файл `./file.txt`).

- [`example02.js`](./example02.js) — після синхронних `Start`/`End` спочатку відпрацьовує ланцюжок `Promise.then` (мікротаски), потім `setTimeout` з нульовою затримкою.

- [`example03.js`](./example03.js) — порівняння `Promise.resolve().then` і `process.nextTick`: після синхронного коду в Node спочатку виконується `nextTick`, потім мікротаска з промісу.

- [`example04.js`](./example04.js) — мінімальний `EventEmitter`: `on('greeting')` і синхронний `emit('greeting', 'World')` без Event Loop.

- [`example05.js`](./example05.js) — черга викликів при синхронному `emit`: лог до `emit`, handler, лог після `emit`. `process.nextTick` тут не використовується.

- [`example06.js`](./example06.js) — два підписники на одну подію `data`; при одному `emit` викликаються обидва по черзі, синхронно.

- [`example07.js`](./example07.js) — клас `Database` на базі `EventEmitter`: відкладене `connect` через `setTimeout`, потім `query` з подіями `query`/`result` і `disconnect`. Імітація асинхронного клієнта БД подіями.

- [`example08.js`](./example08.js) — `emit('error', ...)` без зареєстрованого обробника `error`: типова ситуація «uncaught» для `EventEmitter` (процес падає, якщо не перехоплено глобально).

- [`example09.js`](./example09.js) — та сама ідея, що в `example07`, але з валідацією: порожній рядок підключення призводить до події `error`; обробник `once('error')` ловить помилку замість краху.

- [`example10.js`](./example10.js) — `connect` з випадковою невдачею; у `on('error')` — лічильник ретраїв і повторний `connect` через `setTimeout`. Подія `connected` при успіху.

- [`example11.js`](./example11.js) — синхронний `throw` всередині обробника події `data`: окремий `on('error')` **не** перехоплює виняток з handler — процес завершується з необробленою помилкою (у файлі закоментований варіант з `try/catch`).

- [`example12.js`](./example12.js) — один сценарій з `process.nextTick`, `Promise.then` і `setTimeout(0)` після синхронного блоку: у Node після `End` спочатку `nextTick`, потім мікротаски, потім таймер.

- [`example13.js`](./example13.js) — антипатерн: `emit('ready')` у конструкторі до того, як зовні викликано `on('ready')` — обробник не спрацьовує, бо підписка пізніша за публікацію.

- [`example14.js`](./example14.js) — виправлення з `example13`: `emit('ready')` відкладається через `process.nextTick`, щоб конструктор завершився і встиг виконатися `resource.on('ready', ...)`.

- [`example15.js`](./example15.js) — рекурсивний `process.nextTick` на велику кількість ітерацій; `setTimeout(..., 0)` не виконується, поки не скінчиться ланцюг `nextTick` (голодування таймера).

- [`example16.js`](./example16.js) — виклик `setImmediate(callback, 'Marina', 28)`: другий і третій аргументи передаються в колбек (аналогічно до `setTimeout` з додатковими аргументами).

- [`example17.js`](./example17.js) — важка обробка масиву партіями з `await` на `setImmediate` між партіями, щоб між ітераціями Event Loop міг обробляти інші задачі; паралельно `setInterval` логує тики — видно, що цикл не заблокований одним довгим синхронним циклом.

- [`example18.js`](./example18.js) — кілька вкладених `setImmediate` підряд і окремо `setTimeout(0)`; таймер може виконатися між ітераціями `setImmediate` залежно від планування.

- [`example19.js`](./example19.js) — лише `setTimeout(0)` і `setImmediate()` без попереднього I/O: порядок між ними в Node **не гарантований** стабільно (на відміну від випадку після I/O callback).

- [`example20.js`](./example20.js) — після `readFile` (I/O callback) плануються `setTimeout(0)` і `setImmediate`: у типовому випадку в Node `setImmediate` у такому контексті йде перед `setTimeout` з нулем.

- [`example21.js`](./example21.js) — `queueMicrotask`, `Promise.then` і `process.nextTick` після синхронних логів: спочатку черга `nextTick`, потім мікротаски (`queueMicrotask` і проміси в одній фазі мікротасків, порядок постановки в чергу).

- [`example22.js`](./example22.js) — вкладені `queueMicrotask`, плюс `Promise.resolve().then`: демонстрація того, як вкладені мікротаски дописуються в чергу під час поточного проходу мікротасків.

- [`example23.js`](./example23.js) — `queueMicrotask` і `setImmediate`: мікротаска виконується на фазі мікротасків раніше, ніж колбек `setImmediate` (фаза check).

## Додаткові файли

- [`file.txt`](./file.txt) — тестовий файл для `example01.js` і `example20.js`.
