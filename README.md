# mini-event-manager [![NPM Version][npm-image]][npm-url] [![codecov][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/mini-event-manager
[npm-url]:https://www.npmjs.com/package/mini-event-manager
[codecov-image]: https://codecov.io/gh/zenoslin/mini-event-manager/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/zenoslin/mini-event-manager

:satellite: A mini event manager.

## Get start

```bash
npm i -S mini-event-manager
```

Example:

```javascript
import miniEventManager from 'mini-event-manager';

const manager = new miniEventManager();
manager.on("add", val => console.log(val));
manager.emit("add", 1);
```

## Method 

### on(event, listener)

Bind event listener.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### off(event, listener)

Clear event listener. if  `listener === undefined` , it will clear all listener which bind this event.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### once(event, listener)

Bind event listener, only trigger once.

| name         | type   | data type       | need | description       |
| ------------ | ------ | --------------- | ---- | ----------------- |
| event        | param  | `String/Symbol` | yes  | event name        |
| listener     | param  | `Function`      | yes  | callback function |
| eventManager | return | `EventManager`  |      | instantiation     |

### emit(event[, ...args])

Trigger event listener.

| name         | type   | data type       | need | description   |
| ------------ | ------ | --------------- | ---- | ------------- |
| event        | param  | `String/Symbol` | yes  | event name    |
| ...args      | param  | `Any`           | yes  | params        |
| eventManager | return | `EventManager`  |      | instantiation |

### has(event)

Check if the event has a listener

| name  | type   | data type       | need | description |
| ----- | ------ | --------------- | ---- | ----------- |
| event | param  | `String/Symbol` | yes  | event name  |
|       | return | `Boolean`       |      | has         |

### destory()

Destory event manager instantiation.

## Build

```bash
git clone https://github.com/zenoslin/mini-event-manager.git
cd mini-event-manager
npm run build
```

## LICENSE
[MIT](LICENSE)